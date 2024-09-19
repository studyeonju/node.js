const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;// salt를 10자리 설정
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

//bcrypt 로 비밀번호 암호화 ㄴ
userSchema.pre('save',function( next ){ //save 하기전에 함수를 먼저 실행한다.
    var user = this;

    if(user.isModified('password')){
        // salt를 이용해서 비밀번호 암호화
        bcrypt.genSalt(saltRounds, function(err, salt) {//salt 생성
            if(err) return next(err); // err면 
            bcrypt.hash(user.password, salt, function(err, hash) { // user.password : 암호화안된 비밀번호 
                if(err) return next(err);
                user.password = hash;
                console.log("hash@@",hash)
                next();
            });
        });

    }

})
const User = mongoose.model('User',userSchema)//model은 스키마를 감싸주는 역할

module.exports={User} // 다른 곳에서도 쓸수있게 export 해준다.
