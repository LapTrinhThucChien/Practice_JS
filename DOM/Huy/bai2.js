
function gameShow() {
    let randomNumber = Math.round(Math.random() * 10);
    console.log(randomNumber);
    const result1 = document.getElementById("result1");

    if (result1) {
        //result1.innerHTML = "tao mệt mày rồi nha";
        if (randomNumber == 10) result1.innerHTML = "bạn đã trúng giải nhất";
        else if (randomNumber >= 8) result1.innerHTML = "bạn đã trúng giải nhì";
        else if (randomNumber >= 7) result1.innerHTML = "bạn đã trúng giải ba";
        else if (randomNumber > 5)
            result1.innerHTML = "bạn đã trúng giải khuyến khích";
        else result1.innerHTML = "chúc bạn may mắn lần sau";
    }
}