function getCreditCardNumber() {
  const card = parseInt(prompt("Credit Card Number:"));

  while (
    isNaN(card) ||
    card.toString().length < 13 ||
    card.toString().length > 16 ||
    card.toString().length === 14
  ) {
    console.log("Invalid card, try again:");
    card = parseInt(prompt("Credit Card Number:"));
  }

  return card;
}

function checkCreditCardType(card) {
  let ToString = card.toString();
  let firstTwoDigits;

  if (ToString.length === 15) {
    firstTwoDigits = ToString.slice(0, 2);
    if (firstTwoDigits === "34" || firstTwoDigits === "37") {
      return "American Express Card";
    }
  }

  if (ToString.length === 16) {
    firstTwoDigits = ToString.slice(0, 2);
    if (firstTwoDigits >= "51" && firstTwoDigits <= "55") {
      return "MasterCard";
    }
  }

  if (ToString.length === 13 || ToString.length === 16) {
    firstTwoDigits = ToString.slice(0, 1);
    if (firstTwoDigits === "4") {
      return "VISA";
    }
  }

  return "Unknown Card Type";
}

function checkCreditCardInfo(card) {
  let input = card.toString();
  let sum = 0;

  for (let i = input.length - 1; i >= 0; i--) {
    const digit = parseInt(input[i], 10);
    const factor = (input.length - i) % 2 === 0 ? 2 : 1;
    let product = digit * factor;

    if (product >= 10) {
      const strProduct = product.toString();
      product = 0;

      for (let j = 0; j < strProduct.length; j++) {
        product += parseInt(strProduct[j], 10);
      }
    }

    sum += product;
  }

  if (sum % 10 === 0) {
    console.log("Credit card number is valid.");
  } else {
    console.log("Credit card number is not valid.");
  }
}

let creditCardNumber = getCreditCardNumber();
let cardType = checkCreditCardType(creditCardNumber);
console.log(`Card Type: ${cardType}`);
checkCreditCardInfo(creditCardNumber);
