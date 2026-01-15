function check_log() {
    const uyari = document.getElementById("uyari");
    if (!uyari) return false;
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const username = document.getElementById("username").value.trim();

    uyari.style.color = "green";
    uyari.textContent = "Kayıt işlemi başarılı, telefonunuza gelen şifreyle oturum açabilirsiniz.";
    return false;
}