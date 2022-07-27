import { getPrismicClient } from '../../../services/prismic'

export default async function handler(req, res){
  const prismic = getPrismicClient(req)
 
  const blogPost = await prismic.getByID(req.query.id) 
  res.status(200).json(blogPost)
} 
