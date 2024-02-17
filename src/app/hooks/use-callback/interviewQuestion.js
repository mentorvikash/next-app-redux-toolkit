// ============
// Combine all the array in single array.

// const arr = [["a", "b", "c", ["rajat"]], ["viaksh"], [1,2,3, [7,58,69, [2,5,6]]]]
// const blankArr = []
// const createFlatArr = (array) => {
//     for (let i = 0; i < array.length; i++){
//         if (Array.isArray(array[i])){
//             createFlatArr(array[i])
//         }else{
//             blankArr.push(array[i])
//         }
//     }
// }
// createFlatArr(arr)
// console.log(blankArr)

// ============
// Check how many times does, specific number comes into an array.

// const array = [1,2,3,45,5,2,78,2,9,1]
// const obj = {}
// const letCountRepeteNumber = (repetearr) => {
//     for(let i = 0; i < repetearr.length; i++){
//       if (obj[repetearr[i]]){
//           obj[repetearr[i]] += 1;
//       }else{
//           obj[repetearr[i]] = 1
//       }
//     }
//     console.log(obj)
// }

// letCountRepeteNumber(array)


// ============
// Check if string is an palendrom...

// const str = "vikkiv"
// const checkPalandrom = (stringToCheck) => {
//     const mid = parseInt(stringToCheck.length / 2);
//     let count = 0
//     for (let i = 0; i < mid; i++) {
//         if (str.substr(i, 1) === str.substr(stringToCheck.length - (i + 1), 1)) {
//             count += 1
//         } else {
//             console.log("not a palendrom")
//             break;
//         }
//     }
//     if (count == mid || count == mid + 1) {
//         console.log("is a palendrom")
//     }
// }

// checkPalandrom(str)


// ============
// Print all the prime number in a given range

// const givenNum = 23;
// const primeNumberArr = []

// const getAllPrimeNumber = (number) => {
//     if (number > 1){
//       primeNumberArr.push(1)
//     for(let j = 2; j <= number; j++){
//       checkIfPrime(j)  
//      }
//     }
//     console.log(primeNumberArr)
//     }

// const checkIfPrime = (num) => {
//     let count = 0;
//     for (let i = 2; i < num; i++){
//         if (num % i === 0){
//             count += 1
//         }
//     }
//     if (count === 0){
//       primeNumberArr.push(num)
//     }
// }
// getAllPrimeNumber(givenNum)


// ============
// Swap the two number without third vaiable

// first Method
// let a  = 12
// let b = 15
// a = a + b;
// b = a - b
// a = a - b
// console.log(a, b)

// 2nd Method

// let c  = 12
// let d = 15
// c = d - c
// d = d - c
// c = d + c
// console.log(c, d)


// ============
// Find the 2nd largest value in any array.

// const arr = [12, 34, 17, 29, 35]
// let max = 0;
// let secondMax = 0

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         secondMax = max;
//         max = arr[i]
//     } else if (arr[i] > secondMax) {
//         secondMax = arr[i]
//     }
// }
// console.log(max, secondMax)

// ============
// eleiminate all the dublicate element form array

// const givenArr = ["vikash", "rajat", "vikash", "shobha", "rajat"]
// const removeDublicate = (arr) => {
//     const freshObj = {}
//     for (let i = 0; i< arr.length; i ++){
//         freshObj[arr[i]] = arr[i]
//     }
//     return  Object.keys(freshObj) 
// }
// console.log(removeDublicate(givenArr))


// print star pattern of triangel with bondery wih star and inner self with hash
