# Alışveriş Sitesi Projesi
Bu proje, temel özelliklere sahip bir e-ticaret sitesi örneğidir. Ürün listeleme, sepete ekleme-çıkarma, bildirim gösterme ve ürün verilerinin JSON dosyasından okunması gibi fonksiyonlar içerir.

## Projenin Amacı
Bu çalışmanın amacı, basit bir alışveriş sitesi arayüzü geliştirerek:
- JSON veri okuma,
- Dinamik ürün listeleme,
- Sepet yönetimi,
- LocalStorage kullanımı,
- Bootstrap ve jQuery entegrasyonu gibi temel web programlama becerilerini uygulamaktır.

## Özellikler
- **Ürün Listeleme:** Tüm ürünler `products.json` dosyasından okunarak dinamik olarak sayfaya eklenir.
- **Sepete Ekleme-Çıkarma:** Kullanıcı istediği ürünü sepete ekleyip çıkarabilir.
- **Sepet Durumu:** Sepetteki ürün sayısı canlı olarak güncellenir.
- **Bildirim Sistemi:** Toastr kütüphanesi ile işlem ile ilgili bilgi ya da uyarı verdirilir.
- **Responsive Tasarım:** Bootstrap kullanılarak mobil uyumlu bir arayüz sağlanmıştır.

## Kullanılan Teknolojiler
- HTML5, CSS3
- JavaScript
- Bootstrap 5
- Toastr.js (Bildirim sistemi)
- JSON veri dosyası (products.json)

## Dosya Yapısı
.
index.html            → Ana sayfa  
style.css             → Stil dosyası  
app.js                → Sepet işlemleri  
products.json         → Ürün verileri  
assets/               → Bootstrap, görüntüler ve Toastr dosyaları

## Projeyi Çalıştırma
1. Proje klasörünü indirin.
2. `index.html` dosyasını bir tarayıcıda açın.
3. Ürünler otomatik olarak products.json’dan yüklenecektir.
4. Sepete ürün ekleyebilir ve bildirimleri görebilirsiniz.