const URUN_ANAHTARI = "urunler";

const ORNEK_URUNLER = [
  { kod: "EL-001", ad: "Arduino Uno", kategori: "Elektronik", stok: 12, aciklama: "Prototip ve temel kontrol deneyleri için geliştirme kartı." },
  { kod: "EL-002", ad: "Sensör seti", kategori: "Elektronik", stok: 5, aciklama: "Sıcaklık, mesafe ve ışık sensörlerinden oluşan başlangıç seti." },
  { kod: "RO-002", ad: "Servo motor", kategori: "Robotik", stok: 8, aciklama: "Robot kol ve hareketli projeler için küçük servo motor." },
  { kod: "RO-003", ad: "Robot şasi kiti", kategori: "Robotik", stok: 2, aciklama: "İki tekerlekli gezgin robot yapmak için gövde kiti." },
  { kod: "OL-001", ad: "Dijital multimetre", kategori: "Ölçüm", stok: 3, aciklama: "Gerilim, akım ve direnç ölçümü için el tipi cihaz." },
  { kod: "OL-002", ad: "Kumpas", kategori: "Ölçüm", stok: 4, aciklama: "Parça boyutlarını hassas ölçmek için." },
  { kod: "EA-001", ad: "Hassas tornavida seti", kategori: "El aletleri", stok: 0, aciklama: "Küçük parçaların sökülüp takılması için." },
  { kod: "EA-002", ad: "Lehim istasyonu", kategori: "El aletleri", stok: 6, aciklama: "Elektronik devre lehimleme işleri için ayarlı istasyon." },
];

function urunleriKaydet(urunler) {
  localStorage.setItem(URUN_ANAHTARI, JSON.stringify(urunler));
}

function urunleriGetir() {
  const kayit = localStorage.getItem(URUN_ANAHTARI);

  if (kayit === null) {
    urunleriKaydet(ORNEK_URUNLER);
    return ORNEK_URUNLER;
  }

  return JSON.parse(kayit);
}
