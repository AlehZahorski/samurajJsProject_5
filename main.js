const inputPassword = document.getElementById('passInput');
const textOut = document.getElementById('textOut');

const password = ["qwe","asd"]
const message = ["Dobrze ze jestes, program juz jest gotowy czekalismy tylko na ciebie!", "Czesc, milo cie widziec."]

inputPassword.addEventListener('input', (e) => {
   if(password[0] === e.target.value){
       textOut.textContent=(message[0])
   }else if(password[1] === e.target.value){
    textOut.textContent=(message[1])
   }else{
    textOut.textContent= ''
   }
})

inputPassword.addEventListener('focus', (e) => {
    e.target.classList.add('active');
})

inputPassword.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
})