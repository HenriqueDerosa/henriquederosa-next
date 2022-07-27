import { ChakraProvider, Skeleton, Stack } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import theme from 'styles/theme'
import Header from 'components/Layout/Header/Header'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

// TODO: Add nprogress loading indicator
// Router.events.on('routeChangeStart', (url) => {})

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleComplete = () => setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Header />
      {loading ? (
        <Stack marginTop={16}>
          <Skeleton height="100px" />
          <Skeleton height="4px" />
          {[0.8, 0.4, 0.2].map((opacity, index) => (
            <Skeleton key={index} height="50px" opacity={opacity} />
          ))}
        </Stack>
      ) : (
        <Component {...pageProps} />
      )}
    </ChakraProvider>
  )
}

export default MyApp
