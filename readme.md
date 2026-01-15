# Alışveriş Sitesi Projesi
Bu proje, temel özelliklere sahip bir e-ticaret sitesi örneğidir. Ürün listeleme, sepete ekleme-çıkarma, bildirim gösterme ve ürün verilerinin JSON dosyasından okunması gibi fonksiyonlar içerir.

## Projenin Amacı
Bu çalışmanın amacı, basit bir alışveriş sitesi arayüzü geliştirerek:
- JSON veri okuma,
- Dinamik ürün listeleme,
- Sepet yönetimi,
- LocalStorage kullanımı gibi temel web sitesi işlemlerini kullanmaktır.

## Özellikler
- **Ürün Listeleme:** Tüm ürünler `products.json` dosyasından okunarak dinamik olarak sayfaya eklenir.
- **Sepete Ekleme-Çıkarma:** Kullanıcı istediği ürünü sepete ekleyip çıkarabilir.
- **Sepet Durumu:** Sepetteki ürün sayısı canlı olarak güncellenir.
- **Bildirim Sistemi:** Toastr kütüphanesi ile işlem ile ilgili bilgi ya da uyarı verdirilir.
- **Filtreleme:** Ürünleri konusuna göre filtreler.
- **Arama:** Kullanıcı ürün adını girerek arama yapabilir.
- **Oturum Açma ve Kayıt Giriş:** Kullanıcı hesap açma formu ya da oturum açma formu doldurabilir.

## Kullanılan Teknolojiler
- HTML5, CSS3
- JavaScript
- Bootstrap 5
- Toastr.js (Bildirim sistemi)
- JSON veri dosyası (products.json)

## Dosya Yapısı
index.html            → Ana sayfa  
hakkimizda.html       → Hakkımızda sayfası
iletisim.html         → İletişim sayfası
kayit.html            → Kayıt giriş sayfası
oturumAçma.html       → Oturum açma sayfası
style.css             → Stil dosyası  
app.js                → Sepet işlemleri 
kayit.js              → Kayıt giriş sayfası form kontrol ve uyarı işlemi
oturum.js             → Oturum açma sayfası form kontrol ve uyarı işlemi
products.json         → Ürün verileri  
assets/               → Bootstrap, görüntüler ve Toastr dosyaları
Proje Raporu.pdf      → Projenin işlevleri raporu

## Projeyi Çalıştırma
1. Proje klasörünü indirin.
2. `index.html` dosyasını bir tarayıcıda açın.
3. Ürünler otomatik olarak products.json’dan yüklenecektir.
4. Sepete ürün ekleyebilir ve bildirimleri görebilirsiniz.