/*
Viết một function để xếp loại học sinh. Nhận vào một số điểm(input) và kết quả(output) của hàm như sau:
Nếu điểm > 8 => Excellence
Nếu điểm >=7 và điểm <=8 => Good
Nếu điểm >=4 và điểm <= 6 => Not Good
Nếu điểm < 4 => Bad
*/


//Kỹ thuật lính canh
function classifyStudent(mark){
    let result; //undefined

    if(mark > 8) result = 'Excellence';
    else if (mark >= 7) result = 'Good';
    else if (mark >= 4) result = 'Not Good';
    else result = 'Bad';

    return result;
}

//nhập số âm hoặc số 12

//[0, 10]

//version 2
function classifyStudent2(mark){
    //mark should be in range of [0, 10]
    if(mark < 0 || mark > 10) return '';

    let result; //undefined

    if(mark > 8) result = 'Excellence';
    else if (mark >= 7) result = 'Good';
    else if (mark >= 4) result = 'Not Good';
    else result = 'Bad';

    return result;
}

//Version 3
function classifyStudent3(mark){
    //mark should be in range of [0, 10] => BAD (just for example learning)
    if(mark < 0 || mark > 10) return '';
    if(mark > 8) return 'Excellence';
    else if (mark >= 7) return 'Good';
    else if (mark >= 4) return 'Not Good';

    return 'Bad';
}



//version 4
//Kỹ thuật khử if else
function classifyStudent4(mark){
    if(mark < 0 || mark > 10) return '';
    if(mark > 8) return 'Excellence';
    if (mark >= 7) return 'Good';
    if (mark >= 4) return 'Not Good';

    return 'Bad';
}

