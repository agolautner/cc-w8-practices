//CALLBACK
function displayer(something) {
    return something 
}

function calculator(number1, number2, myCallBack) {
    let result = number1 + number2;
    console.log(myCallBack(result));
}

calculator(5,5,displayer);

function greet () {
    console.log('hello world')
}

function sayName(name) {
    console.log('hello' + ' ' + name)
}

//barmilyen fuggvenyt adunk at a callback helyen, az rogton lefut
function callSayName(callback, name='') {
    callback(name)
}

callSayName(sayName, 'John');

setTimeout(greet, 2000);
sayName('david')

//MAP
const array1 = [1,2,3,4];
const array2 = [];
for (const n of array1) {
    array2.push(n*2);
}
console.log(array2);

const array3 = array1.map(n => n*2);
console.log(array3);

const cities = ['Paris', 'Budapest', 'London'];
const listHTML = cities.map(n => `<li>${n}</li>`);
console.log(listHTML);

/* const cityObject = cities.map(n => {
    const object = {name: n};
    return object;
}) */
const cityObject = cities.map(n => ({name: n}))
console.log(cityObject);

const filter = cities.filter(n => n.charAt(0) === 'B').map(n => `<li>${n}</li>`);
console.log(filter);

//REDUCE
const prices = [23.4, 123, 34.2, 12, 54, 98];

    let total = 0;
    for (const price of prices) {
        total += price;
    }
    console.log(total);

    const total2 = prices.reduce((total, price) => total + price);
    console.log(total2);

    const total3 = prices.reduce((total, price, index) => index%2 ? total + price : total - price);
    console.log(total3);

    const people = [
        {name: 'John', age: 2},
        {name: 'Stacy', age: 23},
        {name: 'Bob', age: 32},
        {name: 'Clark', age: 14},
        {name: 'Tom', age: 5},
        {name: 'Lewis', age: 12},
        ];

    const oldest = people.reduce((max, current) => {
         if (current.age > max.age) {
             return current;
         }
         return max;
    });
    console.log(oldest);

//COPY
/*     const person = {
        firstName: 'Armandina',
        lastName: 'Atom'
    };

    //spread

    let p1 = { 
        ...person,
    };

    //object.assign()
    let p2 = Object.assign({}, person);

    //json
    let p3 = JSON.parse(JSON.stringify(person));

    console.log(p1);
    console.log(p2);
    console.log(p3);

    let copiedPerson = person; 
    copiedPerson.firstName = 'Armand';
    console.log(person);
    //the variable's value is a reference value

    let num = 1;
    let copiedNum = num;

    copiedNum = 2;
    console.log(num); */
    //variable's value is a primitive

    //shallow copy example
    let person2 = {
        firstName: 'John',
        lastName: 'Doe',
        address: {
            street: 'North 1st street',
            city: 'San Jose',
            state: 'CA',
            country: 'USA'
        }
    };

/*     let copiedPerson = Object.assign({}, person2);
    copiedPerson.firstName = 'Jani';
    copiedPerson.address.street = 'Example st.';
    console.log(copiedPerson); */

    let copiedPerson = JSON.parse(JSON.stringify(person2));
    copiedPerson.firstName = 'Joe';
    copiedPerson.address.street = 'Main st.';
    console.log(person2);
    console.log(copiedPerson);