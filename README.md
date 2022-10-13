# 問題

Q1描述:
新增餐廳的連結放在main.hbs，以下是app.js的新增路由。
new.hbs尚未完成，但點擊主頁的新增餐廳無法跳轉。
```
app.get('/restaurants/new', (req, res) => {
  res.render('new')
})

app.post('/restaurants', (req, res) => {
  Restaurant.create(req.body)
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})
```

Q2.另外就是json資料上傳資料庫的時候，沒有傳入新開的伺服器，反而傳入前一次作業裡的todo-list資料庫。
是因為我在前一次todo-list資料庫使用永久性的新增關係嗎?
```
echo "export MONGODB_URI=mongodb+srv://alpha:camp@cluster0.fovij.mongodb.net/todo-list?retryWrites=true&w=majority" >> ~/.bash_profile
```

Q3.每次重跑專案的時候，資料庫不會重新載入json檔案嗎?等於我在網頁內的修改是無法復原的?


## 環境建置與需求 
* npm 
* node.js 

## 安裝
1. 將專案 clone 到本地
2. 透過終端機進入資料夾，輸入:
   ```
   git init -y
   ```
3. 安裝完畢後輸入:
   ```
   npm run dev
   ```
4. 看見此行訊息則代表順利運行:
   "3000 is running now."
5. 請在瀏覽器輸入以下網址:
   http://localhost:3000
6. 結束使用請在終端機中輸入:
   ```
   ctrl + c
   ```
7. 再次開啟，從步驟3開始。

## 開發工具

* Node.js 16.17.1
* Express 4.16.4
* Express-Handlebars 3.0.0
* Bootstrap 4.1.3
* Font-awesome 6.2.0
=======
# 2-3.A7.restaurant_list
>>>>>>> e1a5126 (update new page file)
>>>>>>> newbranch
