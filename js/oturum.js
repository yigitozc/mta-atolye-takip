const KULLANICI_ANAHTARI = "kullanicilar";
const OTURUM_ANAHTARI = "oturum";

const YONETICILER = [
  { kullaniciAdi: "koordinator", sifre: "atolye2026", adSoyad: "Atölye Koordinatörü" },
];

function kullanicilariGetir() {
  const kayit = localStorage.getItem(KULLANICI_ANAHTARI);
  if (kayit === null) {
    return [];
  }
  return JSON.parse(kayit);
}

function kullanicilariKaydet(kullanicilar) {
  localStorage.setItem(KULLANICI_ANAHTARI, JSON.stringify(kullanicilar));
}

function oturumuGetir() {
  const kayit = localStorage.getItem(OTURUM_ANAHTARI);
  if (kayit === null) {
    return null;
  }
  return JSON.parse(kayit);
}

function oturumAc(ad, rol) {
  localStorage.setItem(OTURUM_ANAHTARI, JSON.stringify({ ad: ad, rol: rol }));
}

function oturumuKapat() {
  localStorage.removeItem(OTURUM_ANAHTARI);
}

function menuyuGuncelle() {
  const oturum = oturumuGetir();
  const girisBaglantisi = document.querySelector("#giris-baglantisi");

  document.querySelectorAll(".sadece-giris").forEach(function (oge) {
    oge.hidden = oturum === null;
  });

  document.querySelectorAll(".sadece-yonetici").forEach(function (oge) {
    oge.hidden = oturum === null || oturum.rol !== "yonetici";
  });

  if (oturum !== null) {
    girisBaglantisi.textContent = "Çıkış yap (" + oturum.ad + ")";
    girisBaglantisi.addEventListener("click", function (olay) {
      olay.preventDefault();
      oturumuKapat();
      window.location.href = "index.html";
    });
  }
}

menuyuGuncelle();
