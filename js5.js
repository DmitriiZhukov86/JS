function init() {
 
    
    const login = document.querySelector(".js-login");
    const password = document.querySelector(".js-password");
   
    function checkLogin () {

       if (login === "Админ") {
        
        function checkPassword () {
       co
        if (password === "Я главный") {
        alert ("Здравствуйте");
        }
        else if (password == null) {
            alert ("Отменено");
        }
        else {
                alert ("Неверный пароль")
            }
        }
       }
        
       
       else if (login === null) {
        alert("Отменено");
     }   else {
        alert("Я Вас не знаю");
     }

    }



}

window.onload = init;