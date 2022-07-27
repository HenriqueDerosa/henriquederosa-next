import { Box, Divider, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import ArticleCard from 'components/ArticleCard/ArticleCard'
import request, { gql } from 'graphql-request'
import Post from 'models/post'
import { GRAPHCMS_API_TOKEN } from 'services/environment'

interface HomeProps {
  posts: Array<Post>
}

const Home = ({ posts }: HomeProps) => {
  return (
    <Box>
      <Divider marginY={8} />
      <Flex marginTop={8} flexDir="column" alignItems="flex-start" rowGap={2}>
        <Heading color="primary">Welcome,</Heading>
        <Text paddingLeft={12} color="gray.400">
          I am a Frontend Engineer specialized on React, and here you'll have
          access to my thoughts about <b>development</b>, <b>life</b> and{' '}
          <b>useful tips</b> I can give based on my experience. Hope you enjoy
          it. :)
        </Text>
      </Flex>
      <Divider marginY={8} />
      <Grid gridArea="values" marginBottom={5}>
        <Heading color="primary">Articles </Heading>
        {/* {posts?.length} */}
        {posts?.length > 0 &&
          posts.map((post) => (
            <ArticleCard
              key={post.id}
              post={post}
              href={`/articles/${post.slug}`}
            />
          ))}
      </Grid>
    </Box>
  )
}

export async function getServerSideProps() {
  const data = await request(
    'https://api-us-east-1.graphcms.com/v2/cl39eaq5o157t01xqa7917tfp/master',
    gql`
      query getPosts {
        posts {
          id
          title
          slug
          tags
          coverImage {
            id
            url
          }
          authors {
            id
            name
            picture {
              id
              url
            }
          }
        }
      }
    `,
    {},
    {
      Authorization: `Bearer ${GRAPHCMS_API_TOKEN}`,
    }
  )

  return {
    props: {
      posts: data?.posts || [],
    },
  }
}
export default Home
