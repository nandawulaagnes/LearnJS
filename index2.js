class people {
    constructor() {
        this.name = ""
        this.age = ""
    }
    // getters and setters
    // get Name() {
    //     return this.name
    // }

    // get Age() {
    //     return this.age
    // }

    // set Name(name) {
    //     this.name = name
    // }

    // set Age(age) {
    //     this.age = age
    // }

    displayPerson() {
        return `My name is ${this.name} and age is ${this.age}`
    }
}

const agnes = new people()

agnes.name = "Agnes"
agnes.age