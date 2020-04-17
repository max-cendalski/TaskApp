const express = require('express')
require('./db/mongoose')
const User = require('./db/models/user')
const port = process.env.PORT || 3000
const userRouter = require('./db/routers/user')

const app = express()
app.use(express.json())
app.use(userRouter)








app.listen(port, () => {
    console.log('Server is up on port ' + port + ' and running')
})