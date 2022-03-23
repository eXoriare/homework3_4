import { motion } from 'framer-motion'
import SignInForm from '../SignIn/SignInForm'

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

const Main = ({ name, post, id }) => (
  <div>
    <h1 className="d-flex justify-content-center my-2 mx-5">Добро пожаловать в наш уютный нянстаграм o(ω)o</h1>
    <SignInForm />
    <div>
      <img className="rounded float-left" src="https://i.pinimg.com/originals/29/49/f3/2949f30af92241fa7c13d185ae38eb27.jpg" alt="" />
      <motion.div variants={postsItemVariants} className="rounded float-right">
        <Link className="list-group-item list-group-item-action" to={`/posts/${id}`}>
          <span className="pe-4">
            {name}
          </span>
          <span>

            {post}
          </span>
        </Link>

      </motion.div>
    </div>
  </div>
)

export default Main
