import Sizes from "./Utils/Sizes.js"
import Time from "./Utils/Time.js"
import Camera from "./Camera.js"
import * as THREE from 'three'
import Renderer from "./Renderer.js"
import World from "./World/World.js"
import Resources from "./Utils/Resources.js"
import sources from "./sources.js"
import Debug from "./Utils/Debug.js"

let instance = null;

export default class Experience {
    constructor(canvas) {
        // Global access    
        if (instance){
            return instance
        }
        instance = this

        window.experience = this

        //options
        this.canvas = canvas

        //Setup
        this.debug = new Debug()
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.resources = new Resources(sources)
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.world = new World()

        
        //Sizes resize event
        this.sizes.on('resize', () => {
            this.resize()
        })
        //time tick event
        this.time.on('tick', () => {
            this.update()
        })

        //console.log(this.canvas) //this will produce somthihng different based on browser
        console.log('start')

    }
    resize() {
        this.camera.resize()
        this.renderer.resize()
    }
    update(){
        this.camera.update()
        this.world.update()
        this.renderer.update()
    }

    destroy() //this is for clean up
    {
        this.sizes.off('resize')
        this.time.off('tick')

        //traverse the whole scene
        this.scene.traverse((child) => {
            //if mesh
            if (child instanceof THREE.Mesh)
            {
                    child.geometry.dispose()

                //loop through material properties
                for(const key in child.material){
                    const value = child.material[key]

                    if (value && typeof value.dispose === 'function'){
                        value.dispose()
                    }
                }
            }
        })

        this.camera.controls.dispose()
        this.renderer.instance.dispose()
        // if using post processing, dispose of effect composer, its webglrenderTarget and any
        // potential passes you are using

        if (this.debug.active)
        {
            this.debug.ui.destroy()
        }
    }
}