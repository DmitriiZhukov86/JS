function init() {
    let index = 1
   

    const buttonPlus = document.querySelector(".js-plus");
    const tabEl = document.querySelector(".js-tabs");
    
    function setColor(tab) {
        if (Number.isInteger(index/2)) {
            tab.style.backgroundColor = "red";
        } else {
            tab.style.backgroundColor = "green";
        }
    }

    function plusClick() {   
        const tab = document.createElement("button");
        tab.innerText = "Таб" + index;
        index = index + 1;
        tabEl.appendChild(tab);
        setColor(tab);
    }
    buttonPlus.onclick = plusClick;
}

window.onload = init;