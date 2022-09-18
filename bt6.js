let saleVolume = parseInt(prompt('Nhập số lượng sản phẩm bán được: '));
if (saleVolume > 50) {
    alert('Tiền hoa hồng là 5%/1 sản phẩm');
} else if (saleVolume > 30) {
    alert('Tiền hoa hồng là 3%/1 sản phẩm');
} else if (saleVolume > 20) {
    alert('Tiền hoa hồng là 2%/1 sản phẩm');
} else {
    alert('Khồng đạt doanh số để có tiền hoa hồng');
}