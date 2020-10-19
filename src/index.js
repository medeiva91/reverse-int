module.exports = function reverse (n) {
  n = n.toString().split("");
  if (n[0] === "-") {
    n.shift();
  }
  return n.reverse().join("");
}
