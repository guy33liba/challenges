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
// function firstNonRepeatingChar2(str) {
//   const nonreapeatingchars = []
//   for (let i = 0; i < str.length; i++) {
//     const letter = str[i]
//     if (str.indexOf(letter) === str.lastIndexOf(letter)) {
//       nonreapeatingchars.push(letter)
//     }
//   }

//   return nonreapeatingchars.length > 0 ? nonreapeatingchars : "none"
// }

// console.log(firstNonRepeatingChar2("swiss")) // Output: "w"
// console.log(firstNonRepeatingChar2("aabbcc")) // Output: "None"

// function fizz() {
//   let array = []
//   for (let i = 1; i < 100; i++) {
//     if (i % 3 === 0) {
//       array.push("fizz")
//     } else if (i % 5 === 0) {
//       array.push("buzz")
//     } else if (i % 3 === 0 && i % 5 === 0) {
//       array.push("fizzBuzz")
//     } else {
//       array.push(i)
//     }
//   }
//   return console.log(array)
// }
// fizz()

// const findnonrepeat1 = (str) => {
//   const charcount = {}

//   for (const letter of str) {
//     if (!charcount[letter]) {
//       charcount[letter] = 1 // Initialize count to 1 if the letter is not in charcount
//     } else {
//       charcount[letter] += 1 // Increment count if the letter already exists in charcount
//     }
//   }

//   for (const char of str) {
//     if (charcount[char] === 1) {
//       return char // Return the first non-repeating character
//     }
//   }

//   return "none" // If no non-repeating character is found
// }

// console.log(findnonrepeat1("as")) // Output: "a"

// function reveresing(str) {
//   let reversed = ""
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i]
//   }
//   return console.log(reversed)
// }
// reveresing("hello")

// function removeDuplicates(arr) {
//   let uniquearray = []
//   for (let i = 0; i < arr.length; i++) {
//     if (!uniquearray.includes(arr[i])) {
//       uniquearray.push(arr[i])
//     }
//   }
//   return uniquearray
// }
// console.log(removeDuplicates([1, 2, 2, 3,3,3,3, 4, 4, 5]))

// function findindexlargets(arr) {
//   let maxIndex = 0
//   let value = {}
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[maxIndex]) {
//       maxIndex = arr[i]
//       value = maxIndex
//     }
//   }
//   return console.log(value)
// }
// findindexlargets([1, 7, 6, 2])

// function findMissingNum(arr) {
//   let n = arr.length + 1
//   console.log(n)
//   let totalsum = (n * (n + 1)) / 2
//   console.log(totalsum)
//   let arraySum = arr.reduce((sum, num) => sum + num, 0)
//   console.log(arraySum)
//   return totalsum - arraySum
// }
// console.log(findMissingNum([3, 7, 1, 2, 8, 4, 5]))

// function findPalindrome(str) {
//   let j = str.length - 1
//   for (let i = 0; i < str.length / 2; i++) {
//     let item = str[i]
//     if (item !== str[j]) {
//       return false
//     }
//     j--
//   }
//   return true
// }
// console.log(findPalindrome("abas"))

// function vowelsFider(str) {
//   let vowels = "aeiou"
//   let count = 0
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++
//     }
//   }
//   return console.log(count)
// }
// // vowelsFider('ae22i')

// function findlongwww(str) {
//  const word = str.split(" ")
//  let longest = ""
//  for (let i = 0; i < word.length; i++) {
//   const current = word[i]
//   if (current.length > longest.length) {
//    longest = current
//   }
//  }
//  return console.log(longest)
// }
// // findlongwww("I am learning JavaScript at OpenAI")

// const countOccurrences = (str) => {
//  const result = {}

//  for (let i = 0; i < str.length; i++) {
//   const char = str[i]
//   if (result[char]) {
//    result[char]++
//   } else {
//    result[char] = 1
//   }
//  }
//  return result
// }
// // console.log(countOccurrences("hello"))

// function nonreopeatrst(str) {
//  const charcount = []
//  let count = 0
//  for (let i = 0; i < str.length; i++) {
//   const letter = str[i]
//   if (str.indexOf(letter) === str.lastIndexOf(letter)) {
//    count++
//    charcount.push(letter)
//   }
//  }
//  return console.log(charcount)
// }
// // nonreopeatrst("wwsaddf")

// function nnonorepeat(str) {
//  const frequency = {}
//  for (const char of str) {
//   frequency[char] = (frequency[char] || 0) + 1
//  }
//  for (const char of str) {
//   if (frequency[char] === 1) {
//    return char
//   }
//  }
//  return null
// }
// console.log(nnonorepeat("ssd"))

// function fuzzfuzz(num) {
//  let array = []
//  for (let i = 0; i < 100; i++) {
//   if (i % 3 === 0) {
//    array.push("fuzz")
//   } else if (i % 5 === 0) {
//    array.push("buzz")
//   } else if (i % 3 == 0 && i % 5 === 0) {
//    array.push("fuzzBuzz")
//   } else {
//    array.push(i)
//   }
//  }
//  return console.log(array)
// }

// fuzzfuzz()
// fuzzfuzz //   let array = []
// //   for (let i = 1; i < 100; i++) {
// //     if (i % 3 === 0) {
// //       array.push("fizz")
// //     } else if (i % 5 === 0) {
// //       array.push("buzz")
// //     } else if (i % 3 === 0 && i % 5 === 0) {
// //       array.push("fizzBuzz")
// //     } else {
// //       array.push(i)
// //     }
// //   }
// function removedupclicccc(str) {
//  for (let i = 0; i < str.length; i++) {
//   if (str[i] === str[i + 1]) {
//    str = str.slice(0, i) + str.slice(i + 1)
//    i--
//   }
//  }
//  return str
// }
// console.log(removedupclicccc("aacccss"))

// const result = [
//  { name: "john", age: 25 },
//  { name: "jane", age: 20 },
//  { name: "kyle", age: 10 },
// ]
// function sortbyage(str) {
//  return str.sort((a, b) => a.age - b.age)
// }
// console.log(sortbyage(result))
// function sortByAge(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j].age > arr[j + 1].age) {
//         // Swap the objects if the age of the current object is greater
//         const temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// // Example data
// const result1 = [
//   { name: "John", age: 25 },
//   { name: "Jane", age: 20 },
//   { name: "Bob", age: 30 },
// ];

// console.log(sortByAge(result));

// function fibonacci(n) {
//  let sequence = [0, 1]
//  for (let i = 2; i < n; i++) {
//   sequence.push(sequence[i - 1] + sequence[i - 2])
//  }
//  return console.log(sequence)
// }
// fibonacci(6)
// function fibonacciRec(n) {
//  if (n <= 1) return n
//  return fibonacciRec(n - 1) + fibonacciRec(n - 2)
// }
// console.log(fibonacciRec(1))

// function areanagrams(str1, str2) {
//  const sotred1 = str1.split("").sort().join("")
//  const sotred2 = str2.split("").sort().join("")
//  return sotred1 === sotred2
// }

// console.log(areanagrams("listen", "silent")) // true
// function areAnagrams(str1, str2) {
//  const normalize = (str) => str.replace(/\s+/g, " ").toLowerCase()
//  str1 = normalize(str1)
//  str2 = normalize(str2)

//  if (str1.length !== str2.length) return false
//  const charCount = {}

//  for (let char of str1) {
//   charCount[char] = (charCount[char] || 0) + 1
//   console.log(charCount)
//  }
//  for (const char of str2) {
//   if (!charCount[char]) return false
//   charCount[char]--
//  }
//  return true
// }
// console.log(areAnagrams("liisten", "siilent"))
function nonrepeat(str) {
 const charCount = {}
 const result = []
 for (const char of str) {
  charCount[char] = (charCount[char] || 0) + 1
 }
 for (const char of str) {
  if (charCount[char] === 1) {
   result.push(char)
  }
 }
 return result
}
// console.log(nonrepeat("lliisten"))

function countvowels(str) {
 const vowels = "aeiouAEIOU"
 let count = 0
 let result = []
 for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
   count++
   result.push(str[i])
  }
 }
 return result
}
console.log(countvowels("lliisten"))

function fibonacci(num) {
 let rra = [1, 2]
 for (let i = 2; i < num; i++) {
  rra.push(rra[i - 1] + rra[i - 2])
 }
 return console.log(rra)
}
fibonacci(5)

function anana(str1, str2) {
 const sortedStr1 = str1
  .toLowerCase()
  .replace(/[^a-z]/g, "")
  .split("")
  .sort()
  .join("")
 const sortedStr2 = str2
  .toLowerCase()
  .replace(/[^a-z]/g, "")
  .split("")
  .sort()
  .join("")

 for (let i = 0; i < sortedStr1.length; i++) {
  if (sortedStr1[i] === sortedStr2[i]) {
   return true
  }
 }
 return false
}
console.log(anana("silent", "listen"))
function nonnon(str) {
 const charCount = {}
 const result = []
 for (const char of str) {
  charCount[char] = (charCount[char] || 0) + 1
 }
 for (const char of str) {
  if (charCount[char] === 1) {
   result.push(char)
  }
 }
 return console.log(result)
}
nonnon("ssddrew")
