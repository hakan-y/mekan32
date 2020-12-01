var express = require("express");
var router = express.Router();

const anaSayfa = function (req, res, next) {
  res.render("mekanlar-liste", {
    baslik: "Anasayfa",
    sayfaBaslik: {
      siteAd: "Mekan32",
      aciklama: "Isparta civarındaki mekanları keşfedin!",
    },
    footer: "Hakan Emre Yeşil",
    mekanlar: [
      {
        ad: "Starbucks",
        adres: "Centrum Garden",
        puan: "3",
        imkanlar: ["kahve", "çay", "pasta"],
        mesafe: "10km",
      },
      {
        ad: "Gloria Jeans",
        adres: "Iyaş AVM",
        puan: "1",
        imkanlar: ["kahve", "kek", "çay"],
        mesafe: "5km",
      },
      {
        ad: "mokka",
        adres: "Iyaş",
        puan: "5",
        imkanlar: ["kahve", "kek", "çay"],
        mesafe: "1km",
      },  
      {
        ad: "türk kahvesi",
        adres: "Iyaş AVM",
        puan: "4",
        imkanlar: ["kahve", "kek", "çay"],
        mesafe: "3km",
      },  
      {
        ad: "hook",
        adres: "Iyaş AVM",
        puan: "5",
        imkanlar: ["kahve", "tatlı", "çay"],
        mesafe: "2km",
      },
    ],
  });
};

const mekanBilgisi = function (req, res, next) {
  res.render("mekan-detay", {
    baslik: "Mekan Bilgisi",
    sayfaBaslik: "Starbucks",
    footer: "Hakan Emre Yeşil",
    mekanBilgisi: {
      ad: "Starbucks",
      adres: "Centrum Garden",
      puan: "3",
      imkanlar: ["kahve", "çay", "pasta"],
      koordinatlar: {
        enlem: 37.781885,
        boylam: 30.566034,
      },

      saatler: [
        {
          gunler: "Pazartesi-Cuma",
          acilis: "7:00",
          kapanis: "23:00",
          kapali: false,
        },
        {
          gunler: "Cumartesi",
          acilis: "9:00",
          kapanis: "22:30",
          kapali: false,
        },
        {
          gunler: "Pazar",
          kapali: true,
        },
      ],
      yorumlar: [
        {
          yorumYapan: "Hakan Emre Yeşil",
          puan: "5",
          tarih: "2 Aralık 2020",
          yorumMetni: "Kahveleri Çok Güzel",
        },
      ],
    },
  });
};

const yorumEkle = function (req, res, next) {
  res.render("yorum-ekle", { title: "Yorum Ekle" });
};

module.exports = {
  anaSayfa,
  mekanBilgisi,
  yorumEkle,
};