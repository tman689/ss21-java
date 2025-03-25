let sum = 0;
for (let i = 1; i <= 5; i++){
    let n = parseInt(prompt("Nhập số thứ " + i));
    if(n % 2 != 0){
        sum += n;
    }
}
document.writeln("Tổng các số lẻ là: " + sum);