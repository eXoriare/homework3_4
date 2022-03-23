import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { usePostsDetailContext } from '../PostsDetail'

const cardVariants = {
  start: {
    opacity: 0,
    y: 100,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
}

const PostsDetailCard = ({ a }) => {
  const navigate = useNavigate()

  const { post, openModal } = usePostsDetailContext()

  console.log({ a })

  return (
    <motion.div variants={cardVariants} initial="start" animate="end" className="card" style={{ width: '18rem' }}>
      <img src={post.pic} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{post.name}</h5>
        <p className="card-text">{post.post}</p>
        <p>Тут будет комментарий</p>
        <button type="button" onClick={() => navigate(-1)} className="btn btn-primary mx-1">Go back</button>
        <button type="button" onClick={openModal} className="btn btn-success mx-1">Edit</button>
      </div>
    </motion.div>
  )
}

export default PostsDetailCard

// Если данный компонент всегда будет испльзоваться вместе с лоадером
// export default withLoader(PostsDetailCard)
