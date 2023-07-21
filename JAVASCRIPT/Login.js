function Login() {
    // Lấy giá trị của ô địa chỉ Email/số điện thoại và mật khẩu
    var emailPhone = document.querySelector('input[type="text"]').value;
    var password = document.querySelector('input[type="password"]').value;

    if (emailPhone === "abc@gmail.com" && password === "1234") {
        alert("Đăng nhập thành công!");
    } else {
        alert("Sai địa chỉ Email/số điện thoại hoặc mật khẩu!");
    }


document.getElementById('forget_password_link').addEventListener('click', function() {
    alert('Đã gửi mã PIN về SĐT/Email');
});




// Xử lý sự kiện khi click vào "Đăng nhập bằng số điện thoại"
document.querySelector('.box_forget_password span:last-child').addEventListener('click', function() {
    // Xử lý logic khi click vào "Đăng nhập bằng số điện thoại" ở đây
    alert("Đăng nhập bằng số điện thoại");
});

// Xử lý sự kiện khi click vào "Đăng nhập bằng Facebook"
document.querySelector('.box_login_facebook').addEventListener('click', function() {
    // Xử lý logic khi click vào "Đăng nhập bằng Facebook" ở đây
    alert("Đăng nhập bằng Facebook");
});

// Xử lý sự kiện khi click vào "Đăng nhập bằng Google"
document.querySelector('.box_login_google').addEventListener('click', function() {
    // Xử lý logic khi click vào "Đăng nhập bằng Google" ở đây
    alert("Đăng nhập bằng Google");
});
}