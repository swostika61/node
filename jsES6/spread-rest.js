//spread - to pull elements 
const hobbies=['coding','dancing'];
const newarr=[...hobbies,'singing'];
console.log(newarr);

//rest - merge multiple arguments
const toArray=(...args)=>{
    return args;
}
console.log(toArray(1,2,3,4));