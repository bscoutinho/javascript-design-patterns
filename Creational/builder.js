class Person {
    constructor() {
        this.streetAddress = ""
        this.postcode = ""
        this.city = "";
        this.companyName = ""
        this.position = "";
    }

    toString() {
        return (
            `Person lives at ${this.streetAddress}, ${this.city}, ${this.postcode}
            and works at ${this.companyName} as a ${this.position}`
        )
    }
}

class PersonBuilder {
    constructor(person = new Person()) {
        this.person = person
    }
    get lives() {
        return new PersonAddressBuilder(this.person);
    }
    get works() {
        return new PersonJobBuilder(this.person);
    }
    build() {
        return this.person;
    }
}

// Also we will create Person Job Builder
class PersonJobBuilder extends PersonBuilder {
    constructor(person) {
        super(person);
    }

    at(companyName) {
        this.person.companyName = companyName;
        return this;
    }

    asA(position) {
        this.person.position = position;
        return this;
    }
}

//PersonAddressBuilder will keep Person's Address' Information
class PersonAddressBuilder extends PersonBuilder {
    constructor(person) {
        super(person);
    }

    at(streetAddress) {
        this.person.streetAddress = streetAddress;
        return this;
    }
    whitPostCode(postcode) {
        this.person.postcode = postcode;
        return this;
    }
    in(city) {
        this.person.city = city;
        return this;
    }
}

//Now we use our Builder
let personBuilder = new PersonBuilder();
let person = personBuilder.lives.at("Baker Street").in('London').whitPostCode('1000').works.at('NASA').asA('Engineer').build()
/* let person = personBuilder.lives.at("Baker Street").in('London').withPostCode('1000').works.at('NASA').asA('Engineering').earning(10000).build(); */

console.log(person.toString());