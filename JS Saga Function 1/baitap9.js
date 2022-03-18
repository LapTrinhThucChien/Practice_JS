// 4. Lấy hàng chục của số có 3 chữ số
function extractTheTwos(n) {
    if (
      (n > 0 && n.toString().length !== 3) ||
      (n < 0 && n.toString().length !== 4)
    )
      return -1;
    return Math.abs(Math.trunc(n / 10) % 10);
  }

  //5. Lấy hàng trăm của số có 3 chữ số

  function extractTheThrees(n) {
    if (
      (n > 0 && n.toString().length !== 3) ||
      (n < 0 && n.toString().length !== 4)
    )
      return -1;
    return Math.abs(Math.trunc(n / 100));
  }