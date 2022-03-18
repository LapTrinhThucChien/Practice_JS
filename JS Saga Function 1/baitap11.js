// Tạo một object student với tên Huy và tuổi 18

//Cách 1
let student = {};
student.name = 'Huy';
student.age = 18;

// console.log(student);

//Cách 2
let student1 = {
    name: 'Huy',
    age: 18
}

// console.log(student1);

let student2 = {
    name: 'Huy',
    name: 'Phuc',
    age: 18
};

// console.log(student2);


//Kiểm tra một object là empty
function isEmpty(obj){
    return Object.keys(obj).length === 0; //length of key list equals zero
}

let developer = {};
// console.log(isEmpty(developer));

let developer2 = {
    name: 'Huy',
    age: 18
}
// console.log(isEmpty(developer2))


//Lấy điểm trung bình của object {math: 10, english: 8}


function calculateAvgMark(mark){
    if(!mark) return -1; //null, undefined  (cách check falsy value) nếu mark là 1 trong những giá trị falsy

    //avg = sum/length
    let length = Object.keys(mark).length;
    let sum = 0;

    for(let key in mark)
    {
        let value = mark[key]; 
        sum += value; //sum = sum + value;
    }

    //math => value: 10; sum = 0 + 10 = 10
    //english => value: 8; sum = 10 + 8 = 18
    //music => value: 9; sum = 18 + 9 = 27

    return sum / length;

}

let mark =  {math: 10, english: 8, music: 9};

calculateAvgMark(mark);