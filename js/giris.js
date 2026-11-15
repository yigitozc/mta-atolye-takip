const ogrenciFormu = document.querySelector("#ogrenci-formu");
const yoneticiFormu = document.querySelector("#yonetici-formu");
const kayitFormu = document.querySelector("#kayit-formu");
const girisDurumu = document.querySelector("#giris-durumu");

const OGRENCI_NO_KALIBI = /^\d{8}$/;
const EPOSTA_KALIBI = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function hataYaz(kutu, mesaj) {
  kutu.nextElementSibling.textContent = mesaj;

  if (mesaj === "") {
    kutu.removeAttribute("aria-invalid");
  } else {
    kutu.setAttribute("aria-invalid", "true");
  }
}

function alaniKontrolEt(kutu, dogruMu, mesaj) {
  if (dogruMu) {
    hataYaz(kutu, "");
  } else {
    hataYaz(kutu, mesaj);
  }
  return dogruMu;
}

ogrenciFormu.addEventListener("submit", function (olay) {
  olay.preventDefault();

  const noKutusu = document.querySelector("#ogrenci-no");
  const sifreKutusu = document.querySelector("#ogrenci-sifre");
  const no = noKutusu.value.trim();
  const sifre = sifreKutusu.value;

  const noDogru = alaniKontrolEt(noKutusu, OGRENCI_NO_KALIBI.test(no), "Öğrenci numarası 8 rakamdan oluşmalı.");
  const sifreDogru = alaniKontrolEt(sifreKutusu, sifre !== "", "Şifreni yaz.");
  if (!noDogru || !sifreDogru) {
    return;
  }

  const kullanici = kullanicilariGetir().find(function (k) {
    return k.ogrenciNo === no && k.sifre === sifre;
  });

  if (kullanici === undefined) {
    hataYaz(sifreKutusu, "Öğrenci numarası veya şifre hatalı.");
    return;
  }

  oturumAc(kullanici.adSoyad, "ogrenci");
  window.location.href = "katalog.html";
});

yoneticiFormu.addEventListener("submit", function (olay) {
  olay.preventDefault();

  const adKutusu = document.querySelector("#kullanici-adi");
  const sifreKutusu = document.querySelector("#yonetici-sifre");
  const kullaniciAdi = adKutusu.value.trim();
  const sifre = sifreKutusu.value;

  const adDogru = alaniKontrolEt(adKutusu, kullaniciAdi !== "", "Kullanıcı adını yaz.");
  const sifreDogru = alaniKontrolEt(sifreKutusu, sifre !== "", "Şifreni yaz.");
  if (!adDogru || !sifreDogru) {
    return;
  }

  const yonetici = YONETICILER.find(function (y) {
    return y.kullaniciAdi === kullaniciAdi && y.sifre === sifre;
  });

  if (yonetici === undefined) {
    hataYaz(sifreKutusu, "Kullanıcı adı veya şifre hatalı.");
    return;
  }

  oturumAc(yonetici.adSoyad, "yonetici");
  window.location.href = "talepler.html";
});

kayitFormu.addEventListener("submit", function (olay) {
  olay.preventDefault();

  const adKutusu = document.querySelector("#ad-soyad");
  const noKutusu = document.querySelector("#kayit-no");
  const epostaKutusu = document.querySelector("#eposta");
  const sifreKutusu = document.querySelector("#kayit-sifre");
  const tekrarKutusu = document.querySelector("#kayit-sifre-tekrar");

  const adSoyad = adKutusu.value.trim();
  const no = noKutusu.value.trim();
  const eposta = epostaKutusu.value.trim();
  const sifre = sifreKutusu.value;
  const tekrar = tekrarKutusu.value;

  const adDogru = alaniKontrolEt(adKutusu, adSoyad.includes(" "), "Adını ve soyadını aralarında boşluk bırakarak yaz.");
  const noDogru = alaniKontrolEt(noKutusu, OGRENCI_NO_KALIBI.test(no), "Öğrenci numarası 8 rakamdan oluşmalı.");
  const epostaDogru = alaniKontrolEt(epostaKutusu, EPOSTA_KALIBI.test(eposta), "Geçerli bir e-posta adresi yaz.");
  const sifreDogru = alaniKontrolEt(sifreKutusu, sifre.length >= 6, "Şifre en az 6 karakter olmalı.");
  const tekrarDogru = alaniKontrolEt(tekrarKutusu, tekrar === sifre && tekrar !== "", "Şifreler aynı değil.");

  if (!adDogru || !noDogru || !epostaDogru || !sifreDogru || !tekrarDogru) {
    return;
  }

  const kullanicilar = kullanicilariGetir();
  const kayitliMi = kullanicilar.some(function (k) {
    return k.ogrenciNo === no;
  });

  if (kayitliMi) {
    hataYaz(noKutusu, "Bu öğrenci numarasıyla zaten kayıt var.");
    return;
  }

  kullanicilar.push({ adSoyad: adSoyad, ogrenciNo: no, eposta: eposta, sifre: sifre });
  kullanicilariKaydet(kullanicilar);
  oturumAc(adSoyad, "ogrenci");
  window.location.href = "katalog.html";
});

const acikOturum = oturumuGetir();
if (acikOturum !== null) {
  girisDurumu.textContent = acikOturum.ad + " olarak giriş yaptın. Başka bir hesapla girmek için önce menüden çıkış yap.";
  girisDurumu.hidden = false;
}
