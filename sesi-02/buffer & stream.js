// Pro tip: require ditaro di paling atas
const fs = require('fs') // file system

/**
 * rumah 1 -> go box -> rumah 2
 */
// Buffer -> penampung yang diisi data, kan ditransfer ketika penuh 

const buffer = Buffer.alloc(10)

console.log(buffer.write('yusuf'))
console.log(buffer.toString('utf-8'))

// Stream -> pengisian buffer smpai buffer pertama diterima di tujuan
let readableStream = fs.createReadStream('./input.txt')
let writableStream = fs.createWriteStream('./output.txt')

readableStream.pipe(writableStream)
console.log('Selesai Piping!')

// listener
// readableStream.on('data', function (data) {
//   console.log(data)
// })