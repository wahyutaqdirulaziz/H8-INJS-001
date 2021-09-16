const express = require('express')
const data = require("./data.json")
const app = express()
const port = 3000
const fs = require('fs')

// require(pug)
app.set("view engine", "pug")
app.use(express.urlencoded({ extended: true }))

// Hey gw pake pug buat nampilin html

// query -> cari data berdasarkan query -> ga harus nama, bisa yang lain
app.get('/', (req, res) => {
  // jika ada query / tidak
  if(req.query.first === undefined) {
    res.render('index.ejs', { data: data })
  } else {
    let inputFirst = req.query.first
    let find = data.find((el) => {
      return (inputFirst.toLowerCase() === el.first_name.toLowerCase())
    })
    res.render('index.ejs', { data: [find] })
  }
})

// params -> cari data berdasarkan ID
app.get('/:id', (req, res) => {
  let find = data.find(item => {
    return item.id === Number(req.params.id)
  })
  res.send(find)
})

// body -> nambah/update data
app.post('/create', (req, res) => {
  console.log(req.body)
  let obj = {
    id: data.length,
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    avatar: req.body.avatar,
  }
  data.push(obj)
  fs.writeFileSync('./data.json', JSON.stringify(data, null, 2), 'utf-8')
  res.redirect('/') // GET
})

app.listen(port, () => {
  console.log('Listening on port:', port)
})
  /**
   * Input Express Server
   * 
   *            umumnya dipakai di method:
   * req.body -> POST, PUT, PATCH -> postman/insomnia/REST Client lain, form POST
   * req.query -> GET -> url ? key=value
   * req.params -> GET, POST, PUT, PATCH, DELETE -> endpoint handler :variable
   * https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png
   */