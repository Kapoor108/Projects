

function generateOTP(limit){
    var digits = '0123456789'
    let otp =''
    for(let i=0;i<limit;i++){
        otp = otp+digits[Math.floor(Math.random()*10)]
    }

    return otp;
}

console.log("Your OTP Is here",generateOTP(4))
console.log("don't share your otp")
console.log("with anyone")