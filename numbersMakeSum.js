function numbersMakeSum(sortedArr, target){
    let leftIndex= 0;
    let rightIndex= sortedArr.length - 1;
    // while ensures if left is bigger then right then loop ends because then left right overlaps
    while(leftIndex<rightIndex){
        if(target === sortedArr[leftIndex] + sortedArr[rightIndex]){
            return [leftIndex, rightIndex]
        }
        else if(target >  sortedArr[leftIndex] + sortedArr[rightIndex]){
            // moving left will give bigger sum as the array is sorted
            leftIndex++;
        }
        else{
            // moving right will give smaller sum 
            rightIndex--;
        }
    }
    
    return "no two number matched"; 
    // if no two number is found

}
console.log(numbersMakeSum([1, 3, 6, 8, 11, 15], 100))