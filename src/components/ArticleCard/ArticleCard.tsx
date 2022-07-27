import { Box, Flex, Text } from '@chakra-ui/react'
import Post from 'models/post'
import Image from 'next/image'
import Link from 'next/link'
import styles from './ArticleCard.module.scss'

interface ArticleCardProps {
  post: Post
  href: string
}

const ArticleCard = ({ post, href }: ArticleCardProps) => {
  return (
    <Link href={href}>
      <a>
        <Flex className={styles.card}>
          {post?.coverImage?.url && (
            <Box borderRadius={8} overflow="hidden" height="60px">
              <Image
                width={120}
                height={60}
                objectFit="cover"
                src={post.coverImage.url}
                alt={post.title}
              />
            </Box>
          )}
          <Flex flexDirection="column">
            <Text>{post.title}</Text>
            <Text color="gray">
              {post.tags?.map(
                (tag, index) =>
                  `${tag}${index < post.tags.length - 1 ? ', ' : ''}`
              )}
            </Text>
          </Flex>
        </Flex>
      </a>
    </Link>
  )
}

export default ArticleCard
