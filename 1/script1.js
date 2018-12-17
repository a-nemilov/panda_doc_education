const arr1 = [1, 3, 5, 6, 7, 7, 8, 8];
let k = 0;
let count = 0;
while(k < arr1.length) {
	count += arr1[k];
	k++;
}
console.log("script1",count);