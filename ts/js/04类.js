(() => {
    class Person {
        constructor(name, address) {
            this.name = name;
            this.address = address;
            this.des = name + '_' + address;
        }
    }
    let person_ = new Person('crl', 'chongqing');
    function getDes(person) {
        return person.name + person.address;
    }
    console.log(getDes(person_));
})();
