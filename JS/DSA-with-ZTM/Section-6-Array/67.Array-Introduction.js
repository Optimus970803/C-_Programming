const string = ["a", "b", "c", "d"]; // 4*4=16 bytes of storage

// push
string.push("e"); // O(n)

//pop
string.pop(); // O(1)
string.pop();

//unshift
string.unshift("x"); // O(n)

//splice
string.splice(2, 0, "alien"); // O(n)

console.log(string);
