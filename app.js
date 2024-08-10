//problem no:1 remove duplicate elements in array
function myarray(numbers) {
    var k = 0;
    var duplicatearray = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] == numbers[i + 1]) {
            k = numbers[i];
            duplicatearray.push(numbers[i]);
            i++;
            while (numbers[i] == k) {
                i++;
            }
            i--;
        }
        else {
            duplicatearray.push(numbers[i]);
        }
    }
    return duplicatearray;
}
console.log(myarray([1, 2, 3, 3, 4, 5]));
console.log(myarray([1, 2, 3, 3, 3, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11]));
//problem no:2 find second largest number in an array
console.log(array1([10, 20, 30, 155, 25]));
function array1(numbers) {
    var max = numbers[0];
    var secondLg = numbers[0];
    for (var z = 0; z < numbers.length; z++) {
        if (numbers[z] > max) {
            max = numbers[z];
        }
    }
    for (var y = 0; y < numbers.length; y++) {
        if (numbers[y] > secondLg && numbers[y] != max) {
            secondLg = numbers[y];
        }
    }
    return secondLg;
}
