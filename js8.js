function init() {

    let word = prompt ("Введите слово");
 
 function checkWord {
    for (let i=0, j=word.length; i<word.length, j>0; i++, j--) {
        if (i=j) {
            alert("Слово является палиндромом");
        }
        else {
            alert("Слово не является палиндромом");
        }
    }  
}

 alert (checkWord);

} 

window.onload = init;