// const Name = (name, age) => {
//     return name + " " + age
// }

// console.log(Name("Mili", 23))

const Name2 = (name, age) => {
    this.name = "miau"
    this.age = 99
    return name + " " + age
}

console.log(Name2("kikila", 55))