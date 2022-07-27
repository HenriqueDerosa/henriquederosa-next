import { Flex, Grid, Link, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Flex as="footer" fontSize={12} justifyContent="space-between">
      <Grid>
        <Text>Developed by Henrique Derosa</Text>
        <Text>Contact me for mentorship! 😉</Text>
      </Grid>
      <Grid textAlign="right">
        <Link href="#" target="_blank" rel="noopener noreferrer">
          Github
        </Link>
        <Link href="#" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </Link>
      </Grid>
    </Flex>
  )
}

export default Footer
