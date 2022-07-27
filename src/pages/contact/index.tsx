import { Divider, Grid, Heading, Text } from '@chakra-ui/react'
import Header from 'components/Layout/Header/Header'
import React from 'react'

export default function About() {
  return (
    <Grid>
      <Grid marginTop={12}>
        <Heading>Great, so get in touch with me :)</Heading>
        <Text>
          Please, take some time to read more about me{' '}
          <a
            href="https://www.notion.so/henriquederosa/Henrique-Derosa-Resume-0eba4e1158c040b289b58833d61fbdd2"
            target="_blank"
            rel="noreferrer"
          >
            <Text as="span" color="primary">
              here
            </Text>
          </a>
        </Text>
      </Grid>
      <Divider marginY={18} />
      <Grid>
        <a
          href="https://www.linkedin.com/in/henriquederosa/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/henriqueDerosa"
          target="_blank"
          rel="noreferrer"
        >
          GitHub User
        </a>
        <Text>Or email me directly: contato.h@gmail.com</Text>
      </Grid>
    </Grid>
  )
}
