class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): number {
    return this.key.getSignature();
  }
}

abstract class House {
  protected key: Key;
  protected door: boolean = false;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("Person has entered the house.");
    } else {
      console.log("The door is closed. Can't come in.");
    }
  }

  public abstract openDoor(keyValue: number): void;
}

class MyHouse extends House {
  openDoor(keyValue: number): void {
    if (keyValue === this.key.getSignature()) {
      this.door = true;
      console.log("The door is open.");
    } else {
      console.log("Wrong key! The door is closed.");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
