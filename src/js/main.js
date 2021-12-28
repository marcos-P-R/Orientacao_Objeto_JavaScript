// creating class in JS for object orientation programing
function Person(){
    var name;
    var age;
    var gender;
    var phoneNumber;

    this.infoMesg = function(name){
        console.log('Info ...\nname:' + name);
    }

    this.getName = function(){
        return name
    }

    this.setName = function(_name){
        name = _name
    }
}

var personOne = new Person();
personOne.setName('Marcos')
personOne.infoMesg(personOne.getName());
console.log(personOne)