const inputPassword = document.getElementById('passInput');
const textOut = document.getElementById('textOut');

const password = ["Winter", "sprINg", "sUMmer", "auTUmn"]
const message = ["Oh hell, it's so cold!", "Great time of year, warm, everything blooms!", "The best time of the year, sunny, warm!", "Well .. winter is coming"]


////////////// rozwiazanie od Samuraja ////////////////
// const mapIsReallyCool= password.map(i => i.toLowerCase())
// const showMessage = (e) => {
//     const inputPassword = e.target.value.toLowerCase();
//     for( let i = 0; i < password.length; i++){
//         if(inputPassword === mapIsReallyCool[i]){
//             textOut.textContent = message[i];
//         }
//     }
// }
// inputPassword.addEventListener('input', showMessage)



/////////////// moje rozwiazanie ///////////////////////
inputPassword.addEventListener('input', () => {
   textOut.textContent= '';
   password.forEach((passFirstIndex, indexFirstIndex) => {
       if(passFirstIndex.toLowerCase() === event.target.value.toLowerCase()){
           textOut.textContent = message[indexFirstIndex];
       }else if(passFirstIndex.toUpperCase() === event.target.value.toUpperCase()){
        textOut.textContent = message[indexFirstIndex];
    }
   });
});

inputPassword.addEventListener('focus', (e) => {
    e.target.classList.add('active');
});

inputPassword.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
});


