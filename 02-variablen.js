
// veränderbar
var name = "Mete";  // globale variable

let age = 34;       // blocklbasierte  <-------------
// nicht veränderbar
const pi = 3.141;   // bloclbasierte  <-------------

name = "Bob";
age = 42;
// pi = 7;


console.log(name)
console.log(age)
console.log(pi)


// scope
function myfunction() {
    var localVariable = "Ich bin lokal";
    console.log(localVariable)
}
myfunction();

let globaleVariable = "Ich bin global";
console.log(globaleVariable)


// Probleme mit var
console.log(frucht)
var frucht = "apfel"
