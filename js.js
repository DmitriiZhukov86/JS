function init() {
    let value = 0
   
   

    const buttonPlus = document.querySelector(".js-plus");
    const buttonMinus = document.querySelector(".js-minus");
    const buttonNull = document.querySelector(".js-null");
    const valueEl = document.querySelector(".js-value");
    const diffEl = document.querySelector(".j-diff");

    value.style.color = "red";

    const max = 10;
    const min = 0
    
    function plusClick() {
        if (value < max){
        value = value + Number(diffEl.value);
        valueEl.innerText = value;
        } else {
            alert("Достигнут максимум");
        }
    }

    function minusClick() {
        if (value > min) {
        value = value - Number(diffEl.value);
        valueEl.innerText = value;
        } else {
            alert("Достигнут минимум");
        }
    }

    function nullClick() {
        value = 0;
        valueEl.innerText = value;
    }

    buttonPlus.onclick = plusClick;
    buttonMinus.onclick = minusClick;
    buttonNull.onclick = nullClick;

      
}

window.onload = init;