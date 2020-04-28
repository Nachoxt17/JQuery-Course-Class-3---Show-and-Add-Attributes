/** La Selección por Atributos(Selection by attributes) es Similar a la Selección por por Clase CSS o por ID, pero escribiendo entre Corchetes Cuadrados un Atributo del Elemento; en este caso es "[type='text']".*/
$("#button").click(() => $("[type='text']").css({"background":"red"}));

/** MOSTRAR ATRIBUTOS DE UN ELEMENTO HTML:_
 * +-Esto que Aprenderemos a Continuación nos Sirve para hacer los Inicios de Sesión con Usuario y Contraseña, entre otras cosas.
 * A Continuación Veremos como con el Método de JQuery ".val()" Capturamos el Valor que se le Ingresa a las Entradas HTML(Inputs) haciendo Llamada( $("***") ) a sus Atributos "type:'***' ", luego Usamos el Comando
 * "console.log(***)" para que Al Pulsar el Botón "Send" muestre en la Consola del Navegador los Valores Ingresados en las Entradas HTML(Inputs) de "user" y "password".
*/
let user = "";
let password = "";

$("#button").click(function(){

    user = $("[type='text']").val();
    password = $("[type='password']").val();

    console.log(user);
    console.log(password);

}); 


/** AGREGARLE ATRIBUTOS A UN ELEMENTO HTML:_
 * +-Esto que veremos a coninuación sirve para Agregarle a un Elemnto HTML un Nuevo Atributo, que puede servir para Posibilitar una Interacción Futura o lo que se necesite:_
 * Como Ejemplo a continuación, a Nuestro Elemento <div id="box3"> le Agregaremos el Atributo ' jhon="zero" ' (Que no Significa Nada Realmente, solo es un Ejemplo) Llamando al al Elemento <DIV> por su ID y haciendo
 *  que al hacerle Click se le agregue con el Método "attr(***)" el Atributo de "jhon" con el Valor de "zero", Ingresados en ese Orden (1ro el Atributo y 2do su Valor) y en Sintaxis de Strings en una
 *  Función de JS:_
 * NOTA:_ El Método ".attr(***)" de JQuery Reemplaza y Resume los Métodos de Javascript Nativo ".getAttribute()" que Obtiene el Atributo de Un Elemento y que en JQuery equivale al Método ".attr(***)" con los 
 * Paréntesis Vacíos y el Método de JS Nativo ".setAttribute(***)" que en JQuery equivale al Método ".attr(***)" con los Paréntesis rellenos con los Datos necesarios de la forma que vimos anteriormente.*/

 $("#box3").click(() => $("#box3").attr("jhon","zero"));