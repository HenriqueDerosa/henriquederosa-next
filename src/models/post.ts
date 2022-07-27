import Author from './author'

class Post {
  id = ''
  slug = ''
  title = ''
  localizations = []
  authors: Array<Author> = []
  content = ''
  date = ''
  tags: Array<string> = []
  coverImage?: { id: string; url: string } = undefined

  constructor(init: Partial<Post>) {
    Object.assign(this, init)
  }
}

export default Post
