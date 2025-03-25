let a = parseInt(prompt("Nhập hệ số a:"));
let b = parseInt(prompt("Nhập hệ số b:"));
let c = parseInt(prompt("Nhập hệ số c:"));
let delta = b * b - 4 * a * c;
if (delta < 0){
    document.writeln("Phương trình không có nghiệm thực.");
}else if (delta === 0){
    let x = -b / (2 * a);
    document.writeln("Phương trình có nghiệm kép x = " + x);
}else{
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.writeln("Phương trình có hai nghiệm x1 = " + x1 + " và x2 = " + x2);
}