// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1) constant time
  a = 50 + 3; // O(1) constant time

  for (let i = 0; i < input.length; i++) {
    // O(n) linear time n can change
    anotherFunction(); //  O(n) if input is large function will run
    let stranger = true; // O(n) if input 5 this will be run 5 time so this also Linear time
    a++; // O(n)  run as loop size
  }
  return a; // O(1) only run 1 time
}

// Canculation : O(1)*3+n+n+n+n=O(3)+4n=Big O(3+4n)=O(n) why?
