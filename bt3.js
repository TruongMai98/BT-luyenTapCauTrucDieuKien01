let integer = parseInt(prompt('Nhập 1 số nguyên: '));
if (integer > 0) {
    document.write(integer + ' Là số nguyên lớn hơn 0');
} else if (integer < 0) {
    document.write(integer + ' Là số nguyên nhỏ hơn 0');
} else if (integer == 0) {
    alert('Nhập sô nguyên lớn hon 0 hoặc nhỏ hơn 0');
}
