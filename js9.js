function init() {
 
    let a = prompt("Введите a");
    let b = prompt("Введите b");
    let operation = prompt("Введите тип операции");

    let calc = (a,b,operation) => {
        switch (operation){
            case "plus" : return a+b; break;
            case "minus" : return a-b; break; 
            case "" : return a*b; break;
            case "" : return a/b; break;
        }  
    }
    
   alert(calc());
    
    
    
   // let word = prompt ("Введите слово");

     //let num = () => { 
       //  let result = "";
        //for (i=word.length-1; i>=0; i--) {
           // result = result + word[i];
         // }
         // return result;
     // }
     
    // alert(num());
     
    
     //function ask(question, yes, no) {
    //    if (confirm(question)) yes()
    //    else no();
     // }
      
    //let ask(question, yes, no) => {
      //      if (confirm(question)) yes()
        //    else no();
        //  }


     // ask("Вы согласны?", 
     // () =>  alert("Вы согласны."),
     // () => alert("Вы отменили выполнение."))

    
} 

window.onload = init;