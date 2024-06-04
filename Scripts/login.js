// Selecciona todos los inputs
let inputs = document.querySelectorAll('input');
let token = null;

const email = document.getElementById('email');
const password = document.getElementById('password');

const setToken = newToken =>{
    token = `Bearer ${newToken}`;
} 

const url = "https://cinefiles-backend.onrender.com/auth"

// Para cada input
inputs.forEach(function(input) {

    // Cuando el input cambia
    input.addEventListener('input', function() {
        // Si el input tiene contenido
        if (this.value) {
            // Agrega la clase 'has-content'
            this.classList.add('has-content');
        } else {
            // Si no, remueve la clase 'has-content'
            this.classList.remove('has-content');
        }
    });
});



const login = async ()=>{
    const response = await fetch(
        url+"/login",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value
            })
        }
    )
    .then(res => res.json().then(data => {
        console.log(data);
        if(res.status === 200){
            alert("Usuario logueado correctamente");
            window.localStorage.setItem('UserCineLogged', JSON.stringify(data));
            window.location.href = "index.html";
        }
    }) ).catch((error) => {
        console.log(error);
    })
}



document.getElementById('loginbutton').addEventListener('click', async function(event){
    event.preventDefault();
    await login();
    // mail.value = "";
    //password.value = "";
})
