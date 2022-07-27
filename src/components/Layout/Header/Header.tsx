import { ROUTES } from 'utils/routes'
import NextImage from 'next/image'
import { Heading, Button, Flex, Text, Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const avatarSize = '70px'

const Header = () => {
  const currentRoute = useRouter()
  // const isMobileScreen = useMediaQuery(['(min-width: 1920px)'])
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      _hover={{
        ' h2': {
          textShadow: '0 0 18px #b0fbbc90',
          color: 'primary',
        },
      }}
    >
      <Flex flexDir="row" alignItems="center" columnGap={8}>
        <Box
          display={['none', 'block']}
          borderRadius="full"
          overflow="hidden"
          boxSize={avatarSize}
        >
          <NextImage
            src="/images/pic.png"
            quality={100}
            width={avatarSize}
            height={avatarSize}
            objectFit="cover"
          />
        </Box>
        <Flex direction="column">
          <Heading transition="all 0.4s">Henrique Derosa</Heading>
          <a
            href="https://www.notion.so/henriquederosa/Henrique-Derosa-Resume-0eba4e1158c040b289b58833d61fbdd2"
            target="_blank"
            rel="noreferrer"
          >
            <Text fontSize={12} color="primary">
              About me
            </Text>
          </a>
        </Flex>
      </Flex>
      <Flex>
        {ROUTES.map((route) => (
          <Button
            mx={2}
            variant="ghost"
            borderWidth={1}
            borderColor="transparent"
            borderRadius="lg"
            _hover={{
              borderColor: 'primary',
            }}
            key={route.path}
            as="a"
            href={route.path}
            paddingY={6}
            {...(currentRoute.asPath === route.path && {
              _hover: {},
              disabled: true,
              borderBottom: '3px solid',
              borderBottomColor: 'primary',
            })}
          >
            <Text fontSize={[14, 16, 18]}>{route.label}</Text>
          </Button>
        ))}
      </Flex>
    </Flex>
  )
}

export default Header
