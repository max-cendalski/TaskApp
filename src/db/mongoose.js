const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-app-REST', {
    useNewUrlParser: true,
    useCreateIndex: true
})


const User = mongoose.model('User', {
    name: {
        type: String
    },
    lastName: {
        type: String
    },
    age: {
        type: Number
    },
    password: {
        type: String
    }
})

const me = new User({
    name: 'Max',
    lastName: 'Cendalski',
    age: 43
})

me.save().then((me) => {
    console.log(me)
}).catch((e) => {
    console.log('Error!', error)
})