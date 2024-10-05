const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];

const large = new Array(10000).fill("nemo");

function findNemo(array) {
  let timeStart = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") console.log("Found Nemo!");
  }
  let endTime = performance.now();
  console.log(
    "Call to find nemo took: " + (endTime - timeStart) + " milliseconds!"
  );
}

findNemo(large);
