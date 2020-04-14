const express = require('express')
const app = express()
require('./db/mongoose')
const User = require('./db/models/user')
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.get('/users/:id', (req, res) => {
    const _id = req.params.id
    console.log(req.params.id)
    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    }).catch((e) => {
        res.status(404).send(e)
    })
})

app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

/* app.patch('/users/:id', (req, res) => {
    
    
})
 */
















app.listen(port, () => {
    console.log('Server is up on port ' + port)
})