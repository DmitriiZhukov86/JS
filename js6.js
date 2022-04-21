function init() {

    
    let blocks = document.querySelector(".js-blocks");
    let numBlock = prompt ("Введите количество блоков");


    function setColor(block) {
        if (Number.isInteger(blocks/2)) {
            block.style.backgroundColor = "red";
        } else {
            block.style.backgroundColor = "none";
        }
    }

    function blocks() {
        
    const block = document.createElement("button");
    block.innerText = "Блок" + index;

    setColor(blocks);
    }
    

  

    

} 
window.onload = init;