import { motion } from 'framer-motion'
import { useContext } from 'react'
import { PostsContext } from '../Posts'
import PostsItem from '../PostsItem/PostsItem'

const postsListVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
}

const PostsList = () => {
  const { posts } = useContext(PostsContext)

  return (
    <div className="d-flex justify-content-center">
      {
        posts.length ? (
          <motion.div variants={postsListVariants} initial="start" animate="end" className="list-group">
            {posts.map((post) => (
              <PostsItem key={post.id} {...post} />
            ))}
          </motion.div>
        ) : null
      }
    </div>
  )
}

export default PostsList
