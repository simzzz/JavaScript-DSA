function processData(input) {
    let seqList = [];
    let lastAnswer = 0;
    let splitInput = input.split('\n');

    let numOfSequences = splitInput[0].split(' ').map(Number)[0];

    for (let i = 0; i < numOfSequences; i++) {
        seqList.push([]);
    }
    for (let i = 1; i < splitInput.length; i++) {
        let query = splitInput[i].split(' ').map(Number);
        let seq = ((query[1] ^ lastAnswer) % numOfSequences);
        if (query[0] === 1) {
            seqList[seq].push(query[2]);
        } else {
            let s = seqList[seq];
            let i = query[2] % s.length;
            lastAnswer = s[i];
            console.log(lastAnswer);
        }
    }
}

const test1 = `2 5
1 0 5
1 1 7
1 0 3
2 1 0
2 1 1`

processData(test1)