function check_sign() {
    const uyari = document.getElementById("uyari");
    if (!uyari) return false;
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    uyari.style.color = "green";
    uyari.textContent = "Oturum açma başarılı";
    return false; 
}