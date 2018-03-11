function Queue() {
    let items = [];

    this.enqueue = function(...elements) {
        elements.forEach(e => items.push(e))
    }

    this.dequeue = function() {
        return items.shift();
    }

    this.front = function() {
        return items[0];
    }

    this.isEmpty = function() {
        return items.length === 0;
    }

    this.size = function() {
        return items.length;
    }

    this.print = function() {
        console.log(items.toString());
    }
}

function getQueue() {
    let q = new Queue();
    q = Object.freeze(q);
    return q;
}

// const queue = getQueue();
// console.log(queue.isEmpty());
// queue.enqueue('John');
// queue.enqueue('Jack');
// queue.enqueue('Camila');
// queue.print(); // John, Jack, Camila
// console.log(queue.size()); // 3
// console.log(queue.isEmpty()); // outputs
// queue.dequeue();
// queue.dequeue();
// queue.print(); // Camila

function hotPotato(nameList, num) {
    let queue = new Queue();

    for (let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }

    let eliminated = '';

    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated + ' was eliminated');
    }

    return queue.dequeue();
}

let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
let winner = hotPotato(names, 7);
console.log('The winner is: ' + winner); // John
let winner = hotPotato(names, 128);
console.log('The winner is: ' + winner); // Jack