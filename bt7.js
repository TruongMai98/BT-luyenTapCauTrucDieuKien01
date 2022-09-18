let time = +prompt('Nhập thời gian đã gọi(Tính theo phút): ');
let cost = +prompt('Nhập gia cước/1 phút');
if (time > 0 && cost > 0) {
    let price = (cost / 60) * (time / 60);
    alert(price + ' VND');
} else {
    alert('Thời gian và giá cước phải lớn hơn 0');
}