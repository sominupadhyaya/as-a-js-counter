const userBad = {
  name: "somin",
  age: 16,
  sayName() {
    console.log(`My name is  ${this.name}`) //somin
    function fullName() {
      console.log(`My name is ${this.name} and my age is ${this.age}`) // my name is undefined and my age is undefined
    }
    fullName()
  },
}
userBad.sayName()
