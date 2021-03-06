const express = require('express')
const cors = require('cors')
const { postsRouter } = require('./src/routes/postsRouter')
const { usersRouter } = require('./src/routes/usersRouter')

const PORT = 3000

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1/posts', postsRouter)

app.use('/api/v1/users', usersRouter)

app.listen(PORT, () => {
  console.log('Server has been started on port:', PORT)
})
