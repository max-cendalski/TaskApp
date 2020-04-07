const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-app-REST', {
    useNewUrlParser: true,
    useCreateIndex: true
})


const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String
    },
    age: {
        type: Number,
        default: 18,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number!')
            }
        }
    },
    password: {
        type: String
    },
    email: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    }
})

const me = new User({
    name: 'Arkadiusz',
    lastName: 'Cendal',
    age: 43,
    email: 'AKIz@vp.pl'
})

me.save().then((me) => {
    console.log(me)
}).catch((e) => {
    console.log('Error!', error)
})