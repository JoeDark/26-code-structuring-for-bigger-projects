import Robot from "./Robot.js"

export default class flyingRobot extends Robot {

    constructor(name, legs){
        super(name, legs)
        this.canFly = true
        
    }
    takeOff() {
        console.log(`Have a good flight ${this.name}`)
      }
      land() {
        console.log(`Welcome back ${this.name}`)
      }
      sayhi() {
        super.sayhi()
        console.log(`I am a flying robot`)
      }
}