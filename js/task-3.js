function checkForSpam(message) {
  let lowerCaseMessage = message.toLowerCase();
  return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
}
