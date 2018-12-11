
const toBinary = (num) => {
    let arr = [];
    while (num >= 0) {
        arr.push(num % 2);
        num = parseInt(num / 2);
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
