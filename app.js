const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const images = require('images');
const http = require('http');
const cors = require('cors');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

app.use(cors({
  // origin: '127.0.0.1:5501'
  origin: '*'
}));
app.use(bodyParser.json({limit: '20mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '20mb', extended: true}))


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});

let x = 0
let y = 0 

// DEBRUYNES
app.post('/debruynes', cors(), function (req, res, next) {
  // res.setHeader('Content-Type', 'text/plain');

  fs.writeFile('./images/reception.png', req.body[2].replace("data:image/png;base64,",""), 'base64', function(err) {   // POUR ECRIRE LE FICHIER DANS RECEPTION
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
  }); 
  req.body[0] = x
  req.body[1] = y
  let largeur = (images("./images/space.png").width())
  let longueur = (images("./images/space.png").height())
  // let longueur = 4
  // let largeur = 3
  let aire = largeur * longueur;
  let prixEur = aire * 0.30
  let prixEth = prixEur / 3200
  console.log(`Largeur : ${largeur}\n Longueur : ${longueur}\n Aire : ${aire}\n Prix Euro : ${prixEur} || Prix Ether : ${prixEth}`)

  let raiponce = [longueur, largeur, aire, prixEur, prixEth]
  res.send(raiponce);

});




// BERGER
app.get('/berger', cors(), (req, res, next) => {

});

// async function PaymentPopup() { 
//     const achat = await totalCoords();
//     console.log('Paiement', achat);}


// LANCER LEVENT HTML ECRAN DE PAIEMENT

app.post('/caretti', cors(), (req, res, next) => {
  res.setHeader('Content-Type', 'text/plain');

  images("./images/wall.png").draw(images("./images/reception.png"), x, y).save("./images/wall2.png", {
    quality: 100}); // PREMIER COLLAGE
  images("./images/wall2.png").draw(images("./images/wall.png"), 0, 0).save("./images/wall.png", {
  quality: 100}); // DEUXIEME COLLAGE


// console.log('updatewall.js : lancé');

// async function update_wall() {
//     const response = await fetch('images/wall.png');
//     const blob = await response.blob();
//     document.getElementById('wall').src = URL.createObjectURL(blob);
// }

// update_wall()
// .then(response => {
//     console.log('updatewall.js : image récup');
// })
// .catch(error => {
//     console.log('updatewall.js : erreur de récup!');
//     console.error(error);
// });

  let raiponce = 'Caretti est revenu'
  res.send(raiponce);
});