
import mongoose from 'mongoose'
import crypto from 'crypto'
let usersSchema=mongoose.Schema({
_id: {
    type: ObjectId,
},
email:{
    type: String,
},
name:{
    type: String,
    required:true,

},
paasword:{
    type: String,
},
jwt:{
    type: String,
},

})

const Users=mongoose.model('Users', usersSchema)

//összes felhasználó  lekérése
const getUsers=(callback, limit) =>Users.find(callback).limit(limit)
 const getJwt=(data, callback) => Users.findOne({
    email: data.email,
    password: crypto.createHash('md5').update(data.password).digest('hex'),
 }, callback)

 const validateJwt=(jwt, callback) =>Users.findOne({jwt:jwt}, callback)
export  {getUsers, getJwt, validateJwt}
