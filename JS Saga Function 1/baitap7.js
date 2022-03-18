/*
Random một số ngẫu nhiên trong khoảng [a, b] với a < b
(Gợi ý: JS có sẵn hàm Math.random() để làm việc này, nhưng chỉ trả về trong khoảng [0,1]
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
*/

function randomNumber(a, b) {
    if (a > b || a <= 0) return -1;
    else return Math.round(Math.random() * (b - a)) + a;
  }



  
  // console.log(randomNumber(1, 10));


  //Ky thuat khu if..else, if..return
  function randomNumberInRange(a, b){
    if (a > b || a <= 0) return -1;
    return Math.round(Math.random() * (b - a)) + a;
  }


//[1, 10]
//1
//10 - 1 = 9
// random from 0 to 9 + 1