let user = {
  age: 34,
  name: "Kile",
  magic: true,
  screem: function () {
    console.log("Ahhhhh~!");
  },
};

user.age; // O(1)
user.spell = "Hello Guys"; // O(1)
user.screem(); // O(1)
