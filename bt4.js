let number1 = parseInt(prompt('Nhập số nguyên thứ 1'));
let number2 = parseInt(prompt('Nhập số nguyên thứ 2'));
let number3 = parseInt(prompt('Nhập số nguyên thứ 3'));

if (number1 > number2 && number1 > number3) {
    alert(number1 + ' lá số lớn nhất');
} else if (number1 < number2 || number2 < number3) {
    if (number2 > number3) {
        alert(number2 + ' là sô lớn nhất');
    } else {
        alert(number3 + ' là số lớn nhắt');
    }
}
