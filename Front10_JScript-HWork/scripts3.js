var arr = prompt("Введите эллементы массива через пробелов").split(' ')
arrRev = []

for (i = arr.length - 1; i >= 0; i--) {
    arrRev.push(arr[i])
}

console.log(arr)
console.log(arrRev)