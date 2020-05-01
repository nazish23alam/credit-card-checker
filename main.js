// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

console.log('Credit Card Checker');


//create function validateCred() 
const validateCred = card => {

//copies card to avoid mutation.
let cardCopy = card.slice();  

// console.log('Card number ' + cardCopy)

//reverses array and removes first digit.
cardCopy.reverse();

// console.log('Original card number reversed  ' + cardCopy);

//starting with first digit.  Double every other one.  
for (let i=1; i<cardCopy.length; i++)
    cardCopy[i] = i % 2 === 0 ? cardCopy[i] * 1 : cardCopy[i] * 2;

// console.log('Doubled odd indexes ' + cardCopy);

//subtract 9 from double digit numbers.
const subtract9 = [];

  for (let i=0; i<cardCopy.length; ++i)
    if (cardCopy[i] > 9) {
      const single = subtract9.push([cardCopy[i] - 9 ])  
      // console.log(single)
    } else {
      const single1 = subtract9.push([cardCopy[i]])
      // console.log(single1)
    };
// console.log('Single digit (-9) ' + subtract9)

//sum subtract9 array.

//copies subtract9 to cardSum and then converts string values to integers.
let cardSum = subtract9.slice();
let a = cardSum
let result = cardSum.map(function (x) { 
  return parseInt(x, 10); 
});

// console.log(result);

let sum = result.reduce(function(a,b){
  return a + b;
}, 0);

// console.log('The card number sum is ' + sum)

  if (sum % 10 === 0) {
    return true;
  } else {
    return false;
  }
};

// create function invalidCardArr to return invalid card numbers.
let invalidCardArr = [];
  const findInvalidCards = invalidCardArr => {
    for (let i=0; i<batch.length; ++i) 
      if (validateCred(batch[i]) === false) {
        invalidCardArr.push(batch[i]);  
        }
  return invalidCardArr
};

//create function idInvalidCardCompanies.
//one parameter for a nested array of invalid numbers and returns an array of companies. 

let companies = [];
let invalidCards = findInvalidCards(invalidCardArr)
let uniq = [];

const idInvalidCardCompanies = companies => {
    
    for (let i=0; i<invalidCards.length; i++)

    if (invalidCards[i][0] === 3) {
        companies.push('Amex');
      } else if 
        (invalidCards[i][0] === 4) {
        companies.push('Visa');
      } else if 
        (invalidCards[i][0] === 5) {
        companies.push('Mastercard');
      } else if 
        (invalidCards[i][0] === 6) {
        companies.push('Discover');
      } else {
        companies.push('Company not found');
    };
    // return companies
    return uniq = [...new Set(companies)];
  };
       
console.log(idInvalidCardCompanies(companies));
console.log('Invalid cards have been sent out by ' + idInvalidCardCompanies(companies));



      