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
  for (let i = 0; i < array.length; i++) {
    console.log("running...");
    if (array[i] === "nemo") {
      console.log("Found Nemo!");
      break; //  if nemo is 4 we can find nemo 4 time but nemo might be index of 10 .So Big O 1 rule always canculate worst case!
    }
  }
}

findNemo(everyone);
