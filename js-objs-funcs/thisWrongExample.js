const userGood = {
    name : "Somin" , 
    age : 15,
    sayNam(){
        console.log(`My name is ${this.name}`); //somin 
        fullNam = () => console.log(`My name is ${this.name} and age is ${this.age}`) // My name is Somin and age is 15
        fullNam()
    }
}

userGood.sayNam()


// never use () => functions as methods in objects as they refer to the lexical environment i.e outside
// the object so gives window object