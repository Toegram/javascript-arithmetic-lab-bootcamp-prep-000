var a = 60
var b = 41
var n = 100

function add(a,b) {
  return a += b;
}

function subtract(a,b) {
  return a -= b;
}

function multiply(a,b) {
  return a * b;
}

function divide(a,b) {
  return a /= b;
}

function inc(n) {
  n++;
  return n;
}

function dec(n) {
  n--;
  return n;
}

function makeInt(n) {
  n -= 0.687;
  return n;
}