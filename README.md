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
| Ana sayfa | `index.html` | 1. hafta |
| Giriş / Kayıt | `giris.html` | Planlandı |
| Ürün kataloğu | `katalog.html` | Planlandı |
| Talep oluştur | `talep.html` | Planlandı |
| Talepler | `talepler.html` | Planlandı |
| Ürün yönetimi | `urun-yonetimi.html` | Planlandı |

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
├── css/
│   └── style.css
└── assets/
    └── mta-arkaplansiz.png
```

## Not

Giriş sistemi eğitim amaçlı bir simülasyondur; kullanıcı bilgileri tarayıcıda tutulur ve gerçek bir güvenlik sağlamaz.
