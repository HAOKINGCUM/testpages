
let users = {}; 

function showRegister() {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("registerForm").classList.remove("hidden");
}

function showLogin() {
    document.getElementById("registerForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
}

function showSuccess() {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("registerForm").classList.add("hidden");
    document.getElementById("successPage").classList.remove("hidden");
}

function register() {
    let user = document.getElementById("regUser").value.trim();
    let pass = document.getElementById("regPass").value;
    let confirm = document.getElementById("regConfirm").value;

    if (user === "" || pass === "" || confirm === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    if (pass !== confirm) {
        alert("❌ Mật khẩu xác nhận không chính xác, vui lòng thử lại!");
        return;
    }

    if (users[user]) {
        alert("❗ Tài khoản đã tồn tại!");
        return;
    }

    users[user] = pass;
    alert("✅ Đăng ký thành công! Hãy đăng nhập lại.");
    showLogin();
}
function login() {
    let user = document.getElementById("loginUser").value.trim();
    let pass = document.getElementById("loginPass").value;

    if (user === "" || pass === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    if (users[user] && users[user] === pass) {
        showSuccess();
    } else {
        alert("❌ Sai tên tài khoản hoặc mật khẩu!");
    }
}
