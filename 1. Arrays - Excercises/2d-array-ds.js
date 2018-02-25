function main() {
    var arr = [];
    for (arr_i = 0; arr_i < 6; arr_i++) {
        arr[arr_i] = readLine().split(' ');
        arr[arr_i] = arr[arr_i].map(Number);
    }

    let largestSum = -100;

    for (let i = 0; i < arr.length - 2; i++) {
        let outerArr = arr[i];
        for (let j = 0; j < outerArr.length - 2; j++) {
            let currentSum = 0;
            currentSum += (arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]);

            if (currentSum > largestSum) {
                largestSum = currentSum;
            }
        }
    }

    console.log(largestSum);
}