//Template literals ========== 1

const name = "raghu";

const mesg = "Hi " + name + " thank you for typing \n\"js\" this pc";

console.log(mesg);

const msg2 = `Hi ${name} thank you for typing 
js this pc`;

console.log(msg2);



//Default parameter==============2

function parameter(amd, proof, tax = 18) {

    tax = tax ? 18;
    //  or tax || 18

    totalltax = amd * (tax / 100);
    console.log(`totol ${proof} is: ${amd}
Goverment tax percentage (${tax}%) is: ${totalltax}
Total sallery with tax is:${amd+totalltax} `)
}

parameter(45000, "sallery");


//Destructuring Assignment in ES6=================3


const object = {
    Name: "Raghu",
    Age: 27
};

const { Name, Age } = object;

console.log(Name, Age); //Es6

console.log(object.Name) //Es5


//Enhanced Object Literals in ES6========================4

function object2(Name, Age) {
    return {
        // Name: Name,
        // Age : Age
        Name,
        Age
    }
}
let c = object2("Raghu", 27);
console.log(c);


//Arrow function=====================5

const array = [
    { id: 1, item: "smartphone", quantity: 1 },
    { id: 2, item: "A.C", quantity: 2 },
    { id: 3, item: "Maagi", quantity: 3 }
]

let a1 = array.find(function(b) {
    return b.item === "Maagi"
})

let b = array.find((c) => c.item == "Maagi")

console.log(b)



//Promise==========================6

const pro = true;
const a2 = new Promise((resolve, reject) => {
    if (pro) {
        resolve("Success")

    } else {
        reject("Error")
    }

})
a2.then((b) => {
    console.log("Resolve", b)
}).catch((c) => {
    console.log("reject", c)
})


//Promise===========

const a3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success")
    }, 2000);

})

const a4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Eror")
    }, 2000);

})

a3.then((b) => {
    console.log("Resolve", b)
}).catch((c) => {
    console.log("reject", c)
})

//Let and Const=====================7



let a = 10;

function test() {
    console.log(a)
}
test()


function test() {
    let a = 10;
}
test()
console.log(a5) // not defined

// var is valuse is changed var =10 ,  var =20;

const a6 = 20;

function test() {
    console.log(a6)
}
test()
console.log(a6)


//Class Class=======================8/

// console.log(user4.test())



//Import & Export modules==================9

// import {a,s} from "./Js Main.js";
import add from "./Js Main.js";
// import {test} from "./Js Main.js";

import * as first from "./Js Main.js";


console.log(first.a);
console.log(first.s);
console.log(first.add(5, 10));
console.log(first.test(10, 10));




// export=============================

export const a = [1, 2, 3];

export const s = "raghu";

export default function(a, b) {
    return a + b
}

export function test(a, b) {
    return a - b
}