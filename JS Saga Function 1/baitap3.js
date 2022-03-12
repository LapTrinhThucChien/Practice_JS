//Random một số ngẫu nhiên trong khoảng [0, n].

//Ví dụ n = 10
//Mong muốn: 0, 1, 4, 5,....10

//Math.random() => [0, 1)

function randomNumber(n){
    //Validate
    if(n <= 0) return -1;

    //Processing
    let random = Math.random() * n; 

    //0.1 => 10 => 10
    //0.95 => *10 => 9.5

    let result = Math.round(random); //9.5 => 10 , 9.4 => 9

    return result;
}