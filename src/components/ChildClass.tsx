import React from "react";

export default class ChildClass extends React.Component {
  constructor(props: any) {
    super(props);
    // console.log("props", props);
  }

  render(): React.ReactNode {
    return <div>ChildClass</div>;
  }
}

interface ISay {
  // sayHi(): void
  sayHi: () => void;
}

class Animal implements ISay {
  [s: string]: any;
  name;
  type = "animal";
  public ptype = "public";
  private _ptype = "private";
  static stic = "stic";
  constructor(name: any) {
    this.name = name;
    this.con = "con";
  }
  sayHi() {
    return `My name is ${this.name}`;
  }
}

class Dog extends Animal {
  gg = "gg";
  breed;
  constructor(name: any, breed: any) {
    super(name);
    this.breed = breed;
  }
  sayHi() {
    return `I am a dd`;
  }
}

let a = new Animal("Jack");
// console.log(Animal?.stic, a, a.sayHi()); // My name is Jack

let dog = new Dog("Spike", "eagle");
// console.log(dog, dog.sayHi());

class Params {
  constructor(public readonly x: number, protected y: number, z: number) {
    console.log(x, y, z);
    // No body necessary
  }
}
const aa = new Params(1, 2, 3);
console.log(aa.x);
