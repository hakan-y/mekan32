

const anaSayfa=function(req, res, next) {
  res.render('index', { title: 'Anasayfa' });
}
const mekanBilgisi=function(req, res, next) {
  res.render('index', { title: 'Mekan Bilgisi' });
}
const yorumEkle=function(req, res, next) {
  res.render('index', { title: 'Yorum Ekle' });
}

module.exports={
  anaSayfa,
  mekanBilgisi,
  yorumEkle

}

