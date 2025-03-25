let n = parseFloat(prompt("Nhập % hàng tháng:")); 
let money = parseFloat(prompt("Nhập số tiền:"));  
let month = parseInt(prompt("Nhập số tháng:"));
let total = money * Math.pow((1 + n / 100), month);
let interest = total - money;
console.log("Tiền lãi = " + interest.toFixed(3));
console.log("Tổng số tiền nhận được = " + total.toFixed(3));
