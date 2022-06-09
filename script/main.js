let firstNumber = 0;
let secondNumber = 0;
let result;
let clicker = 0;

document.onclick = (el) => {
    elClick = Number(el.target.id);
    if ((clicker === 0 || clicker === 1) & elClick >=0 & elClick <=9) {
        document.querySelector(".tablo").innerHTML = elClick;
        firstNumber = Number(elClick);
        clicker = 1;
    }

    if (elClick === 11 & clicker === 1) {
        document.querySelector(".tablo").innerHTML = firstNumber+" +";
        clicker = 2;
    }

    if ((clicker === 2 || clicker === 3) & elClick >=0 & elClick <=9) {
        console.log(firstNumber+" +", elClick);
        secondNumber = Number(elClick);
        document.querySelector(".tablo").innerHTML = firstNumber+" + "+secondNumber;
        clicker = 3;
    }

    if (elClick === 12 & clicker === 3) {
        result = firstNumber+secondNumber;
        document.querySelector(".tablo").innerHTML = result;
        clicker = 0;
    }
};