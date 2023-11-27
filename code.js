var myHeaders = new Headers();      /* script javascript*/

function saludar() {
  console.log("Hola")
  alert("hola mundo")
}

myHeaders.append("Content-Type", "application/json");


var raw = JSON.stringify({
  "nombre": "Elkin Duran",
  "direccion": "Carrera 32a",
  "telefono": "3214170011",
  "email": "correo@email.com",
  "descripcion": "proyecto para landing page",
  "fecha": "2023-11-25",
  "hora": "10:00"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://libisoft.com.co/servicios/app/index.php/landing/DemoLanding", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


  const open =  document.getElementsByClassName
  