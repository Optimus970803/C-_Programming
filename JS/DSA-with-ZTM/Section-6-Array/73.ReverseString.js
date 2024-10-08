// Create Function that reverse string
// Hi My Name is Andrey
// yerdnA si emaN iH
function reverse(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

// console.log(reverse("Hello  Jonny!"));

function reverseString(str) {
  if (!str || str.length < 2 || typeof str !== "string")
    return "Check your inpuut sting!";

  const backward = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backward.push(str[i]);
  }
  console.log(backward);
  return backward.join("");
}

// console.log(reverseString("Hello"));

function reverse2(str) {
  return str.split("").reverse().join();
}

const reverse3 = (str) => [...str].reverse().join("");

console.log(reverse3("Hello"));
