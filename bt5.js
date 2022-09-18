let test = +(prompt('Nhập điểm bải kiểm tra'));
let midTest = +(prompt('Nhập điểm bải kiểm tra giữa kỳ'));
let lastTest = +(prompt('Nhập điểm bải kiểm tra cuối kỳ'));
if (test > 8 && midTest > 8 && lastTest > 8) {
    alert('Xếp loại học sinh giỏi');
} else if (test > 6.5 && midTest > 6.5 && lastTest > 6.5) {
    alert('Xếp loại học sinh khá');
} else {
    alert('Xếp loại học sinh trung bình');
}