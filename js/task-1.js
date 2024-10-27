function makeTransaction(quantity, pricePerDroid, customerCredits) {
  let totalPrice = pricePerDroid * quantity;
  if (totalPrice > customerCredits) {
    return 'Insufficient funds!';
  } else {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
}
