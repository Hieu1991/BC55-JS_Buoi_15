

function tinhDiem() {
    var diemChuan = document.getElementById('diemChuan').value * 1;
    var diemMon1 = document.getElementById('diemMon1').value * 1;
    var diemMon2 = document.getElementById('diemMon2').value * 1;
    var diemMon3 = document.getElementById('diemMon3').value * 1;

    var khuVuc = document.getElementById('khuVuc').value * 1;


    var doiTuong = document.getElementById('doiTuong').value * 1;


    var tongDiem = khuVuc + doiTuong + diemMon1 + diemMon2 + diemMon3;

    if (tongDiem >= diemChuan) {
        var tagSpan = "👉" + "<span>" + "Bạn đã đậu. Tổng điểm: " + tongDiem + "</span>";

        var tinhDiem = document.getElementById("tinhDiem");
        tinhDiem.innerHTML = tagSpan;
    }
    if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
        var tagSpan = "👉" + "<span>" + "Bạn đã rớt. Tổng điểm: " + tongDiem + "</span>";

        var tinhDiem = document.getElementById("tinhDiem");
        tinhDiem.innerHTML = tagSpan;
    }
}


// bài 2
const soKw_50 = 500;
const soKw_100 = 650;
const soKw_200 = 850;
const soKw_350 = 1100;
const conLai = 1300;

function tinhDien() {
  var hoVaTen = document.getElementById("hoVaTen").value;

  var soKw = document.getElementById("soKw").value * 1;

  var tongTienDien = 0;

  if (0 < soKw && soKw <= 50) {
    tongTienDien = soKw * soKw_50;
  } else if (50 < soKw && soKw <= 100) {
    tongTienDien = 50 * soKw_50 + soKw_100 * (soKw - 50);
  } else if (100 < soKw && soKw <= 200) {
    tongTienDien = 50 * soKw_50 + 50 * soKw_100 + soKw_200 * (soKw - 100);
  } else if (200 < soKw && soKw <= 350) {
    tongTienDien =
      50 * soKw_50 + 50 * soKw_100 + soKw_200 * 100 + soKw_350 * (soKw - 200);
  } else if (soKw > 350) {
    tongTienDien =
      50 * soKw_50 +
      50 * soKw_100 +
      100 * soKw_200 +
      150 * soKw_350 +
      conLai * (soKw - 350);
  }

  var tagSpan ="👉" + "<span>" + "Họ tên: " + hoVaTen + "; Tiền điện:" + tongTienDien + "</span>";

  var tienDien = document.getElementById("tienDien");
  tienDien.innerHTML = tagSpan;
}

// bài 3

function tinhThueThuNhapCaNhan() {
    var hoTen = document.getElementById('hoTen').value;
    var tongThuNhapNam = document.getElementById('tongThuNhapNam').value * 1;
    var soNguoiPhuThuoc = document.getElementById('soNguoiPhuThuoc').value * 1;

    var thuNhapChiuThue = tongThuNhapNam - 4e+6 - soNguoiPhuThuoc * 1.6e+6;
    

    var thueThuNhapCaNhan = 0;
    
    if (thuNhapChiuThue == 60e+6) {
        thueThuNhapCaNhan = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue > 60e+6 && thuNhapChiuThue <= 120e+6) {
        thueThuNhapCaNhan = thuNhapChiuThue * 0.1;
    } else if (thuNhapChiuThue > 120e+6 && thuNhapChiuThue <= 210e+6) {
        thueThuNhapCaNhan = thuNhapChiuThue * 0.15;
    } else if (thuNhapChiuThue > 210e+6 && thuNhapChiuThue <= 384e+6) {
        thueThuNhapCaNhan = thuNhapChiuThue * 0.2;
    } else if (thuNhapChiuThue > 384e+6 && thuNhapChiuThue <= 624e+6) {
        thueThuNhapCaNhan = thuNhapChiuThue * 0.25;
    } else if (thuNhapChiuThue > 624e+6 && thuNhapChiuThue <= 960e+6) {
        thueThuNhapCaNhan = thuNhapChiuThue * 0.3;
    } else if (thuNhapChiuThue > 960) {
        thueThuNhapCaNhan = thuNhapChiuThue * 0.35;
    } 
    
    var tagSpan = "👉" + "<span>" + "Họ tên: " + hoTen + "; Tiền thuế thu nhập cá nhân: " + thueThuNhapCaNhan.toLocaleString() + " VND" + "</span>";
    
    var tongTien = document.getElementById('tongTien');
    tongTien.innerHTML = tagSpan;
}

// bài 4
const phiXuLyDan = 4.5;
const phiDichVuDan = 20.5;
const phicaoCapDan = 7.5;
const phiXuLyDN = 15;
const phicaoCapDN = 50;


function tinhTienCap() {
  var maKhachHang = document.getElementById('maKhachHang').value;
  var soKenhCaoCap = document.getElementById('soKenhCaoCap').value * 1;
  var chonLoaiKhachHang = document.getElementById('chonLoaiKhachHang').value;
  var soketNoi = document.getElementById('soketNoi').value * 1;
  // soKetNoi là đầu vô sẽ cho giá trị tương ứng với soKN, miễn là soketNoiDN(....) truyền đúng tên
  var soketNoiDN = soketNoiDN(soketNoi);
  var tongTienCap = 0;
  
  if (chonLoaiKhachHang === "nhaDan") {
    tongTienCap = phiXuLyDan + phiDichVuDan + phicaoCapDan * soKenhCaoCap;
    console.log(tongTienCap);
  } 
  else if (chonLoaiKhachHang === "doanhNghiep") {
    tongTienCap = phiXuLyDan + soketNoiDN + phicaoCapDan * soKenhCaoCap;
  }

  var tagSpan = "👉" + "<span>" + "Mã khách hàng: " + maKhachHang + "; Tiền cáp: $" + tongTienCap.toLocaleString() + "</span>";
  console.log(tagSpan);
    
  var kqtongTienCap = document.getElementById('kqtongTienCap');
  kqtongTienCap.innerHTML = tagSpan;
}

function soketNoiDN(soKN) {
 
  var soketNoiDN1 = 0;

  if (soKN <= 10) {
    soketNoiDN1 = 75;
  } else if (soKN > 10) {
    soketNoiDN1 = 75 + 5 * (soKN - 10)  
  }
  return soketNoiDN1;
}

function myClick() {
  var chonLoaiKhachHang = document.getElementById('chonLoaiKhachHang').value;
  var ketNoi = document.getElementById('ketNoi');

 if (chonLoaiKhachHang == "doanhNghiep") {
  ketNoi.style.display = 'block';
 } else if (chonLoaiKhachHang == "nhaDan") {
  ketNoi.style.display = 'none';
 } else {
  alert('vui long chon loai khach hang!');
 }
}

