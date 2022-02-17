var nbDeRequete = 0

// function sendImgAndCoords(event) {
//   if (nbDeRequete > 0) {
//     var x = event.screenX;
//     var y = event.screenY;
//     console.log([x, y]);
//     console.log(img);

//     const flubi = [x, y]
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(flubi),
//     };

//     fetch('http://localhost:3000/', options)
//     .then(response => {
//       return response.text();
//       done(true);
//     }).then(data => {
//       console.log('oui voilà cest : ' + data) 
//     })
//     .catch(err => {
//       // Catch and display errors
//       console.log('erreur dans le fetch POST des coordonnees')
//     })
//     window.removeEventListener("click", sendImgAndCoords)
//   }
//   nbDeRequete++
// }