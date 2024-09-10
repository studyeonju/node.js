const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    name: {
        type : String,
        maxlength : 50
    },
    email:{
        type:String,
        trim:true,
        //unique:1
    },
    password:{
        type:String,
        minlength:5
    },
    lastname:{
        type:String,
        maxlength:50
    },
    role : {
        type:Number,
        default:0

    },
    image:String,
    token:{
        type:String
    },
    tokenExp:{ //토큰유효기간 
        type:Number

    }
})
const User = mongoose.model('User',userSchema)//model은 스키마를 감싸주는 역할

module.exports={User} // 다른 곳에서도 쓸수있게 export 해준다.
