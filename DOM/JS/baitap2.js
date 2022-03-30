function changeStyle(number) {
    if (number === 1) //Thay đổi màu sắc, font chữ
    {
        const introductionElement = document.querySelector('.Introduction');
        if (introductionElement) {
            const h1Element = introductionElement.querySelector('h1');
            const descElement = introductionElement.querySelector('.Description');

            if (h1Element) {
                h1Element.style.color = 'Red';
                h1Element.style.backgroundColor = 'Yellow';
            }

            if (descElement) {
                descElement.style.color = 'Red';
                descElement.style.backgroundColor = 'Yellow';
            }
        }
    }
    else if(number === 2){
        
    }
}