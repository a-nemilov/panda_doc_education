
let temp = [];
const toBinary = (i) => {
    if(i!==0){
      if(i % 2 === 1){
        temp.unshift(1);
        return toBinary((i/2).toFixed(0)-1);
    }else if(i % 2 === 0){
        temp.unshift(0);
        return toBinary(i/2);
      }
    }
    if(i===0){
      temp.unshift(0);
    }
return parseInt(temp.join(''));
  }
console.log(toBinary(100));
console.log(toBinary(7));