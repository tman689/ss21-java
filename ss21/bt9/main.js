let number = parseInt(prompt("Nhập một số nguyên bất kỳ:"));  
let isPrime = true;  
if (number <= 1){
    isPrime = false;
}else{
    for (let i = 2; i <= Math.sqrt(number); i++){
        if (number % i === 0){
            isPrime = false;
            break;
        }
    }
}
if (isPrime){
    document.writeln(number + " là số nguyên tố.");
}else{
    document.writeln(number + " không phải là số nguyên tố.");
}