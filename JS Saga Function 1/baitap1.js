//Viết hàm kiểm tra một số là số dương chẵn. Nếu thỏa trả về true, ngược lại trả về false.



//Version 1
//Kỹ thuật cờ hiệu (flag)
function isPositiveEvenNumber(n){
    //Checking
    //Processing code logic

    let isValid; //undefined

    if(n > 0 && n % 2 == 0){
        isValid = true;
    }
    else{
        isValid = false;
    }

    return isValid;
}

//Version 2
function isPositiveEvenNumber2(n){
    let isValid = fasle;

    if(n > 0 && n % 2 == 0){
        isValid = true;
    }

    return isValid;
}

//Version 3
//Khử if else
function isPositiveEvenNumber3(n){
    if(n > 0 && n % 2 == 0){
        return true;
    }

    return false;
}

//Version 4
function isPositiveEvenNumber4(n){
    return n > 0 && n % 2 == 0;
}

let developerList = [
    {id: 1, name: 'Huy', language: 'C#'},
    {id: 2, name: 'Phuc', language: 'JS'},
    {id: 3, name: 'Long', language: 'PHP'},
    {id: 4, name: 'Tam', language: 'Go'},
]