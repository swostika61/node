//const means the constant and let means a variable.
//if want to change the value use let
const name = 'swos';
let age = 22;
const hasHobbies = true;

age=30;

function user(name,age,hasHobbies){
    return 'name is ' + 
    name+
    ", age is " +
    age +
    " and has hobbies is" +
    hasHobbies
}

console.log (user(name, age, hasHobbies));