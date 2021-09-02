const EventEmitter = require('events')
class MyEmitter extends EventEmitter {}
let myEmitter = new MyEmitter()
let myEmitter2 = new MyEmitter()

function dengerLagu() {
  console.log("Nissa sabyan I love you")
}
// listen -> 'dor' -> jalanin fn kaget
// listener
myEmitter.on('102.2 FM', dengerLagu)


myEmitter.on('error', function (error) {
  console.log('Terjadi kesalahan:')
  console.log(error)
})

// myEmitter.emit('error', new Error("Radio rusak, ganti spot"))

myEmitter.on('102.2 FM', function () {
  console.log('mendengarkan podcast')
})
// Prambors
// myEmitter.emit('102.2 FM')
// myEmitter2.emit('102.2 FM')


// deprecated - fiturnya masih bisa, tapi siap-siap ga bisa dipake di update berikutnya
let listenerCount = EventEmitter.listenerCount(myEmitter, '102.2 FM')

// console.log('Ada ' + listenerCount + ' listener sekarang')

// console.log(new Error('Hey'))