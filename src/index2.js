// import '@babel/polyfill'
// import 'core-js/es6/map'
// import 'core-js/es6/set'
// import 'core-js/es6/array'
import "core-js";
import "regenerator-runtime/runtime"
// import "core-js/modules/esnext.math.radians.js";
// import "core-js/modules/esnext.string.replace-all";

// import "core-js/stage";
// import 'core-js/features/promise'



import FindIndex from './findindex'
import hotLabel from './hot-label'
console.log([1, 2, 3].findIndex(x => x == 4))

console.log('abc'.padStart(10))

// var a =  Promise('a');


async function asyncTestFunc() {
    const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('success')
        }, 2000);
    })
    return result
}

const alertMe = (msg) => {
    console.log(msg)
}
class Robot {
    constructor(msg) {
        this.message = msg
    }
    say() {
        alertMe(this.message)
    }
}
const marvin = new Robot('hello babel')
marvin.say()

class Person {
    constructor(name) {
        this.name = name;
    }

    logger() {
        console.log("Hello", this.name);
    }
    logger2() {
        console.log("Hello", this.name);
    }
    static logg2() {
        console.log(222)
    }

}

class Person2 {
    constructor(name) {
        this.name = name;
    }

    logger() {
        console.log("Hello", this.name);
    }
    logger2() {
        console.log("Hello", this.name);
    }
    static logg2() {
        console.log(222)
    }

}

new Person('shi').logger2()
new Person2('shigx').logger2()
new FindIndex('test')
asyncTestFunc()


var str1 = "Aoc.Iop.Aoc.Iop.Aoc";		//定义三个一样的字符串
var str2 = "Aoc.Iop.Aoc.Iop.Aoc";
var str3 = "Aoc.Iop.Aoc.Iop.Aoc";

var str11 = str1.replace(".", "#");		// str11 = "Aoc#Iop#Aoc#Iop#Aoc"
// var str22 = str2.replaceAll(".", "#");	// str22 = "###################"
// var str33 = str3.replaceFirst(".", "#");	// str33 = "#oc.Iop.Aoc.Iop.Aoc

console.log(str11, 'stage:' + Math.radians(180))

var re = /(hi)?/g;
console.log(re.exec("hi"));
console.log(re.lastIndex);
