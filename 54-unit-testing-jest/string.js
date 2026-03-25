function toUpper(str) {
  return str.toUpperCase();
}

function reverse(str) {
  return str.split('').reverse().join('');
}

module.exports = { toUpper, reverse };