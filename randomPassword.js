function randomPassword(length){
    let password='';
    const upperCase= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase= 'abcdefghijklmnopqrstuvwxyz';
    const number= '0123456789';
    const special= '!@#$%^&*()-_=+[]{}|;:,.<>?';
    const characters= upperCase + lowerCase + number + special;
    password += upperCase.charAt(Math.floor(Math.random()*upperCase.length))
    if(length>1){
        password += lowerCase.charAt(Math.floor(Math.random()*lowerCase.length)) 
        }
     if(length>2){
            password += number.charAt(Math.floor(Math.random()*number.length)) 
            }
    if(length>3){
                password += special.charAt(Math.floor(Math.random()*special.length)) 

            }
    if(length>password.length){
        const remainingLength=  length-password.length;
        for (let i=0; i<remainingLength; i++){
            let randomIndex= Math.floor(Math.random()*characters.length);
             password += characters.charAt(randomIndex);
         
        }
        return password;
    }
    else{
        return password;
    }
        // loop iterates up to remaining pass length

    
    
}
console.log(randomPassword(5));