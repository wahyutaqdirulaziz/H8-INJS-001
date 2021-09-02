const axios = require('axios')
const fs = require('fs')

// npm init
// command - npm install <package>
// Node Package Manager

// Promise - berhasil / gagal

// Order Gojek
// klik order -> nunggu -> terima barang -> data
                    // -> abangnya nolak -> err + reason

let gojek = new Promise(function (resolve, reject) {
  let random = 1 // Math.round(Math.random()) // 0 / 1
  if(random === 1) {
    resolve('Nasi Goreng')
  } else {
    reject('Ban Bocor')
  }
})

// gojek
// .then((data) => {
//   console.log('masuk then')
//   console.log(data)
// })
// .then((data) => {
//   console.log('masuk then')
//   console.log(data)
// })
// .then((data) => {
//   console.log('masuk then')
//   console.log(data)
// })
// .then((data) => {
//   console.log('masuk then')
//   console.log(data)
// })
// .catch((err) => {
//   console.log('masuk catch')
//   console.log(err)
// })

// fs.readFile('./input.txt', 'utf-8', (err, data) => {
//   if(err) {
//     console.log(err)
//   } else {
//     fs.readFile('./output.txt', 'utf-8', (err2, data2) => {
//       if(err2) {
//         console.log(err2)
//       } else {
//         console.log('ini file1->', data)
//         console.log('ini file 2->', data2)
//       }
//     })
//   }
// })


// promise -> mengatasi banyak if untuk cek data & error
axios({
  method: 'get',
  url: 'https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json'
})
.then((response) => {
  console.log(response.data)
})
.catch(err => {
  console.log(err)
})