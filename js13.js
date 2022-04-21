function init() {
 
 
 
    //   function getAverageAge(users) {
 //   return users.reduce((sum, user) => sum + user.age, 0) / users.length;
 //   }

//let vasya = { name: "Вася", age: 25 };
//let petya = { name: "Петя", age: 30 };
//let masha = { name: "Маша", age: 29 };

//let arr = [ vasya, petya, masha ];

//alert( getAverageAge(arr) );



  //  function shuffle(arr) {
  //      return arr.sort(() => Math.random() - 0.5);
  //  }
  // let arr = [19, 2, 46, 78];
  //  alert(shuffle(arr));
    

//    function sortByAge(arr) {
//    return arr.sort((a,b) => a.age - b.age);
//}

//let vasya = { name: "Вася", age: 25 };
//let petya = { name: "Петя", age: 30 };
//let masha = { name: "Маша", age: 28 };

//let arr = [ vasya, petya, masha ];

//sortByAge(arr);

//alert(arr[0].name); 
//alert(arr[1].name); 
//alert(arr[2].name); 




//let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
//let petya = { name: "Петя", surname: "Иванов", id: 2 };
//let masha = { name: "Маша", surname: "Петрова", id: 3 };

//let users = [ vasya, petya, masha ];

//let usersMapped = users.map(item => ({
//    id: item.id, 
//    fullName: item.name + item.surname
//}));


//alert( usersMapped[2].id )
//alert( usersMapped[2].fullName ) 
  
  
    //  let vasya = { name: "Вася", age: 25 };
  //  let petya = { name: "Петя", age: 30 };
  //  let masha = { name: "Маша", age: 28 };
    
  //  let users = [ vasya, petya, masha ];
    
  //  let names = users.map(item => item.name);
    
   // alert( names );
    




 // function copySorted(arr) {
      
 //     return arr.concat().sort();
//  }
 //       let arr = [2,4,8,8,6];
 //       let sorted = copySorted(arr);

 ///    alert(arr);
 //    alert(sorted);

   

  //  function camelize(str) {
       
  //  return arr.split('-')
  //            .map
  //            .join('')
   // }

    
    //function unique(arr) {
    //  let result = [];
    //    for(let key of arr) {
    //       if (!result.includes(key))
     //      result.push(key); 
      //  }
     //   return result;
     // }
      
     // let strings = ["кришна", "кришна", "харе", "харе",
     ///   "харе", "харе", "кришна", "кришна", ":-O"
     // ];
      
     // alert(unique(strings));


//    function filterRange(arr,a,b) {
//        return arr.filter(item => (a<=item && item<=b));
//    }

//    let arr = [5, 3, 8, 1];
//    let newArr = filterRange(arr, 1, 4)

    
//   alert(newArr);
//     alert(arr);



 //   function getMaxSubSum(arr) {

 //       let maxSum = 0;
 //       let partSum = 0;
 //       for (let key of arr) {
 //          partSum += key;
 //           maxSum = Math.max(maxSum, partSum);
 //           if (partSum < 0) partSum = 0;
//        }
 //       return maxSum;
 ///   }

//    alert(getMaxSubSum([-1,2,3,-9]));
    

  // function sumInput () {
       
  //     let array = [];
  //    let num = "";
   //     do {
  //         num = prompt("Введите элемент массива");
  //         array.push(+num);
  //     } while (num !== null && num !== "" && !isFinite(num));
        
   //   let sum = 0;
   //    for (let key of array) {
   //         sum += key;
    //  }

    //    return sum;
  // }

  // alert(sumInput());

    
  //  let styles = [ 'Джаз', 'Блюз' ];
   // alert(styles);

   // styles.push("Рок-н-Ролл");
   // alert(styles);

    //styles[Math.floor(styles.length / 2)] = "Классика";
   // alert(styles);

   // alert(styles.shift());

   // styles.unshift("Рэп", "Регги");
   // alert(styles);

   // alert( arr[1].name );
  //  arr[3](); 
} 

window.onload = init;