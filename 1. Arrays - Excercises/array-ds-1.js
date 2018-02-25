function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    let str = '';
    for (let i = n - 1; i >= 0; i--) {
        str += arr[i];
        str += ' ';
    }
    console.log(str)
}