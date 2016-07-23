/**
 * Created by admin on 16/7/23.
 */

console.log( Object.getPrototypeOf(Object.prototype))

function Animal(name) {
    this.name = name;

}

var cat = new Animal("cat");

var dog = new Animal("dog");

Animal.prototype.color = "white";

console.log(cat.color);
console.log(dog.color);

Animal.prototype.color = "black";



console.log(cat.color);
console.log(dog.color);

cat.color = "yellow";
console.log(cat.color);


Animal.prototype.eat = function () {
    console.log(this.name + " eat");
}

cat.eat()
dog.eat()


