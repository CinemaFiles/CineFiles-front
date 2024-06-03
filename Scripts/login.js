// Selecciona todos los inputs
let inputs = document.querySelectorAll('input');
const token = null;

const setToken = newToken =>{
    token = `Bearer ${newToken}`;
} 

//const url = "https://cinefiles-backend.onrender.com"
const url = "http://127.0.0.1:3000/auth/"

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

x

const login = async(event)=>{
    event.preventDefault();
    const response = await fetch(url+"login")
    .then(res => res.json().then(data => {
        console.log(data);
        if(res.status === 200 && res.message === "Usuario logueado correctamente"){
            alert("Usuario logueado correctamente");
            setToken(data.token);
            window.localStorage.setItem(
                'LoggedCineUsser', token
            );
            window.location.href = "index.html";

        }
    }) ).catch((error) => {
    console.log(error);
    })
}



document.getElementById('loginbutton').addEventListener('click', async function(event){
    event.preventDefault();
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const response = await fetch(url+"/movies/all").then((res) => {
        res.json().then((data) => {
            console.log(data);
        }).catch((error) => {
            console.log(error);
        });
    }).catch((error) => {
        console.log(error);
    })
})
