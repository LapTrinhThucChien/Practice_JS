// //Thu hẹp phạm vi tìm kiếm
// const nameListElement = document.getElementById('nameList');

// //Kiểm tra coi nameListElement có tồn tại hay không
// if (nameListElement) //falsy
// {
//     const elementNameList = nameListElement.querySelectorAll('p'); //array
//     for (const elementName of elementNameList) {
//         console.log(elementName);
//     }
// }

// const course = {name: 'js', description: 'desc js'}


//Thu hẹp phạm vi tìm kiếm
const coursesElement = document.getElementById('courses');

if (coursesElement) {
    const elementCourseList = coursesElement.querySelectorAll('li.basic'); //array
    if (elementCourseList) {
        for (const elementCourse of elementCourseList) {
            console.log(elementCourse);
        }
    }
}


