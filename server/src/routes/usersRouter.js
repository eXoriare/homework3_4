const express = require('express')
const {
  getCurrentUser, createUser,
} = require('../controllers/usersController')

const usersRouter = express.Router()

usersRouter.route('/auth/signup')
  .post(createUser)

usersRouter.route('/auth/signin')
  .post(getCurrentUser)

module.exports = {
  usersRouter,
}
