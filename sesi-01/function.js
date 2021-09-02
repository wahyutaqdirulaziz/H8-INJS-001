// Function / method
// Potongan/block code yang bisa kita pakai berulang kali
// +-*/mod

let r = 10
const pi = 3.14

// luasLingkaran(10)
// luasLingkaran("tipe data yang berbeda")
// luasLingkaran(1)
// luasLingkaran(2)
// luasLingkaran(true)


function luasLingkaran(jari) {
  // jari number / bukan ?
  if (typeof jari === 'number') {
    console.log(pi * jari * jari)
  } else {
    console.log(jari + " Bukan angka")
  }
  // NaN -> Not a Number
}

// Operator komparasi: ===, !==, <, <=, >, >=, ==, !=
// true / false
// console.log(1 == '1')

// function yang menentukan panggilan tuan/nyonya
// function (name, gender)
// Yusuf, male -> tuan Yusuf

// Cara declare function
// 1. regular
function panggil(nama, gender) {}

// 2. variable declaration
const luasPersegi = function (p, l) {
  return p * l
}

// 3. arrow function declaration
const nilaiKHS = (nilai) => {
  /* 
  >= 80 -> A
  70 - 79 -> B
  60 - 69 -> C
  50 - 59 -> D
  < 50 -> E
   */
  if(nilai >= 80) {
    return 'A'
  } else if(nilai >= 70 && nilai <= 79) {
    return 'B'
  } else if(nilai >= 60) {
    return 'C'
  } else if(nilai >= 50) {
    return 'D'
  } else {
    return 'E'
  }
}
// console.log(nilaiKHS(87))
// console.log(nilaiKHS(75))


// Logical Operation

// console.log(luasPersegi(4, 5))

// input -> parameter (param1, param2, dst)
// proses -> { code }
// output -> return operasi

// exports.hitungLuasPersegi = luasPersegi


// module.exports = "Hello from function.js"

// module.exports = {
//   hitungLuasPersegi: luasPersegi,
// }