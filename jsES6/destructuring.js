const person ={
    name: 'swos',
    age:22,
    greet: function(){
        console.log('hi i am '+ this.name);
    }
}
const printName=(person)=>{
    const{name} = person;
    console.log(name);
}

printName(person);

//Array
const hobbies=['coding','singing']
const printHob=(hobby)=>{
    const[hob1] = hobby;
    console.log(hob1);
}
printHob(hobbies)