# MTA Atölye Malzeme Takip Sistemi

BLM2537 Ağ Tabanlı Programlamaya Giriş dersi dönem projesi (2026–2027 Güz).

Milli Teknoloji Atölyesi'ndeki malzemelerin listelendiği, öğrencilerin malzeme talebi oluşturduğu ve koordinatör ile atölye çalışanlarının talepleri onaylayıp teslim ettiği bir web sitesi.

- **Öğrenci:** Yiğit Özçelik
- **Öğrenci No:** 25290233
- **GitHub:** [yigitozc](https://github.com/yigitozc)
- **Haftalık videolar:** [Google Drive klasörü](https://drive.google.com/drive/folders/18txYx89BXjT1UG1RaxmbDtq1OxMAdGA3?usp=sharing)

## Teknolojiler

- HTML, CSS, JavaScript
- Veri saklama: tarayıcıda `localStorage`
- Sunucu, veritabanı veya harici API kullanılmaz.

## Sayfalar (site haritası)

| Sayfa | Dosya | Durum |
|---|---|---|
| Ana sayfa | `index.html` | HTML + CSS (1–2. hafta) |
| Giriş / Kayıt | `giris.html` | JavaScript ile form doğrulama, öğrenci/yönetici girişi ve kayıt (4. hafta) |
| Ürün kataloğu | `katalog.html` | JavaScript ile listeleme, arama, filtre, detay (3. hafta) |
| Talep oluştur | `talep.html` | HTML iskeleti (2. hafta) |
| Talepler | `talepler.html` | HTML iskeleti (2. hafta) |
| Ürün yönetimi | `urun-yonetimi.html` | HTML iskeleti (2. hafta) |

## Nasıl açılır?

1. Depoyu indir:
   ```bash
   git clone https://github.com/yigitozc/mta-atolye-takip.git
   ```
2. Klasörü **VS Code** ile aç.
3. **Live Server** eklentisini kur (Extensions → "Live Server").
4. `index.html` dosyasına sağ tıkla → **Open with Live Server**.
5. Site tarayıcıda `http://127.0.0.1:5500/index.html` adresinde açılır.

Kurulum gerektirmez; `index.html` dosyası doğrudan tarayıcıda da açılabilir.

## Klasör yapısı

```
mta-atolye-takip/
├── index.html
├── giris.html
├── katalog.html
├── talep.html
├── talepler.html
├── urun-yonetimi.html
├── css/
│   └── style.css
├── js/
│   ├── menu.js
│   ├── veri.js
│   ├── oturum.js
│   ├── giris.js
│   └── katalog.js
└── assets/
    └── mta-arkaplansiz.png
```

## Deneme hesapları

- **Öğrenci:** Giriş sayfasındaki kayıt formuyla hesap oluşturulur (8 haneli öğrenci numarası).
- **Yönetici:** Kullanıcı adı `koordinator`, şifre `atolye2026`. Bu, sitenin denenebilmesi için herkese açık bir deneme hesabıdır; gerçek bir şifre değildir.

## Not

Giriş sistemi eğitim amaçlı bir simülasyondur. Kullanıcı bilgileri ve oturum tarayıcının localStorage alanında tutulur; şifreler şifrelenmez ve gerçek bir güvenlik sağlanmaz. Menüdeki sayfaların gizlenmesi yalnız görünümle ilgilidir.
