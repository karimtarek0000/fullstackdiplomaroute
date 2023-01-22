// Question 1
// ----------
// var num = window.prompt("Enter a number");
// console.log('Output: ', num);

// Question 2
// ----------
// var num = window.prompt("Enter a number can divide by 3");
// if (num % 3 === 0) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// Question 3
// ----------
// var num1 = window.prompt("Insert number one");
// var num2 = window.prompt("Insert number two");
// console.log("Input: ", num1, num2);
// if (num1 > num2) {
//   console.log("Output: ", num1);
// } else {
//   console.log("Output: ", num2);
// }

// Question 4
// ----------
// var num = window.prompt("Insert an integer number");
// if (num > 0) {
//   console.log("Output: ", "positive");
// } else {
//   console.log("Output: ", "negative");
// }

// Question 5
// ----------
// var nums = [...window.prompt("Enter 3 numbers only")];

// if (nums.length === 3) {
//   for (var i = 0; i < nums.length; i++) {
//     for (var j = i + 1; j <= nums.length; j++) {
//       if (nums[i] > nums[j]) [nums[i], nums[j]] = [nums[j], nums[i]];
//     }
//   }
// }

// console.log("Max number: ", nums[nums.length - 1]);
// console.log("Min number: ", nums[0]);

// Question 6
// ----------
// var num = window.prompt("Insert an integer number");
// if (num % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// Question 7
// ----------
// var char = window.prompt("Enter a character");
// switch (char) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     console.log("Vowel");
//     break;
//   default:
//     console.log("Consonant");
// }

// Question 8
// ----------
// var num = window.prompt("Insert an integer number");

// for (var i = 1; i <= num; i++) {
//   console.log(i);
// }

// Question 9
// ----------
// var num = window.prompt("Insert an integer number");
// for (var i = 1; i <= 12; i++) {
//   console.log(num * i);
// }

// Question 10
// -----------
// var num = window.prompt("Insert an integer number");
// for (var i = 1; i <= num; i++) {
//   if (i % 2 === 0) console.log(i);
// }

// Question 11
// -----------
// const num1 = window.prompt("Insert an integer number");
// const num2 = window.prompt("Insert an integer number");
// const power = num1 ** num2;

// console.log(power);

// Question 12
// -----------
// alert("Enter marks of five subjects");
// const num1 = +window.prompt("Number 1");
// const num2 = +window.prompt("Number 2");
// const num3 = +window.prompt("Number 3");
// const num4 = +window.prompt("Number 4");
// const num5 = +window.prompt("Number 5");
// const total = num1 + num2 + num3 + num4 + num5;
// const average = total / 5;
// console.log("Total: ", total);
// console.log("Average: ", average);

// Question 13
// -----------
// const monthNum = prompt("Input month number");

// switch (monthNum) {
//   case "1":
//     console.log("Days in Month: 31");
//     break;
//   case "2":
//     console.log("Days in Month: 28");
//     break;
//   case "3":
//     console.log("Days in Month: 30");
//     break;
// }
