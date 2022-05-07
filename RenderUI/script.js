/*
Simple markup

<li>Learn Javascript</li>

function createTodoElement(todo){
    const liElement = document.createElement('li');
    liElement.textContext = todo.title;

    return liElement;
}
*/


/*
Complex markup
using <template> does not show in html

1. create template
2. Clone template
3. Replace content
4. Add event

type of nodes:
Text, comment, document, documentFragment

$0.querySelector('li') => null

$0.content.querySelector('li')

$0.content.querySelector('li').cloneNode(true)
*/

let categoryList = [
    { id: 1, name: 'JS', createAt: '02/02/2022'},
    { id: 2, name: 'C#', createAt: '03/03/2022'},
]

function createCategoryElement(category){
    if(!category) return null;

    //find template
    const categoryTemplate = document.getElementById('categoryTemplate');
    if(!categoryTemplate) return;

    //clone li category element
    const categoryElement = categoryTemplate.content.firstElementChild.cloneNode(true);
    categoryElement.dataset.id = category.id;

    //update content
    const nameElement = categoryElement.querySelector('.category_name');
    if(nameElement) nameElement.textContent = category.name;

    const createAtElement = categoryElement.querySelector('.category_createAt');
    if(createAtElement) createAtElement.textContent = category.createAt;
    
    //attach events


    return categoryElement;
}

function renderCategoryList(categoryList, ulElementId){
    if(!Array.isArray(categoryList) || categoryList.length === 0) return;

    //find ul element
    //loop categoryList
    //each category => create li element => append li into ul
    const ulElement = document.getElementById(ulElementId);
    if(!ulElement) return;

    for(const category of categoryList){
        const liElement = createCategoryElement(category);
        ulElement.appendChild(liElement);
    }
}

renderCategoryList(categoryList, 'categoryList');