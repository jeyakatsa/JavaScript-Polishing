var testArr = [6,3,5,1,2,4]

//Print Values and Sum
//Print each array value and the sum so far//
var sum = 0;
for (var i = 0; i < testArr.length; i++){
    console.log(testArr[i]);
    sum = testArr[i] + sum;
    console.log(sum);
}

//Value * Position
//Multiply each value in the array by its array position//
for (var i = 0; i < testArr.length; i++){
    testArr[i] = testArr[i] * i;
}
console.log(testArr);