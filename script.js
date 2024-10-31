document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const loginId = document.getElementById("loginId").value;
    const password = document.getElementById("password").value;

    if (loginId === "admin" && password === "password") {
        alert("Login successful!");
    } else {
        alert("Invalid login credentials.");
    }
});

document.getElementById("signup").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Sign up functionality is currently unavailable.");
});

document.getElementById("forgotPassword").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Password reset instructions sent to your email!");
});
