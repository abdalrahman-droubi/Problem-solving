function fibonacciRec(n) {
    if (n < 2) {
        return 1;
    } else {
        return fibonacciRec(n - 2) + fibonacciRec(n - 1);
    }
}

console.log(fibonacciRec(4));


let arr = [1, 2, 3, 4, 5, 10]
let sum = 0
let i = 0
function sumArr(arr) {

    if (i >= arr.length) {
        return;
    }
    sum += arr[i++]
    sumArr(arr)
    return sum
}
console.log(sumArr(arr));

// ----------------------------------- by use for ------------------

// let str = "hi"
// let news = ""
// function revers(str) {
//     for (let i = str.length - 1; i >= 0; i--) {
//         news += `${str[i]}`
//     }
//     console.log(news);
// }

// revers(str)
// ----------------------------------- by use for ------------------


let str = "ABCD"
let news = ""
let i2 = str.length - 1
function revers(str) {
    if (i2 < 0) {
        return 1
    }
    news += `${str[i2--]}`
    revers(str)
    return news
}

console.log(revers(str)); 