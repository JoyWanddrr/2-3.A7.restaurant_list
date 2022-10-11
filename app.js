const express = require('express')
const app = express()
// 連接資料庫，先npm mongoose，在robo 3T設定資料庫，在終端機裡設定連線
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// 取得連線狀態
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})


app.listen(3000, () => {
  console.log('express now is listening on prot 3000.')
})