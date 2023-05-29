//Declaramos una nueva instancia de XMLHttpRequest
var xhr = new XMLHttpRequest();

//Esta función se ejecutará tras la petición
xhr.onload = function () {

    //Si la petición es exitosa
    if (xhr.status >= 200 && xhr.status < 300) {
        //Mostramos un mensaje de exito y el contenido de la respuesta
        console.log('¡Éxito!', xhr.response);
    } else {
        //Si la conexión falla
        console.log('Error en la petición!');
    }

};

//Por el primer parametro enviamos el tipo de petición (GET, POST, PUT, DELETE)
//Por el segundo parametro la url de la API
xhr.open('GET', 'https://reqres.in/api/users/2');
//Se envía la petición
xhr.send();