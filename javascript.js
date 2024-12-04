// function addTwoNum(a, b) {
//  return a + b
// }
// function oddOrEven(a) {
//  if (a % 2 == 0) {
//   return "Number A is even"
//  } else if (a % 2 > 0) {
//   return "Number A is odd"
//  }
// }
// function numgreaterThan(a, b) {
//  return a > b ? console.log("a is greater than b") : console.log("b is greater than a")
// }
// numgreaterThan(2, 1)
// function returntheLength(str) {
//  return console.log(str.length)
// }
// returntheLength("hello")
// function containsA(str) {
//  return console.log(str.includes("a"))
// }
// containsA("halo")
// function minutesToSeconds(num) {
//  return console.log(num * 60)
// }
// minutesToSeconds(2)
// function revereseString(str) {
//  const reversed = str.split("").reverse().join("")
//  return console.log(reversed)
// }
// revereseString("hello")
// function sumofArrayNumber(arr) {
//  let sum = 0
//  for (let i = 0; i < arr.length; i++) {
//   sum += arr[i]
//  }
//  return console.log(sum)
// }
// sumofArrayNumber([1, 2, 3, 4, 5, 6])

// function checkifpositiveorNegative(num) {
//  if (num > 0) {
//   return console.log("Number is positive")
//  } else if (num < 0) {
//   return console.log("Number is negative")
//  } else {
//   return console.log("Number is zero")
//  }
// }
// checkifpositiveorNegative(-4)

// function checkIfpalindrome(str) {
//  //  const reversed = str.split("").reverse().join("")
//  //  return str === reversed
//  //   ? console.log("The string is a palindrome")
//  //   : console.log("The string is not a palindrome")

//  let j = str.length - 1
//  for (let i = 0; i < str.length / 2; i++) {
//   if (str[i] !== str[j]) {
//    console.log("not")
//    break
//   } else {
//    console.log("yes")
//    break
//   }
//  }
// }
// checkIfpalindrome("abas")
// function findthelargestNumber(arr) {
//  let max = 0
//  for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//    max = arr[i]
//   }
//  }
//  return console.log(max)
// }
// // findthelargestNumber([1, 2, 6, 4, 5])

// function countVowels(str) {
//  const vowels = "aeiouAEIOU"
//  let count = 0
//  for (const item of str) {
//   console.log(item)
//   if (vowels.includes(item)) {
//    count++
//   }
//  }
//  return console.log(count)
// }
// countVowels("aaaaerrpoooo!")

// function countVowels2(str) {
//  const matches = str.match(/[aeiou]/gi)
//  return matches ? matches.length : 0
// }
// console.log(countVowels2("aaaaerrpoooo!"))

// function findnonrepeatingChars(str) {
//  let count = 0
//  for (let i = 0; i < str.length; i++) {
//   const letter = str[i]
//   if (str.indexOf(letter) === str.lastIndexOf(letter)) {
//    console.log(letter)
//    count++
//   }
//  }
//  count++
// }
// console.log(findnonrepeatingChars("swiss"))
function firstNonRepeatingChar2(str) {
 const nonreapeatingchars = []
 for (let i = 0; i < str.length; i++) {
  const letter = str[i]
  if (str.indexOf(letter) === str.lastIndexOf(letter)) {
   nonreapeatingchars.push(letter)
  }
 }

 return nonreapeatingchars.length > 0 ? nonreapeatingchars : "none"
}

console.log(firstNonRepeatingChar2("swiss")) // Output: "w"
console.log(firstNonRepeatingChar2("aabbcc")) // Output: "None"

function fizz() {
 let array = []
 for (let i = 1; i < 100; i++) {
  if (i % 3 === 0) {
   array.push("fizz")
  } else if (i % 5 === 0) {
   array.push("buzz")
  } else if (i % 3 === 0 && i % 5 === 0) {
   array.push("fizzBuzz")
  } else {
   array.push(i)
  }
 }
 return console.log(array)
}
fizz()
const findnonrepeat = (str) => {
 const charcount = {}
 let count = 0
 for (const letter of str) {
  char[letter] += 1
 }
 for (const char of str) {
  if (charcount[char] === 1) {
   return char
  }
 }
 return none
}
