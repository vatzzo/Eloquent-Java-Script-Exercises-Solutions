// A vector type
class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vector) {
        return [ this.x + vector.x, this.y + vector.y];
    }

    minus(vector) {
        return [ this.x - vector.x, this.y - vector.y];
    }
    // a getter
    get length() {
        return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y, 2));
    }
}

// console.log(new Vec(1, 2).plus(new Vec(2,3))); // [ 3, 5 ]
// console.log(new Vec(1, 2).minus(new Vec(2,3))); // [ -1. -1 ]
// console.log(new Vec(3 ,4).length); // 5

// Groups
class Group {
    constructor() {
        this.x = [];
    }

    add(...inputs) {
        for(let input of inputs) {
            let bool = this.x.includes(input);
            if(bool === true) {
                console.log("It seems that this element is already placed in the group. ");
            }else {
                this.x.push(input);
            }
        }
    }

    delete(...inputs) {
        for(let input of inputs) {
            let bool = this.x.includes(input);
            if(bool === true) {
                this.x.splice(this.x.indexOf(input),1);
            } else {
                console.log("Sorry, it seems that there is no such a value in the group. ");
            }
        }
    }

    has(input) {
        return this.x.includes(input);
    }

    static from(arr) {
        let group = new Group();
        arr.forEach( element => {
            if(group.has(element) === false) {
                group.add(element);
            }
        });
        return group;
    }
}


// let group = Group.from([10,20]);
// console.log(group.has(10)); //true
// console.log(group.has(30)); //false
// group.add(10);
// group.delete(10);
// console.log(group.has(10)); //false

// Iterable Groups





