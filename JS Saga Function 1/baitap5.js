//Cho 3 số, tìm số lớn nhất.

//Kỹ thuật lính canh
function findMax(a, b, c){
    let max = a;

    if(b > max) max = b;
    if(c > max) max = c;

    return max;
}
