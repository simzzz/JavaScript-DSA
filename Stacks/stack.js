'use strict'

function Stack() {
    const items = [];

    this.push = function(...elements) {
        elements.forEach(e => items.push(e));
    }

    this.pop = function() {
        return items.pop();
    }

    this.peek = function() {
        return items[items.length - 1];
    }

    this.isEmpty = function() {
        return items.length === 0;
    }

    this.clear = function() {
        items = [];
    }

    this.size = function() {
        return items.length;
    }

    this.print = function() {
        console.log(items.toString());
    }
}

function getStack() {
    const stack = new Stack();
    Object.freeze(stack)
    return stack;
}
// const stack = getStack();
// console.log(stack.isEmpty()); // true
// stack.push(5, 8);
// console.log(stack.peek()); // 8
// stack.push(11);
// console.log(stack.size()); // 3
// console.log(stack.isEmpty()); // false
// stack.push(15);
// stack.pop();
// stack.pop();
// console.log(stack.size()); // 2
// stack.print() // 5, 8

function divideBy2(decNumber) {
    let remStack = getStack(),
        rem, binaryString = '';

    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}
console.log(divideBy2(233));
console.log(divideBy2(10));
console.log(divideBy2(1000));


function baseConverter(decNumber, base) {
    let remStack = getStack(),
        rem,
        baseString = '',
        digits = '0123456789ABCDEF';

    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }

    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }

    return baseString;
}

console.log(baseConverter(123456, 16));