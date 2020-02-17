var hacker1 = "Bart";
console.log(`The drivers name is ${hacker1}`);
var navigator1 = "Bartolomeus";
console.log(`The navigators name is ${navigator1}`);

function smallestString(hacker1, navigator1) {
    if(hacker1.length > navigator1.length){
        console.log("The driver has the longest name, it has" +  hacker1.length + "characters.");
        return navigator1;
    } else if(hacker1.length < navigator1.length) {
        console.log(`The navigators has the longest name, it has ${navigator1.length} characters.`)
        return hacker1;
    } else {
        console.log(`The names have the same length ${navigator1.length}`);
        return hacker1;
    }   
}

function uppercase(aString){
    var upperCasedName = "";
    for(var i =0; i < aString.length; i++){
        upperCasedName += `${aString[i].toUpperCase()} `;
    }
    return upperCasedName;
}

console.log(uppercase(hacker1));
console.log(uppercase(navigator1));

function reverse(aString){
    let reverseString = "";
    for(let i = aString.length - 1; i >= 0; i-- ){
        reverseString += aString[i];
    }
    return reverseString
}

/* it's better to wrap around this code. Starting from here */
let equal = true; 
let smallestName = smallestString(hacker1, navigator1)
for(let i = 0; i < smallestName.length; i++ ){
    if(hacker1[i] < navigator1[i]){
        console.log("The drivers name goes first.");
        equal = false;
        break;
    } else if(hacker1[i] > navigator1[i]) {
        equal = false;
        console.log("The navigators name goes first.");
        break;
    }
}

if(equal) {
    console.log(`${smallestString(hacker1, navigator1)} goes first`);
}
/* to here */