import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import rangeParser from 'parse-numeric-range'
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'
import dart from 'react-syntax-highlighter/dist/cjs/languages/prism/dart'
import csharp from 'react-syntax-highlighter/dist/cjs/languages/prism/csharp'

import * as themes from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Components } from 'react-markdown'
import { StyleProps, Text } from '@chakra-ui/react'

SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('dart', dart)
SyntaxHighlighter.registerLanguage('csharp', csharp)

const syntaxTheme = themes.materialOceanic

const multiLineCodeStyle = {
  borderRadius: 16,
  boxShadow: '0px 3px 8px rgba(0,0,0,0.2)',
  marginTop: 16,
  marginBottom: 16,
}
const inlineCodeStyle = {
  padding: 4,
}

const MarkdownComponents: Components = {
  h1: (props: StyleProps) => <Text textStyle="h2" {...props} />,
  h2: (props: StyleProps) => <Text textStyle="h3" {...props} />,
  h3: (props: StyleProps) => <Text textStyle="h4" {...props} />,
  ul: (props: StyleProps) => <Text marginY={6} {...props} />,
  code: ({ node, className, children }) => {
    const match = /language-(\w+)/.exec(className || '')
    const hasMeta = node?.data?.meta !== undefined

    const applyHighlights: object = (applyHighlights: number) => {
      if (!hasMeta) {
        return {}
      }

      const RE = /{([\d,-]+)}/
      const metadata = node.data.meta.replace(/\s/g, '')
      const lineNumbers = RE?.exec(metadata)?.[1] || '0'
      const highlightLines = rangeParser(lineNumbers)
      const highlight = highlightLines
      const data: string | null = highlight.includes(applyHighlights)
        ? 'highlight'
        : null
      return { data }
    }

    return match ? (
      <SyntaxHighlighter
        style={syntaxTheme}
        language={match[1]}
        PreTag="div"
        customStyle={multiLineCodeStyle}
        showLineNumbers={true}
        wrapLines={true}
        useInlineStyles={true}
        lineProps={applyHighlights}
      >
        {children}
      </SyntaxHighlighter>
    ) : (
      <SyntaxHighlighter
        style={syntaxTheme}
        PreTag="code"
        customStyle={inlineCodeStyle}
        wrapLines={true}
        wrapLongLines={true}
        lineProps={applyHighlights}
      >
        {children}
      </SyntaxHighlighter>
    )
  },
}

export default MarkdownComponents
