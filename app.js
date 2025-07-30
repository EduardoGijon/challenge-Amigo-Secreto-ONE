// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosLista = [];

function agregarAmigo(){
    //Se obtiene el valor del input con el id amigo
    let amigo = document.getElementById('amigo').value;
    
    //Verificar si el valor amigo no este vacio!
    if (esLongAmigoCero(amigo)){
        mostrarAlerta('Porfavor rellenar el campo');
    }else{
        amigosLista.push(amigo);
        console.log(amigosLista);
        limpiarInput('amigo');
    }

}

function esLongAmigoCero(amigo){
    //se verifica si la longitud de la cadena amigo es 0, si es asi se entiende que la cadena no contiene nada o esta vacia
    return amigo.length === 0;
}

function mostrarAlerta(mensaje){
    //Manda una alerta al navegador con el mensaje especificado
    alert(mensaje);
}

function limpiarInput(elementoInput){
    //Primer error, la linea comentada de abajo es incorrecta por que no cambia el valor actual del valor value en el input especificado, esto
    //sucede por que se esta modificando el atributo mas no la propiedad, el atributo especifica el valor inicial que se establece en HTML
    //Mientras que la propiedad es el valor actual del elemento, que puede cambiar dinamicamente
    //document.getElementById(elementoInput).setAttribute('value', '');

    document.getElementById(elementoInput).value = '';
}