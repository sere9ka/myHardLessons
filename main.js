let num = 100;
let arr = ['545452', '426548', '545654', '546542', '245268', '246542', '548569']

for (let i = 0; i < arr.length; i++) {
    let arrI = arr[i].split('')
    if (arrI[0] == 2 || arrI[0] == 4) {
        console.log(arrI);
    }
}

nextPtime:
for (let i = 2; i <= num; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPtime
    }
    console.log(i + ' Делители этого числа: ' + i + ', 1');
    
}