let num = 100;


nextPtime:
for (let i = 2; i <= num; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPtime
    }
    console.log(i + ' Делители этого числа: ' + i + ', 1');
    
}