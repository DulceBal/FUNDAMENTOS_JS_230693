// Tipos de datos en js

// 1.-Undefined
console.warn("---Tipo de Dato UNDEFINED")
let cliente;
console.log(`El cliente es : ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof (cliente)}`);

cliente = "Juan Romero"
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof (cliente)}`);

cliente = 19227
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof (cliente)}`);

//console.log(`El cliente ha realizado: ${NumCompras} en este mes.`);

//Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no declaradas

// 2.-BOOLEAN - Boleanos -TRUE/FALSE (Flaso/Verdadero)
console.warn("---Tipo de Dato : BOOLEAN (True/ False)")
let esPremium = "No lo se";
console.log(`¿Es el clientePremium? : ${esPremium}`)
console.log(`El tipo de dato de la variable esPremium es: ${typeof (esPremium)}`);

console.log("Asignando el valor \"true\"a la variable. ")
esPremium = "true"
console.log(`El tipo de dato de la variable esPremium es: ${typeof (esPremium)}`);

console.log("Asignando el valor true a la variable. ")
esPremium = true
console.log(`El tipo de dato de la variable esPremium es: ${typeof (esPremium)}`);

console.log(`¿Es el clientePremium? : ${esPremium}`);
console.log("Cambaindo el valor de esPremium a false")
esPremium = 0

if (esPremium)
    console.log("El cliente pago por usar el servicio");
else
    console.log("El cliente recibe los servicios gratuitos");

//3.-Number

var cantidad;
const costo_producto = 10.50
let saldo_cuenta = 2500.40
let monto_transaccion;

console.warn("---Tipo de Dato -MUMBER (Numeros, positivos, negativos, decimales, flotantes)");
console.log(`Tu saldo al dia de hoy es de: ${saldo_cuenta}, (tipo de Dato = ${typeof (saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta: ${costo_producto}`)
cantidad = 8;
console.log(`Has elegido comprar: ${cantidad} de productos`)
console.log(`El importe total de la compra es: ${(cantidad * costo_producto)}`)
saldo_cuenta = saldo_cuenta - (cantidad * costo_producto);
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);

//El cliente realiza un bono de 1500
monto_transaccion = 1500;
console.log(`Tu abono de: ${monto_transaccion} ha recibido, tu nuevo saldo es de: ${saldo_cuenta + monto_transaccion}`);

// 4.-String (cadena Caracteres)
const alumno = "Brian jesus mendooza marquez"
let producto;
console.warn("---Tipo de Dato - String (Cadena de caracteres");
console.log(`el Nombre del alumno es : ${alumno}, que es un tipo de dato ${typeof (alumno)}`);

// Inicializamos el valor de la variable producto
producto = "Monitor 20\"FULL HD"
console.log(`El nombre del Producto es: ${producto},que es un tipo de dato${typeof (producto)}
 `);

// Manupalacion los String
console.log(`Mas adelante podremos transformar el contenido de lo String usando los metodos y funciones especificaciones , como convertir su valor a mayusculas :
 ${alumno}=>${alumno.toLowerCase()}`);
console.log(`O ensu defecto a minusculas: ${producto.toLowerCase()}`);

// 5.-BIGIN (Numero de Mayor Aplitud)

console.warn("---Tipo de dato = Bigint (NUMERO AMPLIO");
const numeroGrande = 1234567890
const numeroGrande2 = 12345678901234567890
const numeroGrande3 = 123456789012345678901234567890
const numeroGrande4 = 1234567890123456789012345678901234567890

console.log(`El primero experimento de un numero grande es ${numeroGrande},que si es soportado por NUmber y su tipo de dato es :
 ${typeof (numeroGrande)}`);

console.log(`El primero experimento de un numero grande es ${numeroGrande2},que si es soportado por NUMBER y su tipo de dato es :
 ${typeof (numeroGrande2)}`);
console.log(`El primero experimento de un numero grande es ${numeroGrande3},que NO es soportado por NUMBER, perdiendo presición  y su tipo de dato es :
 ${typeof (numeroGrande3)}`);
console.log(`El primero experimento de un numero grande es ${numeroGrande4},que NO es soportado por NUMBER, perdiendo precisión y su tipo de dato es :
 ${typeof (numeroGrande4)}`);

numeroGrande3 = BigInt(123456789012345678901234567890n);
console.log(`El quinto  experimento de un numero grande es ${numeroGrande3},que ya fué convertido a BIGINT , y su tipo de dato es :
 ${typeof (numeroGrande3)}`);

numeroGrande4 = BigInt(11234567890123456789012345678901234567890n);
console.log(`El sexto  experimento de un numero grande es ${numeroGrande4},que ya fué convertido a BIGINT , y su tipo de dato es :
 ${typeof (numeroGrande4)}`);

const numero = 129;
console.log(`Intentando realizar la suma de: numero + numeroGrande3, si el resultado es: ${BigInt(numero) + numeroGrande3}`);

//6.-SYMBOL (simbolo)
const numero1 = 5;
const numero2 = 5.0;
const numero3 = "5";
const numero4 = "5.0";
const numero5 = Symbol(5);
const numero6 = Symbol(5);
const numero7 = Symbol(5.0);
const numero8 = Symbol("5");
const numero9 = Symbol("5.0");

// Pruebas comparativas 
//1
console.log("¿Es 5 = 5.0?")
if(numero1 == numero2)
    console.log("Se comparo numero1 con numero2, determinando que tienen el mismo valor.")
else
    console.log("Se comparo numero1 con numero2, determinando que no tienen el mismo valor.")


//2
console.log("¿Es 5 = \"5\"?")
    if(numero1 == numero3) //Estrictamente igual (equidad)= Mismpo valor, mismo tipo de datos
        console.log("Se comparo numero1 con numero3, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero3, determinando que no tienen el mismo valor.")

//3
console.log("¿Es 5 === \"5\"?")
    if(numero1 === numero3)
        console.log("Se comparo numero1 con numero3, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero3, determinando que tienen el mismo valor, pero NO el mismo tipo de dato.")


//4

console.log("¿Es 5 = \"5.0\"?")
    if(numero1 == numero4)
        console.log("Se comparo numero1 con numero4, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero4, determinando que no tienen el mismo valor.")

//5        

console.log("¿Es 5 === \"5.0\"?")
    if(numero1 === numero4)
        console.log("Se comparo numero1 con numero4, determinando que tienen el mismo valor.")
    else
     console.log("Se comparo numero1 con numero4, determinando que tienen el mismo valor, pero NO el mismo tipo de dato.")


//6
console.log(`¿Es 5 === Symbol(5)?, antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo: ${typeof(numero1)} y numero5 del tipo de dato: ${typeof(numero5)}`)
    if(numero1 == numero5)
        console.log("Se comparo numero1 con numero5, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero5, determinando que tienen el mismo valor, pero NO el mismo tipo de dato.")

//7
console.log(`¿Es 5 === Symbol(5.0)?, antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo: ${typeof(numero1)} y numero5 del tipo de dato: ${typeof(numero7)}`)
    if(numero1 == numero7)
        console.log("Se comparo numero1 con numero7, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero7, determinando que tienen el mismo valor, pero NO el mismo tipo de dato.")
    
//8
console.log(`¿Es 5 === Symbol(\"5\")?, antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo: ${typeof(numero1)} y numero5 del tipo de dato: ${typeof(numero8)}`)
    if(numero1 == numero8)
        console.log("Se comparo numero1 con numero8, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero8,determinando que tienen el mismo valor, pero NO el mismo tipo de dato.")

//9
console.log(`¿Es 5 === Symbol("5.0")?, antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo: ${typeof(numero1)} y numero5 del tipo de dato: ${typeof(numero9)}`)
    if(numero1 == numero9)
        console.log("Se comparo numero1 con numero9, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero9, determinando que tienen el mismo valor, pero NO el mismo tipo de dato.")

        
// 10 prueba importante

console.log(`¿Es Symbol(5) === Symbol(5)?, antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo: ${typeof(numero5)} y numero5 del tipo de dato: ${typeof(numero6)}`)
    if(numero5 === numero6)
        console.log("Se comparo numero5 con numero6, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero5 con numero6, determinando que tienen el mismo valor y el mismo tipo de dato, es la condición de Symbol la que lo hace único en la memoria.")

// 7.-NULL
console.warn("Tipo de dato - NULL (Nulo o Vacio");

//El tipo de dato nulo se asigna cuando el sistema o el usuario saben de la variable pero prefieren dejarlo vacio, por su consentimiento, a diferencia de UNDEFIEND que es un valor desconocido asignado por default po JS
 
let nombreUsuario= null;
let passUsuario= null;
let generoUsuario= null;
let estatusRelacionSentimental= null;
let fecha_ultimoPost= null;

//Supongamos que estamos programando una red social, tipo Facebook , en la parte de la información se publicara en el perfil del usuario 
//Si el usuario no ha iniciado sesión en el dispositivo móvil o en la aplicaión web, puede explorar contenido de acceso publico, y no existira información para mostrar 
//En la HU (Historia de Usuario), que el usuario desea logearse debera ingresar su numero telefonico o correo electronico y una contraseal que deberemos guaradd en las variables previamente declaradas
//Supongamos que el usuario: Dulce B. con correo electronico dulcebal@gmail.com desea ingresar con su contraseña: dulce123
 
nombreUsuario="dulcebal@gmail.com";
passUsuario="dulce123"
//En este momento de ejecución del sistema no sabemos su genero, ni su estatus de relación sentimental 
console.log(`El Usuario ${nombreUsuario} esta intentado logearse con una contraseña de: ${passUsuario}`);
//Lo que prosigue es que el sistema contejara los datos ingresados con la base de datos y en caso de que los datos sean correctos comenzara la sesión en la plataforma actualizando estos valores.
//Dado que Dulce es del genero Femenino,y denota que su estatus de rlación no ha sido capturado o lo mantiene privado puede generar la actualiación de los valores de las variables
generoUsuario="F"
estatusRelacionSentimental=null

console.log(`El Usuario ${nombreUsuario} se ha logeado exitosamete, al tener acceso a su información de perfil podemos deducir que es del genero ${generoUsuario} y que su estatus de realción es: ${estatusRelacionSentimental} y su ultima publicación se realizo el: ${fecha_ultimoPost}`);

//Comparando NULL vs UNDEFINED
//Si bien UNDEFINED y NULL tienen el mismo valor, no tienen el mismo tipo de dato
console.log("Comparación de la aquidad entre Undefined y Null")
console.log(
    (fecha_ultimoPost == estatusRelacionSentimental) ?
    "Ambas variables tienen el mismo valor":
    "Las variables no tienen el mismo valor"
);
console.log("Comparación de la identidad entre Undefined y Null")
console.log(
    (fecha_ultimoPost === estatusRelacionSentimental) ?
    "Ambas variables tienen el mismo valor y el mismo tipo de dato" :
    "Las variables tienen el mismo valor, pero no el mismo tipo de dato"
);

// 8. FUNCTION (Funciones)
console.warn("--- Tipo de Dato FUNCTION (Función)")

// Declaramos una funcion que nos permita recibir un paramento en este caso el nombre de la persona a saludar, y le enviamos un saludo, esta función la asignamos a una constante.
const saludar =  function(nombre){return `Hola, ${nombre}!`}

// Invocamos a la función declarada
console.log(saludar('Marco'));

//Y que tipo de dato tiene esta constante
console.log(`El tipo de dato de la constante saludar es: ${typeof(saludar)}`)

