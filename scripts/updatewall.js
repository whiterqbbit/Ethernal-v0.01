console.log('updatewall.js : lancé');

update_wall()
    .then(response => {
        console.log('updatewall.js : image récup');
    })
    .catch(error => {
        console.log('updatewall.js : erreur de récup!');
        console.error(error);
    });

async function update_wall() {
    const response = await fetch('images/wall.png');
    const blob = await response.blob();
    document.getElementById('wall').src = URL.createObjectURL(blob);
}