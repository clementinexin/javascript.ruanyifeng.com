/**
 * Created by admin on 16/7/23.
 */


/**
 * 1.创建一个空对象，作为将要返回的对象实例
 * 2.将这个空对象的原型，指向构造函数的prototype属性
 * 3.将这个空对象赋值给函数内部的this关键字
 * 4.开始执行构造函数内部的代码
 * @constructor
 */
var Bike = function () {
    this.value = 100;
}

var bike = new Bike();
console.log(bike.value);


var Bike2 = function (p) {
    this.value = p;

}

var bike2 = new Bike2(1000)
console.log(bike2.value)


var bike3 = Bike2(1200)

// console.log(bike3.value)
console.log(value)


var Bike3 = function (p) {
    'use strict';
    this.value = p;
}

// var bike4 = Bike3(1300);

// console.log(bike4.value);
// console.log(value);

var Bike4 = function (p) {
    if (!(this instanceof Bike4)) {
        return new Bike4(p);
    }
    this.value = p;

}

var bike5 = new Bike4(1600);
console.log(bike5.value);

var Bike5 = function (p) {
    this.value = p;
    return 100;

}

console.log(new Bike5(1700));

var Bike6 = function (p) {
    this.value = p;
    return {value : 1800};

}

console.log(new Bike6(1900).value);


var Bike7 = function (p) {
    this.value = p;
    return "Hello";
}

console.log(new Bike7(2100));

function getx () {
    return "Hello";
}

var x = new getx();

console.log(x);