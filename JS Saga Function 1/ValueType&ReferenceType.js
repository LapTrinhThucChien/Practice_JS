let isValid = true;

let developerName = "Phuc";


////////////////////////////////////////////
//     developerName = address 123456 + "phuc"//
///////////////////////////////////////////

let number = 5;

////////////////////////////////////////////
//     number = address 456778  + 5       ///
///////////////////////////////////////////


//address la dia chi bo nho. 


//Reference type: function, array, object

let developer2 = {
    name: 'Huy',
    age: 18
};

////////////////////////////////////////////////////////////////                /////////////////////////////////////
//  developer = address 123456  va co gia tri 45678(dia chi )  //----------->   // Address: 45678 Value: {name, age}/
///////////////////////////////////////////////////////////////                 ////////////////////////////////////



//Value type assignment
let a = 5; //a nằm ở 1 ô nhớ 123456
let b = a; //b nằm ở 1 ô nhớ riêng 45678 có giá trị là 5
b = 10; //giá trị của b = 10 nó nằm ở ô nhớ 45678

// console.log(a);

//Value type chi gan gia tri cua bien, khong gan dia chi o nho cua bien


//Reference type assignment

// let dev1 = {name: 'Huy'};
// let dev2 = dev1; //gán giá trị địa chỉ ô nhớ
// dev2.name = 'Phuc';

// console.log(dev1.name); //Phuc



////////////////////////////////////////////////////////////////                /////////////////////////////////////
//  dev1 = address 123456  va co gia tri 45678(dia chi )  //----------->   // Address: 45678 Value:  {name: 'Huy'}/
///////////////////////////////////////////////////////////////                 ////////////////////////////////////


////////////////////////////////////////////////////////////////             
//  dev2 = address 34567  va co gia tri 45678(dia chi )  //----------->   
///////////////////////////////////////////////////////////////                



// let dev1 = {name: 'Huy'};
// let dev2 = dev1; //gán giá trị địa chỉ ô nhớ

// console.log(dev1 === dev2); //true

// let dev3 = {name: 'Huy'};
// let dev4 = {name: 'Huy'};

// console.log(dev3 === dev4); //false

////////////////////////////////////////////////////////////////                /////////////////////////////////////
//  dev3 = address 123456  va co gia tri 45678(dia chi )  //----------->   // Address: 45678 Value:  {name: 'Huy'}/
///////////////////////////////////////////////////////////////                 ////////////////////////////////////


////////////////////////////////////////////////////////////////                /////////////////////////////////////
//  dev4 = address 34567  va co gia tri 6789(dia chi )  //----------->   // Address: 6789 Value:  {name: 'Huy'}/
///////////////////////////////////////////////////////////////                 ////////////////////////////////////



// Pass by value
function changeValueType(name, age){
    //copy biến name' lưu ở địa chỉ 45678 và có giá trị 'Huy'
    name = 'Phuc';
    age = 18;
}

let name = 'Huy';
let age = 17;
//=> copy biến khi truyền vào hàm với kiểu tham trị

//name lúc đầu lưu ở địa chỉ 12345 có giá trị 'Huy'
changeValueType(name, age);

// console.log(name); // Huy 
// console.log(age); // 17   


//pass by reference 
function changeReferenceType(developer){
    developer.name = 'Huy';
    developer.age = 17;
}

let developer = {
    name : 'Phuc',
    age : 18,
}
changeReferenceType(developer);
console.log(developer.name); //Phuc   Huy
console.log(developer.age); //18      17



