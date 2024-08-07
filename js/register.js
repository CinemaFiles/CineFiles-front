const url = "https://cinefiles-backend.onrender.com" + "/auth";
const email = document.getElementById('email');
const user = document.getElementById('user');
const password = document.getElementById('password');

//no se pueden usar promesas en reacts

const register = async(event)=>{
    event.preventDefault();
    const response = await fetch(url+"/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: user.value,
            email: email.value,
            password: password.value
        })
    }).then(response => response.json().then( data => {
        console.log(data);
        if(data.status === 200){
            alert("Usuario registrado correctamente");
            window.location.href = "navigate.html";
        }
        else{
            alert(data.error)
            user.value = ""
            email.value = "";
            password.value =""
        }
    }
)
).catch(error => {
    console.log(error)
});
}


document.getElementById('registerbutton').addEventListener('click', register)