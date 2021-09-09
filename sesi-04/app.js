const express = require("express")
const port = 3000
const app = express()
const axios = require('axios')
const data = require('./data.json')
const fs = require('fs')
// 1. url path
// 2. function yang akan dijalankan / callback
// http://localhost:port
// (err, data) != (data, err)
// (req, res) != (res, req)

// untuk menjelaskan ke pengguna/user

// Middleware
// Ngasih tau express supaya dia bisa terima data dalam bentuk JSON
app.use(express.json())
// Ngasih tau express supaya dia bisa terima data dalam bentuk URL Encoded?
app.use(express.urlencoded({ extended: true }))

// Middleware - function yang dipakai sebelum server memberikan response
// (cth: belum res.send)
// Karakteristik -> ada next di param ke-3 dan digunakan
const fn1 = (request, response, next) => {
  console.log('Masuk GET /')
  // asdfhaksdjfhk
  // sakljdfhklsjdfh
  // salkdjfhlksjdfh
  next()
  // string, json
}

function fn2 (req, res) {
  axios({
    method: 'get',
    url: 'https://reqres.in/api/users'
  })
  .then(({data}) => {

    res.send(data)
    fs.writeFileSync('./data.json', JSON.stringify(data.data, null, 2), 'utf-8')
  })
  .catch(err => {
    console.log(err)
  })
  // console.log("masuk GET / kedua")
  // res.send("<h1>Hello from express.js</h1>")
}

app.get('/', fn1, fn2)

// app.get(url, callback, callback, callback, )

// Menampilkan data users
app.get('/users', (req, res) => {
  data.push({
    id: data.length,
    first_name: 'yusuf',
    last_name: 'Muhammad',
    email: 'ucup@mail.com'
  })
  res.send(data)
})

// Get salah satu user berdasarkan id
app.get('/users/yusuf', (req, res) => { res.send('Yusuf') })
app.get('/users/:id', (req, res) => {
  console.log(req.params)
  res.send(data[req.params.id - 1])
})



// 1 endpoint untuk tambah user
/*
1. menggunakan middleware express.json dan express.urlencoded
2. Siapkan route POST /users
3. Menerima data dari formulir -> req.body (id diambil dari arr.length)
4. dataJSON.push(body)
5. fs.writeFile(data.json)
6. Message sukses/gagal

Delete berdasarkan

body
data.json

*/


// route, endpoint, url, path
app.post('/', (request, response) => {
  console.log('Masuk POST /')
  console.log(request.body)
  response.send("<h1>POST /</h1>")
  // string, json
})



// app.put()

app.listen(port, () => {
  console.log("Listening on port:", port)
})

// JSON - JavaScript Object Notation
// Array
// Object

/*
HTTP Methods
GET - minta data, buka halaman -> via serach box browser
POST - mengirim data -> text, json, file

PUT - update/edit data, overwrite
PATCH - update/edit data, hanya update yang diperlukan
DELETE - delete data



express.json()
express.urlencoded()
GET /
POST /
GET /users


Posisi menentukan Prestasi
*/