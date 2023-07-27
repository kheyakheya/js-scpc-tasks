function calculator(num1,num2,operator){
    switch(operator){
        case '+': 
        return num1 + num2;
        case '-': 
        return num1 - num2;
        case '*': 
        return num1 * num2;
        case '/': 
        if(num2 === 0){
            return 'cannot devide by zero'
        }
        return num1/num2;
        default: 
        return "wrong operator"
    }
}
console.log(calculator(2,3, '%'));