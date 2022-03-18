// Tính tổng S(n) = 1 + 2 + 3... + n;


function calculateSum(n){
    if(n <= 0) return 0;

    let sum = 0;
    for(let i = 0; i <=n; i++){
        console.log('i: ', i);
        sum += i; //Sum = Sum + i
        console.log('Sum: ', sum);
    }

    return sum;
}

//version sum = (n * (n+1)) /2

function calculateSumV2(n){
    if(n <= 0) return 0;

    return (n * (n+1)) /2;
}