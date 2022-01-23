/* 
Composite
It composes objects so that they can be manipulated as single objects.

According to Wikipedia:
The composite pattern describes a group of objects that are treated the same way as a single instance of the same type of object.
*/

class Employer {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
    print() {
        console.log('name: '+ this.name + 'relaxTime: ');
    }
}

//Creating group employer
class EmployerGroup {
    constructor(name, composite=[]){
        console.log(name)
        this.name = name;
        this.composites = composite;
    }
    print() {
        console.log(this.name);
        this.composites.forEach(emp => {
            emp.print();
        })
    }
}

// Let's use these classes
let Bruno = new Employer('Bruno','developer');
let Bryan = new Employer('Bryan', 'developer');
let groupDevelopers = new EmployerGroup('Developers', [Bruno,Bryan])
console.log(groupDevelopers)