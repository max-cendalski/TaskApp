const mongoose = require('mongoose')
const validator = require('validator')




const User = require('./models/user')

mongoose.connect('mongodb://127.0.0.1:27017/task-app-REST', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})