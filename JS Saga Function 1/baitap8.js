// 3. Cho 3 số, tìm số chẵn lớn nhất trong 3 số.

function maxEven(a, b, c) {
    let temp = [a, b, c];
    let max, vt, i;
    for (i = 0; i < temp.length; i++) {
      if (temp[i] % 2 == 0) {
        vt = i;
        break;
      }
    }
    if (i == temp.length) console.log("không có số chẵn");
    else {
      max = vt;
      for (i = vt + 1; i < temp.length; i++) {
        if (temp[i] % 2 == 0 && temp[i] > temp[max]) {
          max = i;
        }
      }
      console.log(temp[max]);
    }
  }
  
//   maxEven(10, 12, 13);
// n % 2 === 0

//Ky thuat linh canh
function findMaxEvenNumber(a, b, c){
    let max = -1; //invalid value

    if(a > max && a % 2 === 0) max = a;
    if(b > max && b % 2 === 0) max = b;
    if(c > max && c % 2 === 0) max = c;
    return max;
}