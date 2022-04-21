function init() {
    let value = 0
   

    const buttonPlus = document.querySelector(".js-plus");
    const buttonMinus = document.querySelector(".js-minus");
    const buttonNull = document.querySelector(".js-null");
    const valueEl = document.querySelector(".js-value");
    const diffEl = document.querySelector(".j-diff");

    const max = 20;
    const mid = 10;

    function setColor () {
        if (value < mid) {
            valueEl.style.color = "black";  
            } else if (value > mid && value < max){
                valueEl.style.color = "red";  
            } else {
                valueEl.style.color = "green";  
            }
    }
    
    function plusClick() {   
        value = value + Number(diffEl.value);
        valueEl.innerText = value;

        setColor();
    }

    function minusClick() {
        value = value - Number(diffEl.value);
        valueEl.innerText = value;

        setColor();
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