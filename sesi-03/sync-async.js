setTimeout(() => {
  console.log("async 1")
}, 1000) // Async
setTimeout(() => {
  console.log("async 2")
}, 0) // Async

console.log("Ini proses 1") // Sync
console.log("Ini proses 2") // Sync

/**
 * Sync - proses yang tidak akan jalan kalo masih ada proses yang berlangsung
 * Async - Proses akan langsung jalan walaupun proses sebelumnya belum selesai
 * 
 * 
 * 2
 * sync
 * A - Indoapril eskrim -> Pulang
 * B - Alfamaret ciki -> pulang
 * 
 * sync
 * A - Indoapril eskrim -> nungguin
 * B - Alfamaret ciki -> A belom pulang
 */