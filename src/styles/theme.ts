import { extendTheme } from '@chakra-ui/react'

const colors = {
  primary: '#b0fbbc',
  secondary: '#436c88',
  text: '#D1D1D1',
  background: '#1c2a34',
  backgroundLighter: '#37394e',
}

const theme = extendTheme({
  colors,
  styles: {
    global: {
      '*': {
        boxSizing: 'border-box',
      },
      html: {
        fontSize: '62.5%',
      },
      body: {
        padding: 8,
        margin: 'auto',
        width: ['100%', '90%', '70%', '850px'],
        height: '100vh',
        background: '#1c2a34',
        // bgGradient: 'linear-gradient(to right, #1c2a34, #111a20)',
        fontSize: ['1.4rem', '1.6rem', '1.8rem'],
        fontWeight: 'normal',
      },
      'p, span, small, h1, h2, h3, h4, h5, h6, i, b, code': {
        color: 'text',
      },
      code: {
        color: 'primary',
      },
      button: {
        marginY: 2,
      },
    },
  },
  textStyles: {
    h1: {
      fontSize: ['3.8rem', '4.8rem'],
      fontWeight: 'bold',
      lineHeight: '1.2',
      textShadow: '0px 0px 30px rgba(188, 251, 195, 0.4)',
      color: 'primary',
      marginBottom: 2,
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginTop: 12,
      borderBottom: '0.1rem solid #ffffff19',
    },
    h3: {
      fontSize: '2.8rem',
      fontWeight: 'bold',
      marginTop: 8,
    },
    h4: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginTop: 8,
    },
    button: {
      fontSize: '1.6rem',
    },
  },
})

export default theme
