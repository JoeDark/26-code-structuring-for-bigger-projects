export default class Robot {
    constructor(name, legs) {
      this.name = name
      this.legs = legs
  
      this.sayhi()
  
      console.log(`I am ${this.name}. thank you maker`)
    }
    sayhi() {
      console.log(`Hello! My name is ${this.name}`)
    }
  }