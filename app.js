let amigosLista = [];
let indiceAleatorio;

function agregarAmigo(){
    
    //Se obtiene el valor del input con el id amigo
    let amigo = document.getElementById('amigo').value;
    
    //Verificar si el valor amigo no este vacio!
    if (esLongAmigoCero(amigo)){
        //Si el campo esta vacio muestra alerta
        mostrarAlerta('Porfavor rellenar el campo');
    }else{
        insertarTextoElementoHTML('resultado','');
        //Si no esta vacio ingresa el nombre a la lista, limpia el campo de texto y actualiza la lista
        amigosLista.push(amigo);
        limpiarInput('amigo');
        actualizarListaHTML('listaAmigos');
    }

}

//Actualiza la lista dinamicamente conforme haya nuevas entradas validas
function actualizarListaHTML(elementoLista){
    //Se limpia la lista anterior para evitar la repeticion de renglones
    limpiarListaHTML(elementoLista);
    //Se obtiene la lista que se va a manipular en el dom
    let listaAmigos = document.getElementById(elementoLista);

    //Ciclo que recorre de inicio a fin el array de los amigos
    for(i=0; i<=amigosLista.length-1; i++){
        //Se crea un nuevo elemento en el dom del tipo li (list item)
        const nuevoElemento = document.createElement('li');
        //A ese nuevo elemento se le agrega el texto que esta almacenado en la posicion i del array
        nuevoElemento.textContent = amigosLista[i];
        //El nuevo elemento se agrega a la lista y se muestra
        listaAmigos.appendChild(nuevoElemento);
    }
    
}

function sortearAmigo(){
    //Verificar si la lista de amigos no este vacia
    if (amigosLista.length === 0){
        alert('No ha ingresado ningun amigo a sortear!!!');
    }else {
        indiceAleatorio = Math.floor(Math.random()*amigosLista.length);
        const amigoSeleccionado = amigosLista[indiceAleatorio];
        limpiarListaHTML('listaAmigos');
        insertarTextoElementoHTML('resultado',`El amigo secreto es... ${amigoSeleccionado}!`);
        amigosLista = [];
    }
}

function insertarTextoElementoHTML(elementoHTML, texto){
    document.getElementById(elementoHTML).textContent = texto;
}

function limpiarListaHTML(elementoLista){
    document.getElementById(elementoLista).textContent = '';
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