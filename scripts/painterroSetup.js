var debruynesIsBack = []
var ptro = Painterro({
  saveHandler: function (image, done) {
    //localStorage.imgData = image.asBlob();

    //When user clicks on save :
    ptro.hide()                                   //hide painterro
    cursorAsImage(image)                          //cursor is now the image
    window.addEventListener("click", sendImgAndCoords)  //When you click, send IMG and coords to the server

    function sendImgAndCoords(event) {
      if (nbDeRequete > 0) {
        var x = event.screenX;
        var y = event.screenY;
        console.log([x, y]);
        //console.log(img);
        const formData = [x, y, JSON.stringify(image.asDataURL())]

      // JSON.stringify({
      //   image: image.asDataURL()
      // }))


        const options = {
          method: 'POST',
          headers: {
           'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData),
        };
    
        fetch('http://localhost:3000/debruynes', options)
        .then(response => {
          return response.text();
          done(true);
        }).then(data => {
          data = data.substring(1, data.length-1);
          parsed = data.split(',');
          var debruynesIsBack = parsed
          console.log('oui voilà cest : ' + data)
          

          if(debruynesIsBack[0] >= debruynesIsBack[1]){
            let longueur = debruynesIsBack[0];
            let largeur = debruynesIsBack[1];
          }else if(debruynesIsBack[0] < debruynesIsBack[1]){
            let largeur = debruynesIsBack[0];
            let longueur = debruynesIsBack[1];
          }
          let nbPixel = debruynesIsBack[2];
          let prixEur = Number(debruynesIsBack[3]).toFixed(2);
          let prixEth = Number(debruynesIsBack[4]).toFixed(2);

          var userPreference;
            if (confirm(`Do you want to save changes? Taille: ${nbPixel} Le prix est de ${prixEur} € / ${prixEth} Eth.`) == true) {
              userPreference = "Data saved successfully!";
          } else {
              userPreference = "Save Cancelled!";
              document.getElementById("cursor").style.display = "none";
          }    
        })
        .catch(err => {
          // Catch and display errors
          console.log('erreur dans le fetch POST des coordonnees')
        })
        window.removeEventListener("click", sendImgAndCoords)


        
        //AZEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEAZEAZEAZEAZEAZE
        //  function boutonValider(){
        //   document.getElementById("achat").style.display = "block";
        //  } 

      //Là je fais la fonction qui fixe l'image




      function prout(){
      document.body.onmousemove = () => {}  //Arrête la fonction qui fait bouger l'image
      document.body.style="cursor:auto"; //Remet le curseur normal

      }
      prout()
      document.getElementById("general").style.backgroundImage = "url('images/wall.png')" ;

      }
      nbDeRequete++
    }
  
    

    //Fonction post à /dessin
    fetch('http://localhost:3000/caretti', {method: 'POST', body: 'lol'})
    .then(response => {
      return response.text()
    }).then(data => {
      console.log('oui voilà la réponse au POST du dessin ' + data)
    })
    .catch(err => {
      // Catch and display errors
      console.log('erreur dans le fetch POST du dessin')
    })

  },
  onClose: function() {
    console.log('closed!')
  }
})
    

function cursorAsImage(image) {
  
  var url = URL.createObjectURL(image.asBlob())
  const cursor = document.getElementById("cursor")
  cursor.src = url;
  cursor.style.zIndex = "0";                       //A checker plus tard
  
  document.body.style="cursor:none";

  const moveCursor = function(mouseMovement) {
    let xPosition;
    let yPosition;
    if (mouseMovement) {
        xPosition = mouseMovement.pageX;
        yPosition = mouseMovement.pageY;
        cursor.style.top = yPosition + 1 + 'px';
        // added 1 pixel to get the bee off of the cursor itself so you're clicking on what you want to click on not the bee image
        cursor.style.left = xPosition + 'px';
    };
  }
  //window.addEventListener('mousemove', moveCursor)
  document.body.onmousemove = moveCursor
}


