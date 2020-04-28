const express = require('express')
const path = require('path')
require('./db/mongoose')
const userRouter = require('./db/routers/user')
const auth = require('./db/middleware/auth')

const publicDirectoryPath = path.join(__dirname, '../public')
const app = express()
const port = process.env.PORT || 3000
app.use(express.static(publicDirectoryPath))

/* app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})

app.use((req, res, next) => {
    res.status(503).send('Website is down')
}) */
app.use(express.json())
app.use(userRouter)




app.listen(port, () => {
    console.log('Server is up on port ' + port + ' and running')
})