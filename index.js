console.log('bobbyhadz.com');

const url = 'https://bobbyhadz.com/books?page=10#hash';

const urlObj = new URL(url);

urlObj.search = '';

const result = urlObj.toString();

// 👇️ https://bobbyhadz.com/books#hash
console.log(result);

// ------------------------------------------------------------------

// // Defining a reusable function

// function removeQueryString(url) {
//   const urlObj = new URL(url);

//   urlObj.search = '';

//   return urlObj.toString();
// }

// const url = 'https://bobbyhadz.com/books?page=10#hash';

// const result = removeQueryString(url);
// console.log(result); // 👉️ https://bobbyhadz.com/books#hash
