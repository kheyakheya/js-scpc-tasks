function secondMinimum(arr){
    if(arr.length<2){
        return 'array must have atleast two elements'
    }
    arr.sort((a,b)=>a-b);
    return arr[1];
     
}
console.log(secondMinimum([5,6,6,3,8,4]))