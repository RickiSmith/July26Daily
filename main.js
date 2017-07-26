// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(x,y){
  if (x>y){
    return x;
  }else if (x<y){
    return y;
  }
}

console.log (max(1,2))
console.log (max(2,1))


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(xx, yy, zz){
  if (xx>yy && xx>zz){
    return xx;
  }else if (yy>xx && yy>zz){
    return yy;
  }else {
    return zz;
  }
}

console.log (maxOfThree(1, 2, 3))
console.log(maxOfThree(3, 2, 1))
console.log(maxOfThree(2, 1, 3))


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
  if (char === "a"||char==="e"||char==="i"||char==="o"||char==="u"){
    return true;
  }else {
    return false;
  }
}

console.log(isVowel("a"))
console.log(isVowel("e"))
console.log(isVowel("r"))

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(par1, par2){
  return par1 + par2;
}

console.log (sum(1, 2))


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(fir, sec, thi){
  return (fir + sec + thi)/3;
}

console.log (avg(1, 2, 3))
console.log (avg(4, 5, 6))

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(l){
  return l.length;
}

console.log(getLength("cat"))
console.log(getLength("giraffe"))

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(j,k){
  if (k>j){
    return true;
  } else {
    return false;
  }
}

console.log (greaterThan(3,4))
console.log (greaterThan(45,30))
console.log (greaterThan(6,6))



// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(Name){
  return "Hello " + (Name) + "!";
}

console.log (greet("Ricki"))
console.log (greet("Gargi"))


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib(Noun, Verb, Adj, Sub){
  return Noun + " likes to " + Verb + " the " + Adj + Sub + ".";

}

console.log(madlib("Kevin", "play", "action", " games"))
console.log (madlib("Stanlee", "fetch", "red", " ball"))
