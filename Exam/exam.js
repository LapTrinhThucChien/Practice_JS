//Viết một hàm tính tổng các số lẻ từ 0 đến N (N là số nhập tay vào)
/*
// Hàm tính tổng các số lẻ từ 0 đến N 
function calculateSum(n) {
    let sum = 0;
    for (var i = 0; i <= n; i++) {
        if (i % 2 !== 0) {
            sum = sum + i;
        }
    }
    console.log(sum);
}

function SumOdd(n) {
    //Check condition of parameter
    if (n < 0)
        console.log('N không hợp lệ. Vui lòng nhập n >= 0');
    for (var i = 0; i <= n; i++) {
        if (i % 2 !== 0) {
            sum = sum + i;
        }
    }
    console.log(sum);
}


//Viết một hàm tính tổng các số nguyên tố từ 0 đến N, 
//nếu từ 0 đến N không có số nguyên tố thì hiện ra câu “Danh sách này không có số nguyên tố”

// Tính tổng số nguyên từ 0 đến N

//Số nguyên tố là số chia số cho 1 và chính nó và > 1


function calculatePrimeSum(n) {
    let sum1 = 0;
    if (n < 2) console.log("Danh sách này không có số nguyên tố");
    if (n == 2) {
        sum1 = sum1 + 2
        console.log(sum1);
    }
    if (n > 2) {
        for (let number = 0; number <= n; number++) {
            let isPrime = true;
            for (let i = 2; i < n - 1; i++) { //[2, n-1]
                if (n % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime == true) {
                sum1 = sum1 + number;
                console.log(sum1);
            }
        }

    }

}

//version 1
/*
function SumPrime(n) {
    if (n < 2) {
        console.log("Danh sách này không có số nguyên tố");
    }

    let sum = 0;
    for (let number = 2; number <= n; number++) //[2, n]
    {
        //Kỹ thuật cờ hiệu (flag)
        let isPrime = true;
        //[2, number-1] number 
        for (let i = 2; i < number - 1; i++) { //2 - n
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) //isPrime === true
        {
            sum = sum + numnber;
        }
    }

    console.log(sum);

}
*/

//version 2
//Kiểm tra 1 số là số nguyên tố
function isPrimeNumber(number) {
    if (number < 2) return false;

    for (let i = 2; i < number; i++) { //[2, number-1]
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

// Tổng số nguyên tố từ 0 đến N 
function SumPrime(n) {
    if (n < 2) {
        console.log("Danh sách này không có số nguyên tố");
        return;
    }

    let sum = 0;
    for (let number = 2; number <= n; number++) //[2, n]
    {
        //Function call function
        let isPrime = isPrimeNumber(number);
        if (isPrime)
            sum = sum + number;
    }

    console.log(sum);
}

/*
Viết một hàm so sánh 2 mảng số về các phần tử trong mảng, sự khác nhau này được in ra thành chữ, 
độ dài của 2 mảng nhập vô không quá 5 phần tử và bắt buộc 2 mảng phải bằng nhau nếu không bằng nhau 
thì xuất ra câu “Hãy kiểm tra 2 mảng nhập vào”
*/

// So sánh hai mảng

function compareTwoArray(a, b) {
    if ((a.toString().length) !== (b.toString().length)) {
        console.log("Hãy kiểm tra hai mảng nhập vào");
    }
    if (a[0] > b[0]) {
        console.log("phần tử số 0 mảng a lớn hơn mảng b");
    } else console.log("phần tử số 0 mảng b lớn hơn mảng a");

    if (a[1] > b[1]) {
        console.log("phần tử số 1 mảng a lớn hơn mảng b");
    } else console.log("phần tử số 1 mảng b lớn hơn mảng a");

    if (a[2] > b[2]) {
        console.log("phần tử số 2 mảng a lớn hơn mảng b");
    } else console.log("phần tử số 2 mảng b lớn hơn mảng a");

    if (a[3] > b[3]) {
        console.log("phần tử số 3 mảng a lớn hơn mảng b");

    } else console.log("phần tử số 3 mảng b lớn hơn mảng a");

    if (a[4] > b[4]) {
        console.log("phần tử số 4 mảng a lớn hơn mảng b");
    } else console.log("phần tử số 4 mảng b lớn hơn mảng a");

    if (a[5] > b[5]) {
        console.log("phần tử số 5 mảng a lớn hơn mảng b");
    } else console.log("phần tử số 5 mảng b lớn hơn mảng a");
}

//[1, 2, 3, 4, 5] //index 0 1 2 3 4

//5 phần tử => 0 ... 5-1 = 4; 0 -> length - 1

//[0] 1 - [1] 2 .... - [4] 5


function compareTwoArray(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b)){
        console.log("Hãy kiểm tra hai mảng nhập vào");
        return;
    }

    if (a.length > 5 || b.length > 5){
        console.log("Hãy kiểm tra hai mảng nhập vào");
        return;
    }

    if (a.length !== b.length) {
        console.log("Hãy kiểm tra hai mảng nhập vào");
        return;
    }

    for(let i = 0; i < a.length; i++) //0, length - 1 a.length = b.length
    {
        if(a[i] > b[i])
        {
            console.log("Phần tử số " + i + " mảng a lớn hơn mảng b");
        }
        else if(a[i] <= b[i])
        {
            console.log("Phần tử số " + i + " mảng a nhỏ hơn hoặc bằng mảng b");
        }
    }
}