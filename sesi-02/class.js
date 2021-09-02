
// OOP -> Object Oriented Programming
// class -> Object yang punya method, karakteristik OOP
// Javascript OOP-nya tidak kuat

let yusuf = {
  name: 'Muhammad Yusuf',
  age: 20,
  jurusan: 'Teknik Informatika',
  hobi: 'makan'
}

let saman = {
  name: 'Saman Supriadi',
  age: 21,
  jurusan: 'Mtk',
  hobi: 'minum'
}
// class parent
class Orang {
  // Method
  // private, public, protected properties/methods
  constructor(nama, umur, jurusan, hobi) {
    // console.log("Bikin orang baru")
    this.name = nama
    this.age = umur
    this.major = jurusan
    this.hobby = hobi
    this.sudahAda = true
  }

}
// class child
class Murid extends Orang {
  constructor(nama, umur, jurusan, hobi) {
    super(nama, umur, jurusan, hobi)
  }
}

// class instance - new Class()
let ucup = new Orang('Yusuf', null, 'TIK', 'Makan')
console.log(ucup)

let wahyu = new Murid('Wahyu', 21, 'IT', 'Minum')
console.log(wahyu)

// Bikin instance baru tapi propertinya tidak lewat constructor?