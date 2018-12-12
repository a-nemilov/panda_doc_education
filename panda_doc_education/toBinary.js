const toBinary = (num) => {
    let arr = [];
    while (i >= 0) {
        arr.push(i % 2);
        num = parseInt(i / 2);
    }
    return parseInt(arr.reverse().join(""));
}

console.log(toBinary(7))
console.log(toBinary(100))

// second --------------------------------
// const toBinary = (num) =>{
//     let temp =[];
//     for(let i = num; i >= 0;i = parseInt(i/2)){
//       temp.push(i % 2);
//     }
//     return parseInt(temp.reverse().join(""));
//   }
//   console.log(toBinary(7))

// third ----------------------------

// const foo = (num) => {
//     let temp = [];
//   const toBinary = (i) => {
//       if(i!==0){
//         if(i % 2 === 1){
//           temp.unshift(1);
//           return toBinary((i/2).toFixed(0)-1);
//       }else if(i % 2 === 0){
//           temp.unshift(0);
//           return toBinary(i/2);
//         }
//       }
//       if(i === 0){
//         temp.unshift(0);
//       }
//     }
//   toBinary(num);
//   return parseInt(temp.join(''));
//   }

//   console.log(foo(7));
//   console.log(foo(100));
//   console.log(foo(0));
