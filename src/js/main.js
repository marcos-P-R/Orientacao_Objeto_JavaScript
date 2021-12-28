// creating class in JS for object orientation programing
function Person(_name, _age){
    var name = _name;
    var age = _age;

    this.infoMesg = function(name){
        console.log('Info ...\nname:' + name);
    }

    this.getName = function(){
        return name
    }

    this.setName = function(_name){
        name = _name
    }

    this.getAge = function(){
        return age
    }

    this.setAge = function(_age){
        age = _age
    }
}

var personOne = new Person("Marcos", 21);
personOne.infoMesg(personOne.getName());
console.log(personOne)