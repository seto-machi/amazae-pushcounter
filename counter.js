const counter = window.document.querySelector(".click");
const inNumber = window.document.querySelector("#counter");
let number = 0
counter.addEventListener('click', () => {
    number++
    inNumber.innerHTML = number;
    if (number === 100) {
        number = 0
    }
});


//100回目でCSS成型用
// inNumber.innerHTML = 100;
