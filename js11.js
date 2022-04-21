function init() {
 

    function getMaxSubSum(arr) {

        let maxSum = 0;
        let partSum = 0;
        for (let key of arr) {
           partSum += key;
            maxSum = Math.max(maxSum, partSum);
            if (partSum < 0) partSum = 0;
        }
        return maxSum;
    }

    alert(getMaxSubSum([-1,2,3,-9]));
    

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