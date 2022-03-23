const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt')
const { db } = require('../../DB')

const saltRounds = 10

const getCurrentUser = (req, res) => {
  const { userId } = req.params

  const dataForClient = db.users.find((user) => user.userId === userId)

  if (!dataForClient) {
    return res.sendStatus(404)
  }

  return setTimeout(() => {
    res.json(dataForClient)
  }, 1e3)
}

const createUser = (req, res) => {
  const { userName, userEmail, userPassword } = req.body
  const dataFromClient = req.body

  if (!Object.values(dataFromClient).every((value) => !!value)) return res.sendStatus(400)

  const hashPass = bcrypt.hash(userPassword, saltRounds)

  const userId = uuidv4()

  const newUser = {
    userId,
    userName,
    userEmail,
    userPassword: hashPass,
  }

  db.users.push(newUser)

  // res.status(201).json(newUser)
  res.redirect('/posts')
}

module.exports = {
  getCurrentUser,
  createUser,
}
