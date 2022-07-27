import { GraphQLClient } from 'graphql-request'
import { API_URL, GRAPHCMS_API_TOKEN } from './environment'

interface FetchTypes {
  query: string
  variables?: object
}

const fetch = ({ query, variables = {} }: FetchTypes) => {
  const client = new GraphQLClient(API_URL, {
    headers: {
      Authorization: `Bearer ${GRAPHCMS_API_TOKEN}`,
    },
  })

  return client.request(query, variables)
}

export default fetch
