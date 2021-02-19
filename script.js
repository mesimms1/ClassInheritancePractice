//create parent class with three properties and one method

class Parent{
    constructor(name, birthMonth){
        this.name = name;
        this._relationStatus = true;
        this.birthMonth = birthMonth;
    }
    toggleRelationStatus(_relationStatus){
        if(_relationStatus === true){
            return false;
        }else{
            return true;
        }
    }
}
//test the new class
const skip = new Parent('Skip', 'June');
console.log(skip);
console.log(skip.name);
console.log(skip._relationStatus);
skip.toggleRelationStatus(true);
console.log(skip._relationStatus);



//Create two child class. each child class should inherent parent property and have one additional parameter
//Your child class should have one additional method. 
//first child class. 
class Child extends Parent{
    constructor(name, birthMonth, siblings){
    super(name, birthMonth);
    this._siblings = siblings;
    }
    get siblings(){
        this._siblings;
    }
    addSiblings(){
        this._siblings++;
    }
}

//second child class
class GrandChild extends Parent{
    constructor(name, birthMonth, father, mother){
        super(name, birthMonth);
        this._father = father;
        this._mother = mother;
        this._graduated = false;
    }
    get father(){
        return this._father;
    }
    get mother(){
        return this._mother;
    }
    get graduated(){
        return this._graduated;
    }
    toggleGraduated(graduated){
        if(_graduated === false){
            return true;
        }else{
            return false;
        }
    }
}

//console.log(Child);
//console.log(GrandChild);
//Child.addSiblings();


//const Ellis = new GrandChild('Ellis', 'May', 'Christian', 'Allissa');
//console.log(GrandChild.Ellis);


