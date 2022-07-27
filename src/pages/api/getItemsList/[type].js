import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../../services/prismic'

export default async function handler(req, res){
  const prismic = getPrismicClient(req)

  try {

    const courses = await prismic.query([
      Prismic.Predicates.at('document.type', req.query.type),
    ],
    { pageSize : 25, page : 1 })
  
    return res.status(200).json(courses)
  } catch (e) {
    return res.status(500).json({'error': e.statusText})
  }
}
