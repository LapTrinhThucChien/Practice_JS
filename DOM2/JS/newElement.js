const courses = [
    { id: 1, name: 'JS' },
    { id: 2, name: 'ReactJS' },
    { id: 3, name: 'Angular' },
    { id: 4, name: 'Nodejs' },
];

/*
Tạo element mới => document.createElement(element)
Thiết lập các thuộc tính cho element đã tạo
Thêm element vào cây DOM => Element.appendChild(element)
*/
function createCourseLiElement(course) {
    const liElement = document.createElement('li');
    liElement.textContent = course.name;
    return liElement;
}

function renderCourses(courses, coursesId) {
    if(!Array.isArray(courses) || courses.length === 0) return;
    
    const coursesUlElement = document.getElementById(coursesId);
    if (!coursesUlElement)
        return;

    for (const course of courses) {
        const liElement = createCourseLiElement(course);
        coursesUlElement.appendChild(liElement);
    }
}

renderCourses(courses, 'courses');

renderCourses(courses, 'courses1');

/*
const containerElement = document.getElementById('container');
if(containerElement){
    // 1. create element
    const pElement = document.createElement('p');

    //2.Set attribute for the new element
    pElement.textContent = 'JS';

    //3.Add element into the DOM tree
    containerElement.appendChild(pElement);
}
*/
//Element.appendChild(element) //html element, svg element
//Element.append(node) //comment, text, element

//thêm vào vị trí con cuối cùng