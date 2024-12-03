function addTwoNum(a, b) {
 return a + b
}
function oddOrEven(a) {
 if (a % 2 == 0) {
  return "Number A is even"
 } else if (a % 2 > 0) {
  return "Number A is odd"
 }
}
function numgreaterThan(a, b) {
 return a > b ? console.log("a is greater than b") : console.log("b is greater than a")
}
numgreaterThan(2, 1)
function returntheLength(str) {
 return console.log(str.length)
}
returntheLength("hello")
function containsA(str) {
 return console.log(str.includes("a"))
}
containsA("halo")
function minutesToSeconds(num) {
 return console.log(num * 60)
}
minutesToSeconds(2)
function revereseString(str) {
 const reversed = str.split("").reverse().join("")
 return console.log(reversed)
}
revereseString("hello")
function sumofArrayNumber(arr) {
 let sum = 0
 for (let i = 0; i < arr.length; i++) {
  sum += arr[i]
 }
 return console.log(sum)
}
sumofArrayNumber([1, 2, 3, 4, 5, 6])

function checkifpositiveorNegative(num) {
 if (num > 0) {
  return console.log("Number is positive")
 } else if (num < 0) {
  return console.log("Number is negative")
 } else {
  return console.log("Number is zero")
 }
}
checkifpositiveorNegative(-4)

function checkIfpalindrome(str) {
 //  const reversed = str.split("").reverse().join("")
 //  return str === reversed
 //   ? console.log("The string is a palindrome")
 //   : console.log("The string is not a palindrome")

 let j = str.length - 1
 for (let i = 0; i < str.length / 2; i++) {
  if (str[i] !== str[j]) {
   console.log("not")
   break
  } else {
   console.log("yes")
   break
  }
 }
}
checkIfpalindrome("abas")
function findthelargestNumber(arr) {
 let max = 0
 for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
   max = arr[i]
  }
 }
 return console.log(max)
}
// findthelargestNumber([1, 2, 6, 4, 5])

function countVowels(str) {
 const vowels = "aeiouAEIOU"
 let count = 0
 for (const item of str) {
  if (vowels.includes(item)) {
   count++
  }
 }
 return console.log(count)
}
countVowels("aaaaerrpoooo!")
