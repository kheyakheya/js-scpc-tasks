function sumPositive(arr){
    const positiveSum= arr.filter(num=> num>=0).reduce((pre,cur)=>pre + cur, 0);
    return positiveSum;
}
console.log(sumPositive([2,4,-1,-3,0,3]))