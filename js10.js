function init() {
 

    function intersection(obj1, obj2) {
        result = {}
    for (let property in obj1){
        if (obj2[property]){
            result[property] = obj2[property]
        }
    }
    return result
    };

        const data = {a: 1, b: 2};
        const data2 = {c: 1, b: 2};
        console.log(intersection(data, data2))

//let salaries = {
  //      John: 100,
    //    Ann: 160,
      //  Pete: 130
   // };

    //function multiplyNumeric(obj) {
    //    for (let key in obj) {
    //        obj[key] = obj[key] * 2;
    //    }
     //   return obj;
   // };

    

    //console.log(multiplyNumeric(salaries));


   // let salaries = {
     //   John: 100,
      //  Ann: 160,
       // Pete: 130
    //}
 
    //let sum = 0;
    //for (let key in salaries) {
    //sum += salaries[key]
    //}
   
    //alert(sum);

 
 //   let schedule = {};

   // function isEmpty(schedule) {
   // for (let a in schedule)  {
    //    return false;
   // }
   //     return true;
    //};

//console.log(isEmpty(schedule))





  //  let fruit = prompt("Какой фрукт купить?", "apple");

   // let user = {};
   // user.name = "John";
    //user.surname = "Smith";
    //user.name = "Pete";
    //delete user.name;
    
  //alert(user.name);
    
    
} 

window.onload = init;