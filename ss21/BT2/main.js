let soChan = 0;
let soLe = 0;
for (let i = 1; i <= 5; i++){
    let n = parseInt(prompt("Nhập số thứ " + i));
    if(n % 2 == 0){
        soChan ++;
    } else {
        soLe ++;
    }
}
document.writeln("Tổng các số chẵn là: " + soChan);
document.writeln("Tổng các số lẻ là: " + soLe);