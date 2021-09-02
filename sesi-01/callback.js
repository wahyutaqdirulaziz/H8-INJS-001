// Yusuf
function jajanBubur() {
  // console.log("Saya beli bubur")
  return "Saya beli bubur"
}

// Hafid
function beliKetoprak(fn) {
  console.log("Saya beli ketoprak")
  // beliBubur()
  fn()
}

// beliKetoprak(jajanBubur)

// Array (structured)
let arr = [
  1, 'dua', true, ['array lagi']
]
arr = ['Yusuf', 'Izhar', 'Lestari', 'Saman']
// console.log(arr)
arr.push("Wahyu")
// console.log(arr)
arr.sort()
// console.log(arr)

let arr_2 = [ 5, 4, 3, 2, 1, 13, 45, 67, 89 ]
// Callback
function cari(item) {
  return item === 10
}
let hasil = arr_2.find(cari)
// find -> bukan punya kita -> harus lempar function
// cari -> punya kita

// find -> function untuk mencari sesuatu
// cari -> function pencarian yang kita tentukan


console.log(hasil)






// function compare(a, b) {
//   console.log(a, b, a - b)
//   return a - b
// }
// arr_2.sort(compare)
// jika parameter sort kosong -> angka sebagai string
// console.log(arr_2)

