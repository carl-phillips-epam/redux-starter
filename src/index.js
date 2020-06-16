const person = { name: "John",
    address: {
        country: "USA",
        city: "San Francisco"
    }
};
const clonedPerson = Object.assign({}, person);
const updated = {
    ...person,
    address: {
        ...person.address,
        city: "`New York`"
    },
    name: "Carl",
    age: 30
}

console.log(person);
console.log(clonedPerson);
console.log(updated);

// Shallow copy


const addFunction = a => b => a + b;
console.log(addFunction(1)(2));

const numbers = [1,2,3];
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];

console.log(numbers);
console.log(index);
console.log(added);


