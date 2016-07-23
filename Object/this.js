/**
 * Created by admin on 16/7/23.
 */

var A = {
    field:"A",
    describe: function () {
        return 'class name : ' + this.field;
    }
}

console.log( A.describe());

var B  = {
    field:"B",
}

B.describe = A.describe;

console.log( B.describe());

function f() {
    return "class name : " + this.field;
}

var C = {
    field : "C",
    describe : f
}

var D = {
    field : "D",
    describe : f
}

console.log( C.describe());

console.log(D.describe());


var E = {
    field : "E",
    describe : function () {
        return "class name : " + this.field;
    }
}

var field = "X";
var x = E.describe;
console.log( x());

//this === window

var Obj = function (p) {
    this.p = p;
}

Obj.prototype.m = function () {
    return this.p;
}

var o = new Obj('Hello');
console.log(o.p);
console.log(o.m());


var a = {
    b:{
        m:function () {
            console.log(this.p);
        },
        p:'Hello'
    }
};

var  hello = a.b.m;
hello()

var hello2 = a.b;
hello2.m();


var o = {
    f1:function () {
        console.log(this);
        var f2 = function () {
            console.log(this);
        }();
    }

}
o.f1();


var temp = function () {
    console.log(this);
}

var o1 = {
    f1:function () {
        console.log(this);
        var f2 = temp();
    }
}

o1.f1();

var o2 = {
    f1:function () {
        console.log(this);
        var  that = this;
        var f2 = function () {
            console.log(that);
        }();

    }
}

o2.f1();

var o3 = {
    v: 'Hello',
    p:['a','b'],
    f:function () {
        this.p.forEach( function (item) {
            console.log(this.v + ' ' + item );
        },this);
    }
}

o3.f()

var o4 = new Object();

o4.f = function () {
    console.log(this === o4);
}

o4.f()

var o5 = {};

var f2 = function () {
    return this;
}

console.log( f2() === this);
console.log(f2.call(o5) === o5);

var n = 123;

var o6 = {
    n : 456
}

function ab() {
    console.log(this.n);
}

ab.call()
ab.call(null)
ab.call(undefined)
// ab.call(window)
ab.call(o6)

function f3(x,y) {
    console.log(x+y);
}

f3.call(null,1,1);
f3.apply(null,[1,1]);

var arr = [5,3,65,6]
console.log(Math.max.apply(null,arr))

var arr2 = [1]
console.log(Math.max.apply(null,arr2))

var arr3 = ['a',,'c']

function print(p) {
    console.log(p);

}

arr3.forEach(print);

Array.apply(null,arr3).forEach(print);

console.log( Array.prototype.slice.apply({0:1,length:1}));
console.log( Array.prototype.slice.apply({0:1}));
console.log( Array.prototype.slice.apply({0:1,length:2}));
console.log( Array.prototype.slice.apply({length:1}));

var print2 = console.log
print2(2)

var print3 = console.log.bind(console);
print3(4)





