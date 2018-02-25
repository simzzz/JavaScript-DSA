function leftRotation(a, d) {
    for (let i = 0; i < d; i++) {
        let first = a.shift();
        a.push(first)
    }

    console.log(a.join(' '))
}