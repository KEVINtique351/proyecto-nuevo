function validarDatos(){
  
  nombre=document.getElementById("txtNombre")
  direccion=document.getElementById("txtDireccion")
  telefono=document.getElementById("txtTelefono").value
  
  console.log("El campo nombre validando" + nombre.value)
  if(nombre.value==null  || nombre.value==""){
    console.log("El campo nombre es rquerido")
    return false;
  }

  if(direccion.value==null  || direccion.value==""){
    console.log("El campo direccion es rquerido")
    return false;
  }

  if(telefono==null  || telefono=="" || telefono[0]!=3 || telefono.length<10 ){
    console.log("El campo telefono no cumple la validación de 10 digitos y que inicie con 3: "+telefono.length)
    return false;
  }
  return true;
}
function saludar() {
  var myHeaders = new Headers();      /* script javascript*/
  console.log("Hola")

  if(validarDatos()==false){
    
    return;
  }
 
  myHeaders.append("Content-Type", "application/json")
  myHeaders.append("User-Agent","PostmanRuntime/7.35.0")
  myHeaders.append("Accept","*/*")
  
  
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
}

  
