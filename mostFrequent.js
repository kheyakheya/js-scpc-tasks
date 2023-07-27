function mostFrequent(arr) {
    const frequencyObject={};
    let maxElement=null;
    let maxFrequency=0;
    for(i=0; i<arr.length; i++){
      const element= arr[i];
    //   checking if frequency map has a property named arr[i]
      if(frequencyObject[element]){
        // if already element exists then increase its value
        frequencyObject[element]++;
      }
      else{
        frequencyObject[element]=1;
      }
      if(frequencyObject[element]>maxFrequency){
        maxElement=element;
        maxFrequency=frequencyObject[element]
        }
    }
    return maxElement;
   
    }

  
  
  
    const arr=[4,4,5,6,7,8,3,6,3];
    console.log(mostFrequent(arr));