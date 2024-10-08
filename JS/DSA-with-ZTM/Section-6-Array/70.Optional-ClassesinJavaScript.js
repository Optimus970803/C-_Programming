//reference type
var obj = { val: 10 };
var obj2 = obj;

obj.val = 15;

console.log(obj2.val);

var obj3 = { val: 10 };

console.log(obj2 === obj3);

//context

// console.log(this === window);

const obj4 = {
  a: function () {
    console.log(this);
  },
};

obj4.a();

// instantiation

class Player {
  constructor(name, type) {
    console.log("player", this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log("Hi I am " + this.name + "," + "I am a " + this.type);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("wizart", this);
  }
  play() {
    console.log("Weeeee I am a " + this.type);
  }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shown", "Dark Magic");

wizard1.play();
wizard1.introduce();
