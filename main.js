let num = 266219;
let numStr = String(num)
let result = 1;

for (i = 0; i < numStr.length; i++) {
    result = result * Number(numStr[i])
}

console.log(result);

resultDeg = result ** 3
resultDegStr = String(resultDeg)

console.log(resultDegStr.substr(0, 2));