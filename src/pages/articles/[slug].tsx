import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, Flex, Text, useTheme } from '@chakra-ui/react'
import MarkdownComponents from 'components/Markdown/MarkdownComponents'
import request, { gql } from 'graphql-request'
import Post from 'models/post'
import { GetStaticPropsContext } from 'next'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { GRAPHCMS_API_TOKEN } from 'services/environment'
import { formatISO } from 'utils/dates'

export const Article = ({ title, content, coverImage, date, tags }: Post) => {
  const theme = useTheme()

  return (
    <Flex direction="column">
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        marginY={8}
      >
        <Flex width="100%" alignItems="center" justifyContent="flex-start">
          <Link href="/">
            <Text as="a" color="primary" cursor="pointer">
              <ChevronLeftIcon />
              Back to articles
            </Text>
          </Link>
        </Flex>
        <Box
          marginTop={8}
          width="100%"
          height="150px"
          borderRadius={8}
          overflow="hidden"
          background={`linear-gradient(rgba(0, 0, 0, 0.5), ${theme.colors.background} ) no-repeat, url('${coverImage?.url}') no-repeat center;`}
          backgroundSize="100%"
        >
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            paddingTop={12}
          >
            <Text textStyle="h1">{title}</Text>
            <Text>{formatISO(date)}</Text>
            <Flex justifyContent="space-between">
              {tags?.map((tag, index) => (
                <Text key={tag} marginLeft={2} fontSize={10}>
                  {tag}
                  {index < tags.length - 1 && ','}
                </Text>
              ))}
            </Flex>
          </Flex>
        </Box>
      </Flex>

      <ReactMarkdown
        components={MarkdownComponents}
        remarkPlugins={[remarkGfm]}
      >
        {content}
      </ReactMarkdown>
    </Flex>
  )
}

export const getStaticPaths = async () => {
  const { posts } = await request(
    'https://api-us-east-1.graphcms.com/v2/cl39eaq5o157t01xqa7917tfp/master',
    gql`
      query getPostsSlugs {
        posts() {
          slug
        }
      }
    `,
    {},
    {
      Authorization: `Bearer ${GRAPHCMS_API_TOKEN}`,
    }
  )
  return {
    paths: posts.map((post: Post) => ({ params: post })),
    fallback: true,
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  if (!params?.slug) return {}
  const { post } = await request(
    'https://api-us-east-1.graphcms.com/v2/cl39eaq5o157t01xqa7917tfp/master',
    gql`
      query getPostContent($slug: String!) {
        post(where: { slug: $slug }) {
          id
          title
          slug
          authors {
            id
            name
          }
          date
          tags
          content
          coverImage {
            url
          }
          publishedAt
        }
      }
    `,
    {
      slug: params?.slug,
    },
    {
      Authorization: `Bearer ${GRAPHCMS_API_TOKEN}`,
    }
  )

  return {
    props: post || {},
  }
}
export default Article
