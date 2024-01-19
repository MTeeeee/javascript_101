// Schleifen

// for (Initialisiserung; Bedingung; Iteration) {
//     code, der wiederholt werden soll
// }

for (let i = 0; i < 5; i++ ) {
    console.log(i)
}

// array

const fruits = ['apple', 'banana', 'cherry']
// console.log(fruits[0])

for (let i = 0; i < fruits.length; i++ ) {
    if (fruits[i] === "banana" ) {
        break
    }
    console.log(fruits[i]);
}

// i++ entspricht i = i + 1


// while-Schleife

// while (Bedingung) {
//     code, der solange ausgefürt wird bis die Bedingung erfüllt isFinite.
// }

let counter = 23;

while (counter <= 10) {
    console.log("Der Counter ist aktuell " + counter);
    counter++;
}

// Die while-Schleife wird oft verwendet,
// wenn die Anzahl der Durchläufe im Vorraus nocht bekannt ist.


// do-while-Schleife
// 

let count = 23;

do {
    console.log("Der Count ist aktuell " + count);
    count++
} while (count <= 10)



