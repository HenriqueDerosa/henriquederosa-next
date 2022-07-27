import { Flex, Heading, Image, Link } from '@chakra-ui/react'

const MinhaConsagracao = () => {
  return (
    <Flex direction="column">
      <Heading fontSize={27}>Minha Consagração</Heading>
      <Flex direction="column" alignItems="center">
        <Image
          objectFit="cover"
          width="320px"
          src="images/minhaconsagracao.png"
          alt="Minha Consagração"
        />

        <Flex mt={4} flexDirection="column" width="100%">
          <Heading marginBottom={8}>Download</Heading>
          <Link
            color="primary"
            href="https://play.google.com/store/apps/details?id=br.com.henriquederosa.consagracao"
          >
            IPhone | AppStore
          </Link>
          <Link
            color="primary"
            href="https://play.google.com/store/apps/details?id=com.pius.minhaconsagracao"
          >
            Android | GooglePlay
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default MinhaConsagracao
