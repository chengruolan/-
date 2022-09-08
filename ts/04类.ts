(() => {
  interface IPerson {
    name: string,
    address: string,
  }

  class Person {
    name: string;
    address: string;
    des: string;

    constructor(name: string, address: string) {
      this.name = name;
      this.address = address
      this.des = name + '_' + address
    }
  }

  let person_ = new Person('crl', 'chongqing')

  function getDes(person: IPerson) {
    return person.name + person.address
  }

  console.log(getDes(person_))
})()