import EventEmitter from "./EventEmitter.js";

export default class Time extends EventEmitter {
    constructor() {
        super()

        //Setup
        this.start = Date.now()
        this.current = this.start
        this.elapsed = 0
        this.delta = 16 //because delta 0 might cause some issues

        window.requestAnimationFrame(() => // Same as down below( to wait a tick)
        {
            this.tick()
        })
        
    }

    tick(){
        const currentTime = Date.now()
        this.delta = currentTime - this.currentTime
        this.currentTime = currentTime
        this.elapsed = this.current - this.start
        
        this.trigger('tick')

        window.requestAnimationFrame(() => //just placing this.tick would lose context
        {
            this.tick()
        })
    }
}