function init() {

    let x = prompt ("Задайте x");
    let n = prompt ("Задайте n");
   
//    function pow(x,n) { 
 //       return x**n;
 //   }

 function pow(x,n) {
     let result = x;
    for (let i = 1; i < n; i++) {
     result = x*result;        
   }
    return result;
 }

    alert (pow(x,n));

} 

window.onload = init;