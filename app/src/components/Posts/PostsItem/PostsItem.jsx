import { motion } from 'framer-motion'

const { Link } = require('react-router-dom')

const postsItemVariants = {
  start: {
    scaleY: 0,
    opacity: 0,
    zIndex: -1,
  },
  end: {
    scaleY: 1,
    opacity: 1,
    zIndex: 1,
  },
}

const PostsItem = ({
  name, post, id, pic,
}) => (
  <motion.div variants={postsItemVariants}>
    <Link className="list-group-item list-group-item-action" to={`/posts/${id}`}>
      <section className="modal-sm">
        <img src={pic} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{post}</p>
        </div>
      </section>
    </Link>
  </motion.div>
)

export default PostsItem
