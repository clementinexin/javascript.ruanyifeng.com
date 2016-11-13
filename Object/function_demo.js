var log = function (msg) {
    console.log(msg);
}

var doSomething = function (thing) {
    thing();
}

var sayBigDeal = function () {
    var msg = 'I am kind of a big deal';
    log(msg)
}

doSomething(sayBigDeal)

/*
var el1 = document.getElementById('main-carousel');
var slider1 = new Carousel(el1, 3000);
slider1.init();

var el2 = document.getElementById('news-carousel');
var slider2 = new Carousel(el2, 5000);
slider2.init();

var el3 = document.getElementById('events-carousel');
var slider3 = new Carousel(el3, 7000);
slider3.init();

function initialiseCarousel(id, frequency) {
    var el = document.getElementById(id);
    var slider = new Carousel(el, frequency);
    slider.init();
    return slider;
}

initialiseCarousel('main-carousel', 3000);
initialiseCarousel('news-carousel', 5000);
initialiseCarousel('events-carousel', 7000);

var unicornEl = document.getElementById('unicorn');
unicornEl.className += ' magic';
spin(unicornEl);

var fairyEl = document.getElementById('fairy');
fairyEl.className += ' magic';
sparkle(fairyEl);

var kittenEl = document.getElementById('kitten');
kittenEl.className += ' magic';
rainbowTrail(kittenEl);

function addMagicClass(id) {
    var element = document.getElementById(id);
    element.className += ' magic';
    return element;
}

var unicornEl = addMagicClass('unicorn');
spin(unicornEl);

var fairyEl = addMagicClass('fairy');
sparkle(fairyEl);

var kittenEl = addMagicClass('kitten');
rainbow(kittenEl);


function addMagic(id, effect) {
    var element = document.getElementById(id);
    element.className += ' magic';
    effect(element);
}

addMagic('unicorn', spin);
addMagic('fairy', sparkle);
addMagic('kitten', rainbow);

*/

var colors = ['red','orange','yellow','green','blue','purple'];

function foreach(callback,array) {
    for (var i=0;i<array.length;i++) {
        callback(array[i],i);
    }
}

foreach(console.log, colors)

colors.forEach(console.log)

var map = function (callback,array) {
    var newArray = [];
    for (var i=0;i<array.length;i++) {
        newArray[i] = callback(array[i],i);
    }
    return newArray;
}

var double = function(i) {
    return i*2;
}

var numbers = [1,2,3]

console.log(map(double,numbers))

console.log( numbers.map(double))


var reduce = function (callback,initial,array) {
    var tmp = initial;
    for (var i=0;i<array.length;i++) {
        tmp = callback(tmp,array[i]);
    }
    return tmp;
}

var add = function (a,b) {
    return a+b;
}

console.log(reduce(add,0,numbers))

console.log(numbers.reduce(add,0))


var ponies = [
    [
        ['name', 'Fluttershy'],
        ['image', 'http://tinyurl.com/gpbnlf6'],
        ['description', 'Fluttershy is a female Pegasus pony and one of the main characters of My Little Pony Friendship is Magic.']
    ],
    [
        ['name', 'Applejack'],
        ['image', 'http://tinyurl.com/gkur8a6'],
        ['description', 'Applejack is a female Earth pony and one of the main characters of My Little Pony Friendship is Magic.']
    ],
    [
        ['name', 'Twilight Sparkle'],
        ['image', 'http://tinyurl.com/hj877vs'],
        ['description', 'Twilight Sparkle is the primary main character of My Little Pony Friendship is Magic.']
    ]
];

var showArgs = function (firstArg,secondArg) {
    console.log(arguments);
    console.log(arguments.length)
    var args = Array.prototype.slice.call(arguments,0)
    console.log(args)
}

showArgs("Hello","Functional Programming")

function twinkleTwinkle(thing) {
    console.log('Twinkle,twinkle,little ' + thing)
}

twinkleTwinkle('bat');

twinkleTwinkle.call(null,'star')

twinkleTwinkle.apply(null,['star'])

console.log(map(function (x) {return x*2},numbers ))

var partialFrstOfTwo = function(fn,param1) {
    return function (param2) {
        return fn(param1,param2);
    }
}

function plus(param1,param2) {
    return param1+param2;
}

var plus1 = partialFrstOfTwo(plus,1);

console.log(plus1(1))

console.log(plus1(10))


var argsToArrray = function(args) {
    return Array.prototype.slice.call(args,0);
}

var partial = function () {
    
    var args = argsToArrray(arguments);
    
    fn = args.shift();
    
    return function () {
        var remaindingArgs = argsToArrray(arguments);
        return fn.apply(this,args.concat(remaindingArgs));
    }
}

console.log(partial(plus,1)(1))

console.log(partial(plus,10)(1))



console.log(plus.bind(null,1)(1))
console.log(plus.bind(numbers,10)(2))

var composrTwo =






