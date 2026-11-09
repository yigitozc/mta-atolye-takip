const aramaFormu = document.querySelector("form[role='search']");
const aramaKutusu = document.querySelector("#arama");
const kategoriSecimi = document.querySelector("#kategori");
const sonucSayisi = document.querySelector("#sonuc-sayisi");
const urunListesi = document.querySelector("#urun-listesi");
const bosMesaj = document.querySelector("#bos-mesaj");
const detayPenceresi = document.querySelector("#urun-detay");

const urunler = urunleriGetir();

function detayiGoster(urun) {
  document.querySelector("#detay-ad").textContent = urun.ad;
  document.querySelector("#detay-kod").textContent = urun.kod;
  document.querySelector("#detay-kategori").textContent = urun.kategori;
  document.querySelector("#detay-stok").textContent = urun.stok + " adet";
  document.querySelector("#detay-aciklama").textContent = urun.aciklama;
  detayPenceresi.showModal();
}

function yaziOlustur(etiket, yazi, sinif) {
  const oge = document.createElement(etiket);
  oge.textContent = yazi;
  if (sinif) {
    oge.className = sinif;
  }
  return oge;
}

function kartOlustur(urun) {
  const kart = document.createElement("article");
  kart.className = "card";

  kart.appendChild(yaziOlustur("p", urun.kategori, "eyebrow"));
  kart.appendChild(yaziOlustur("h3", urun.ad));
  kart.appendChild(yaziOlustur("p", "Kod: " + urun.kod));

  if (urun.stok > 0) {
    kart.appendChild(yaziOlustur("p", "Stok: " + urun.stok + " adet"));
  } else {
    kart.appendChild(yaziOlustur("p", "Stokta yok", "stok-yok"));
  }

  const detayDugmesi = yaziOlustur("button", "Ürünü görüntüle");
  detayDugmesi.type = "button";
  detayDugmesi.addEventListener("click", function () {
    detayiGoster(urun);
  });
  kart.appendChild(detayDugmesi);

  return kart;
}

function kucukHarf(yazi) {
  return yazi.toLocaleLowerCase("tr");
}

function urunleriListele() {
  const aranan = kucukHarf(aramaKutusu.value.trim());
  const kategori = kategoriSecimi.value;

  const sonuclar = urunler.filter(function (urun) {
    const yaziUyuyor = kucukHarf(urun.ad).includes(aranan) || kucukHarf(urun.kod).includes(aranan);
    const kategoriUyuyor = kategori === "" || urun.kategori === kategori;
    return yaziUyuyor && kategoriUyuyor;
  });

  urunListesi.innerHTML = "";
  sonuclar.forEach(function (urun) {
    urunListesi.appendChild(kartOlustur(urun));
  });

  sonucSayisi.textContent = sonuclar.length + " ürün listeleniyor";
  bosMesaj.hidden = sonuclar.length > 0;
}

aramaKutusu.addEventListener("input", urunleriListele);
kategoriSecimi.addEventListener("change", urunleriListele);
aramaFormu.addEventListener("submit", function (olay) {
  olay.preventDefault();
});

urunleriListele();
