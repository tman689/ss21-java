let number = parseInt(prompt("Nhập một số nguyên bất kỳ:"));
document.writeln("Các ước của số " + num + " là: ");
for (let i = 1; i <= number; i++){
    if (number % i == 0){
        document.writeln(i);
    }
}