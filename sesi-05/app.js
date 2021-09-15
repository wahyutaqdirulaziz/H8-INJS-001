const express = require('express')
const app = express()
const port = 3000

// let path = __dirname.split('/');
// path.pop()
// path = path.join('/')
// console.log(path)

// Middleware - ada sebelum definisi route pertama
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use((req, res, next) => {
  console.log('Masuk middleware buatan sendiri')
  next()
})

// route pertama
app.get('/mid', (req, res, next) => {
  console.log('Middleware 1')
  next()
}, (req, res) => {
  console.log(('Endpoint handler'))
  res.send('Ini Home')
})

// contoh autentikasi
app.use((req, res, next) => {
  // req.headers -> object yang bawa data identitas kita
  if(req.headers.token !== undefined) {
    next()
  } else {
    next(new Error('Unauthenticated!'))
  }
})

app.get('/route-baru', (req, res) => {
  // res.send('Ini route baru')
  res.sendFile('./public/index.html', { root: __dirname })
})

app.get('/apaya', (req, res) => {
  res.send('Ini route apa ya?')
  // res.sendFile('./public/index.html', { root: __dirname })
})

// apakah next bisa terima parameter? bisa, akan jadi error
// biar bisa diterima di handler berikutnya?
app.get('/res-sebelum-next', (req, res, next) => {
  // res.send('Ini res sebelum next')
  console.log('sebelum negara api menyerang')
  let data = [
    { name: "samsung" },
    { name: "iphone" },
    { name: "redmi" }
  ]
  req.dataDariAxios = data
  // next(new Error("Negara Api"))
  next()
}, (req, res) => {
  console.log('Masuk endpoint handler/mid terakhir')
  console.log(req.dataDariAxios)
  res.send("Ini res setelah next")
})

// Setelah semua definisi route
app.use(function (err, req, res, next) {
  console.log('------------------Ini errornya------------------')
  let errCode = 500
  if(err.message === 'Unauthenticated!') {
    errCode = 401
  }
  res.status(errCode).send(err.message)
})


// 2

app.listen(port, () => {
  console.log('Listening on port:', port)
})

// 3


/*
Autentikasi
Pengecekan apakah user sudah terdaftar di server kita atau tidak
dia udah register?
ada di DB?

sukses -> boleh masuk ke endpoint yang dituju dari awal
gagal -> error unauthenticated (401)


Middleware awal (setup server)

 - Open Route
GET /

app.use(authentication)

 - Restricted Route
GET /profil

Middeware error handler



*/