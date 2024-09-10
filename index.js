const express = require('express')
const app = express()
const port = 3000
const {User} = require("./models/User")

const bodyParser = require('body-parser');
const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


mongoose.connect('mongodb+srv://yeonju:1234@boilerplate.mfqkt.mongodb.net/?retryWrites=true&w=majority',{
 
// useNewUrlParser: true,  useUnifiedTopology: true,  useCreateIndex: true,   useFindAndModify: false
//mongoose 6버전 이상에선 더이상 useNewUrlParser, useUnifiedTopology, useFindAndModify, useCreateIndex 지원 안함

}).then(() => console.log('mongoDB connected..'))
.catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('안녕하세요 node.js study start')
})
/*

app.post('/register2', async (req,res) => {
  
    const user = new User(req.body)
  
    try {
      await user.save();
      console.log("res@@@@",res)
      return res.status(200).json({success:hello})
    } catch (err) {
      return res.json({success:false, err})
    }
  })
  
  */
app.post('/register',async (req,res)=> {
  
try{ 
  const user = new User(req.body);
  const userInfo = await user.save();
  console.log("@@@@@@@",userInfo)
  res.status(200).json({scucess:true,userInfo});
} catch (err) {
  res.json({ success:false, err})
  }

})
/*
app.post('/register', (req, res) => {
  // 회원가입 시 필요한 정보를 client로부터 받아오기
  const user = new User(req.body);
  // DB에 데이터 저장
  user.save()
  .then(() => {
      return res.status(200).json({
          success: true,
      })
  })
  .catch((error) => {
      return res.status(400).json({
          success: false,
          msg: error
      })
  })
})
*/
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


