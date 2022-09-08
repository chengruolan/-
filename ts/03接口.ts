interface IPerson {
  name: string,
  age: number,
  address: string
}

function showName(person: IPerson) {
  return person.name
}

let person = {
  name: 'crl',
  age: 25,
  address: 'chongq'
}
console.log(showName(person))