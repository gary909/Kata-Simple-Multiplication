function simpleMultiplication(number) {
    var result = number % 2; // Use modulo to check if Odd/Even
    if (result == 0) {
        return number * 8;
    } else {
        return number * 9;
    }
}

console.log(simpleMultiplication(2)); // 16
console.log(simpleMultiplication(1)); // 9