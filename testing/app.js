// #Currying FN
/*
   ⦿ Convert all arguments to series of functions.
   ⦿ More generic and each function depend on previous function.

*/

// DATABASE
const db = {
  tv: [
    {
      name: "lg",
      price: 3000,
    },
    {
      name: "samsung",
      price: 5000,
    },
  ],
  phone: [
    {
      name: "iphone",
      price: 10000,
    },
    {
      name: "samsung",
      price: 12000,
    },
  ],
};

function getTableQuery(db) {
  return function (package) {
    return {
      allData: db[package],
      singleProduct: (name) => db[package].find((pack) => pack.name === name),
    };
  };
}

const packagePhone = getTableQuery(db)("phone");
const allDataPhones = packagePhone.allData;
const iphone = packagePhone.singleProduct("iphone");
//
const packageTv = getTableQuery(db)("tv");
const allDataTv = packageTv.allData;
const lg = packagePhone.singleProduct("lg");
//
// console.log("Package data phone: ", allDataPhones, "Product name: ", iphone);
// console.log("Package data tv: ", allDataTv, "Product name: ", lg);

var s = [23, 83, 9, 2, 22];
function test(arr) {
  let min = arr[0],
    max = arr[0];

  for (let value of arr) {
    if (value < min) {
      min = value;
    }
    if (value > max) {
      max = value;
    }
  }
  return `Min: ${min}, Max: ${max}`;
}

console.log(test(s));
