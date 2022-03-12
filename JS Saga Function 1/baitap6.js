//Lấy hàng đơn vị của số có 3 chữ số

//123 => 3  876 => 6

function extractTheOnes(n){
    //1234 > 0 && length = 4 !== 3 => falsy

    //-1235 < 0 && length = 5 !== 4 => falsy

    //-123 + length = 4

    //Validate
    if((n  > 0 && n.toString().length !== 3) || (n < 0 && n.toString().length !== 4)) return -1;

    //123 % 10 = 3
    return Math.abs(n % 10);
}