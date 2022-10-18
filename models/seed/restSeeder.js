// 種子資料腳本，並且以指令執行腳本，建立種子資料。

const mongoose = require('mongoose')
// 載入 restaurant model
const Restaurant = require('../restaurant')
// 載入restaurant.json
const restaurantList = require('./restaurant.json').results
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  // 想的太複雜了，直接把results提取放入就可以
  Restaurant.create(restaurantList)
    .then(() => {
      console.log('restaurantSeeder done!')
      // db.close()
    })
    .catch(err => console.error(err))
})