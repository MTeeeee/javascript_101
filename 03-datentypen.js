// primitiven Tatentypen

// 1. Number
// 2. String
// 3. Boolean
// 4. Bigint
// 5. undefined
// 6. null
// 7. Symbol


let a = 5;
let b = "Hallo";
let c = true;

console.log(a)
console.log(typeof a)

console.log(b)
console.log(typeof b)

console.log(c)
console.log(typeof c)



// 1. Number

let integer = 42; // ganze Zahlen
let float = 3.14; // Fließkommazahlen

console.log(typeof integer)
console.log(typeof float)

// 2. String

let singleQuote = 'Hello Wolrd!'
let doubleQuote = "Hello World!"

console.log(singleQuote)
console.log(doubleQuote)

// 3. Boolean

let lichtAn = true
let lichtAus = false

console.log(lichtAn)
console.log(lichtAus)

// 4. Bigint

let myNumber = 999999999;
let maxNum = 9007199254740992
let oneMore = 9007199254740993
let myBigInt = 9007199254740993n

console.log(myNumber)
console.log(maxNum)
console.log(oneMore)
console.log(myBigInt)
console.log(typeof myBigInt)


// 5. undefined

let wert

console.log(wert)

// 6. Null

let emptyValue = null;

console.log(emptyValue)

// 7. Symbol

let uniqueKey = Symbol("description")

console.log(uniqueKey)