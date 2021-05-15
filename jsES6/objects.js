const person ={
    name: 'swos',
    age:22,
    // greet: function(){
    //     console.log('hi i am '+ this.name);
    // }
    greet(){
        console.log('i am ' + this.name)
    }
}
person.greet();
