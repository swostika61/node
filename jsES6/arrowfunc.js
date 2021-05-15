var name = 'swos';
var age = 22;
var hasHobbies = true;

const user=(name,age,hasHobbies)=>{
    return 'name is ' + 
    name+
    ", age is " +
    age +
    " and has hobbies is " +
    hasHobbies
}
console.log (user(name, age, hasHobbies));

// shorte one => if one line return code then not need to use keyword return
const hi=(name,age,hasHobbies)=>
   'name is ' + 
    name+
    ", age is " +
    age +
    " and has hobbies is " +
    hasHobbies

console.log (hi(name, age, hasHobbies));

//if only one argument then not need to use paranthesis
const a=b=>b+1;
console.log(a(2));

//if empty then have to use paranthesis
const c = ()=>"hi";
console.log(c());