const express = require('express')
require('./db/mongoose')
const User = require('./db/models/user')
const port = process.env.PORT || 3000
const userRouter = require('./db/routers/user')

const app = express()
app.use(express.json())
app.use(userRouter)

const jwt = require('jsonwebtoken')


const myFunction = async() => {
    const token = jwt.sign({ _id: 'abc123' }, 'secretkey', { expiresIn: '7 days' })
    console.log(token)

    const data = jwt.verify(token, 'secretkey')
    console.log(data)

}

myFunction()



app.listen(port, () => {
    console.log('Server is up on port ' + port + ' and running')
})