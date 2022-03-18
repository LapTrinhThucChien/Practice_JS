function getMonth(n){
    let month = '';
    switch(n){
        case 1:
            month = 'Jan';
            break;
        case 2:
            month = 'Feb';
            break;
        ///Similar to case 3,4...11
        case 12:
            month = 'Dec';
            break;
        default:
            month = "Invalid number";
            break;
    }
    return month;
}

month 1 - 12

days 2 8