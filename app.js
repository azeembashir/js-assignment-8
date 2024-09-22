// question1
let numbers = [5, 3, 8, 1, 2];

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
        if (numbers[j] > numbers[j + 1]) {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}
document.write(numbers);

// question2
var numbers = [1, 2, 3, 5]; 


var n = numbers.length + 1; 
var expectSum = (n * (n + 1)) / 2;


var actualSum = 0;
for (var i = 0; i < numbers.length; i++) {
    actualSum += numbers[i];
}


var missingNumber = expectSum - actualSum;

console.log(missingNumber);