//Module practice

//export default() => would be a function

// export default { 
//     hello: 'module'
// } this will let you return hello

const oneThing = {
    hello: 'module'
}
const anotherThing = () =>{
    console.log('hi')
}
export default {oneThing, anotherThing}