function init() {
 
    let question = prompt ("Какое официальное название JavaScript?")
    
       if (question === "ECMASCRIPT") {
        alert("Верно")
    } else {
        alert("Не знаете? ECMAScript!")
    }   

}

window.onload = init;