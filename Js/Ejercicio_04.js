// Repaso de Arreglos



//Estilización de las salidas a consola
const bg = "linear-gradient(11deg, rgba(199,0,36,1) 0%, rgba(255,129,121,1) 33%, rgba(255,191,26,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

console.warn("Practica 06: Arreglos en JavaScript")


//Para declarar un arreglo (array) de datos en JavaScript basta con comenzar con agregar [], y dentro de los datos que contendra el arreglo 
const mesesAnio=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]


console.log("%c1.- Declaración de un arreglo (Array)", style_console);

console.log(mesesAnio);
console.table(mesesAnio);


//Aceder a los valores de un arreglo de datos para acceder el valor solo bast


console.log("%c2.- Leer o recuperar los datos de un arreglo", style_console);

console.log(`El primer mes del año es: ${mesesAnio[0]} `)
console.log(`El ultimo mes del año es: ${mesesAnio[mesesAnio.length-1]}`)

//No se pueden acceder a elementos con posiciones negativas o posiciones superiores al tamaño denido.

console.log(`El mes del año en la posición -1 es: ${mesesAnio[-1]}`)

console.log(`El mes del año en la posición es: ${mesesAnio[12]}`)

console.log(`¿Qué tipo de dato es un arreglo? ${typeof(mesesAnio)}`)

//Al ser JavaScript un lenguaje debilmente tipado podremos crear arreglos mixtos de tipos de Datos

console.log("Declarar un arreglo mixto")
const saludar= function(nombre){return `Hola, ${nombre}!`}

let arregloMixto=["String", 9, 45.26,-200,-.16853,Symbol("TANIA"), 'z', false, BigInt(1111112222222333334444444555566666777), true, {latitud:"20°18'0\" N" , longitud: "97°58'00\" W" , altitud:796}, saludar, null]

console.log(arregloMixto)
console.table(arregloMixto)
console.log(typeof(arregloMixto))


console.log("Verificamos los tipos de datos de los elementos del arreglo: ")

console.log(`El dato en la posición[0]= ${arregloMixto[0]} y es del tipo: ${(typeof(arregloMixto[0]))}`)
console.log(`El dato en la posición[1]= ${arregloMixto[1]} y es del tipo: ${(typeof(arregloMixto[1]))}`)
console.log(`El dato en la posición[2]= ${arregloMixto[2]} y es del tipo: ${(typeof(arregloMixto[2]))}`)
console.log(`El dato en la posición[3]= ${arregloMixto[3]} y es del tipo: ${(typeof(arregloMixto[3]))}`)
console.log(`El dato en la posición[4]= ${arregloMixto[4]} y es del tipo: ${(typeof(arregloMixto[4]))}`)
console.log(`El dato en la posición[5]= ${arregloMixto[5].toString} y es del tipo: ${(typeof(arregloMixto[5]))}`)
console.log(`El dato en la posición[6]= ${arregloMixto[6]} y es del tipo: ${(typeof(arregloMixto[6]))}`)
console.log(`El dato en la posición[7]= ${arregloMixto[7]} y es del tipo: ${(typeof(arregloMixto[7]))}`)
console.log(`El dato en la posición[8]= ${arregloMixto[8]} y es del tipo: ${(typeof(arregloMixto[8]))}`)
console.log(`El dato en la posición[9]= ${arregloMixto[9]} y es del tipo: ${(typeof(arregloMixto[9]))}`)
console.log(`El dato en la posición[10]= ${arregloMixto[10]} y es del tipo: ${(typeof(arregloMixto[10]))}`)
console.log(`El dato en la posición[11]= ${arregloMixto[11]} y es del tipo: ${(typeof(arregloMixto[11]))}`)
console.log(`El dato en la posición[12]= ${arregloMixto[12]} y es del tipo: ${(typeof(arregloMixto[12]))}`)

console.log("%c3.- Arreglos Multidimensionales (Matrices)", style_console);

console.log("Declarando una matriz regular")
//Una matriz es uuna estructura de datos multidimensional (tabla) de n columnas o m filas

let matriz=[[1,2,3,4], ['a','b','c','d']]

//Este es una matriz regular de 4x4

console.log(matriz)
console.table(matriz)


console.log("Declaramos una matriz irregular")

const matrizIrregular=[["Juan", "Pedro", "Maria", "Inés"], [true, false, null], [9.2]]

console.log(matrizIrregular)
console.table(matrizIrregular)

//Accediendo a los valores de una matriz

console.log("Leyendo las Propiedades de una Matriz Regular")

console.log(`Elementos en la posición [0][0]: ${matriz[0][0]}`)
console.log(`Elementos en la posición [1][2]: ${matriz[1][2]}`)

//Accediendo a los valores de la matriz irregular

console.log("Leyendo las Propiedades de una Matriz Irregular")

console.log(`Elementos en la posición [0][0]: ${matrizIrregular[0][0]}`)
console.log(`Elementos en la posición [1][2] (¿Es Maria mayor?): ${matrizIrregular[1][2]}`)
console.log(`Elementos en la posición [2][0] (Promedio de Juan): ${matrizIrregular[2][0]}`)

//Funciones y métodos de Arreglos
//los metodos de un objeto siempre son invocados usando un . y su termino se delimitan los parametros entre(), en caso de que no lleve(), no es un metodo, sino una propiedad.

//
console.log("%c4.- Funciones o Métodos de los Arreglos (Array Methos or Array functions)", style_console)
console.log("¿cómo sabemos cuál es el tamaño de un arreglo?")
console.log(`meses es un arreglo de tamaño: ${mesesAnio.length}`)
console.log(`ArregloMixto es un arreglo de tamaño: ${arregloMixto.length}`)

console.log("¿Qué pasa con los multidimensionales?")
console.log(`matriz es un arreglo de tamaño: ${matriz.length}`)
console.log("mmm, eso me da el tamaño de numero de las filas de la matriz, pero cómo saber el número de columna?")
console.log(`matriz regular tiene un numero de ${matriz[0].length}`)


console.log(`Y para la matrizIrregular?`)

//Para saber la dimensión de una matriz irregular podemos hacer el uso del ciclo

let numeroFilas=matrizIrregular.length
for(let i = 0; i < numeroFilas; i++)
    console.log(`La longitud de la fila ${[i]} es = ${matrizIrregular[i].length}`)

console.log("%c5.- Agregar un nuevo elemento a un arreglo (PUSH)", style_console);
let estudiantes= ["Angel Rufino", "Idai Vargas", "Daniel Bravo", "Esther Gonzales", "Ailton Artiaga"]
console.log("Los elementos actuales del arreglo son: ")
console.log(estudiantes)
console.table(estudiantes);
console.log("Agregamos a un nuevo estudiante llamado: Abril Guzman")
estudiantes.push("Abril Guzman")
console.log("Despues de agregarla los elementos del arreglo son: ")
console.table(estudiantes)
console.log("¿Qué pasa con los Mixtos?")
console.log("El arreglo Mixto actualmente tiene los siguientes elementos")
console.table(arregloMixto)
console.log("Agregamos la palabra \"Hola\, como nuevo elemento")
arregloMixto.push("Hola")
console.log("Y tambien agregamos el numero -325125542554555.55856552 siendo este un BigInt")
arregloMixto.push(-325125542554555.55856552)
console.log("Despues de esstas dos operaciones el arreglo queda con los siguentes elementos")
console.table(arregloMixto)

console.log("%c6.- Agregamos un nuevo elemento a un arreglo (UNSSHIFT) en la posiscoón inicaial", style_console);
console.table(estudiantes)
console.log("Ahora agregamos a Abishai Flores, al comienzo del arreglo")
estudiantes.unshift("Abisahi Flores")
console.log("La lista actualizada es: ")
console.table(estudiantes)


console.log("%c7.- Eliminar elementos de un arreglo en la ultima posición (POP)", style_console);
console.log("El arreglo tiene los siguentes elementos")
console.table(estudiantes)
console.log("Para este caso eliminaremos a Abril, el la última posición")
estudiantes.pop();
console.log("Después de eliminar el elemento el arreglo quedo de la siguiente manera")
console.table(estudiantes)

console.log("%c8.- Eliminar elementos de un arreglo en la primera posición (SHIFT)", style_console);
console.log("El arreglo tiene los siguentes elementos")
console.table(estudiantes)
console.log("Para este caso eliminaremos a Abri, el la última posición")
estudiantes.shift();
console.log("Después de eliminar el elemento el arreglo quedo de la siguiente manera")
console.table(estudiantes)

console.log("%c9.- Dividir un arreglo en un arreglo nuevo con posiciones definidas (SPLICE)", style_console);
console.log("El arreglo en un nuevo eliminado cientor elementos en base a su posición")
//Cuando la función splice recibe un solo parametro eliminaralos elementos de esta posición en adelante
estudiantes.splice(2)
console.table(estudiantes)

//Cuando la función splice recibe 2 parámetros elimina todos los elemntos que no están en ese rango
estudiantes.push("Zyanya Zacatenco")
estudiantes.push("Tania Ibarra")
estudiantes.push("Juvenal Viveros")
estudiantes.push("Marcos Ríos")
estudiantes.push("Jonathan Baldemar")
console.log("Se han agregado 5 nuevos estudiantes, por lo que el arreglo es: ")
console.table(estudiantes)
console.log("Ahora ya tenemos los elementos suficientes para aplizar el método splice con dos parámetros que seran 3,5")
estudiantes.splice(3,5)
console.log("Resultado en: ")
console.table(estudiantes)

//Splice sirve también para insertar elementos en posiciones especificas, ahora necesitamos insertar a: "Antonio Ocpaco" ente "Angel Rufino" "Idai Vargas"
console.log("Ahora vamos a insertar a \"Antonio Ocpaco\" en los elementos de la posición 0 y 1")
estudiantes.splice(1,0,"Antonio Ocpaco")
console.log("Resultado en: ")
console.table(estudiantes)

//También splice sirve reemplazar elementos por otros, ene este caso reemplazaremos a "Angel Rufino" por "Brandon Leon"
console.log("Ahora vamos a reemplzar a \"Angel Rufino\" en los elementos de la posición por \"Brandon León\" ")
estudiantes.splice(0,1,"Brandon León")
console.log("Resultado en: ")
console.table(estudiantes)


console.log("%c10.- Métodos para la manipulación de Arreglos INMUTABLES", style_console);
let signosZodiacales = ["Aries", "Tauro", "Geminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"]

//Desestructuración de Arreglos
let [signo1,,signo3,,,,signo7,,,,] = signosZodiacales
console.log(`El primer signo zodicacal es : ${signo1}`)
console.log(`El tercer signo zodicacal es : ${signo3}`)
console.log(`El primer séptimo  zodicacal es : ${signo7}`)

//Congelamos el arreglo volviendolo INMUTABOLE
Object.freeze(signosZodiacales)

//Filtrado de datos
console.log("%c11.- Filtrado de Elemento dentro de un arreglo utilizando el método FILTER", style_console);

console.table(estudiantes)

//Antges de filtrar datos llamemos el arreglo con ID de los elementos
estudiantes.push("Angel Rufino")
estudiantes.push("Esther Gonzales")
estudiantes.push("Tania Ibarra")
estudiantes.push("Jonathan Baldemar")
estudiantes.push("Dulce Balderas")
estudiantes.push("Uriel Medina")
console.table(estudiantes);

Object.freeze(estudiantes);
//Filter es un estado que recorre lo elementos de un arreglo haciendo alguna tarea en especifico, lo que tenemos que considerar es que este nuevo arreglo resultante es un objeto nuevo que puede ser mutable
console.log("Filtrado de los primeros 5 elementos")
let nuevoEstudiantes = estudiantes.filter(num => num<5);
console.table(nuevoEstudiantes)
console.table(filtraPrimeros5(estudiantes))

//Filtrar a los estudiantes que su nombre tenga mas de 15 caracteres 
let nuevoEstudiantesNombre = estudiantes.filter((estudiante) => estudiante.length>15);
console.table(nuevoEstudiantesNombre)

//Intentamos modificar el arreglo inmutable
//estudiantes.pop();
console.table(estudiantes);

//  Intentamos modificar el nuevo arreglo qur no ha sido cogelado
nuevoEstudiantes.unshift("Diego Tecorralco");
console.table(nuevoEstudiantes);

function filtraPrimeros5(arregloEstudiantes)
{
 let listaFiltrada=[]
 for(let i=0; i<5; i++){
    listaFiltrada.push(arregloEstudiantes[i]);
 }
 return listaFiltrada;
}

//Filtrado de Datos - Transformando los datos
console.log("%c12.- Filtrado de Elementos dentro de un arreglo utilizando el método MAP", style_console);
console.log("Imprimimos los elementos actuales de signosZodiacales")
console.table(signosZodiacales)

//Qué podemos hacer si necesitamos el mismo arreglo para ahora con todos sus elementos con letras MAYÚSCULAS 
console.table(signosZodiacales.map(signoZodiacal => signoZodiacal.toUpperCase()));

//Reducción de elemntos de un arreglo, se usa cuando debemos hacer operaciones matematicas o  cuantitativas a un arreglo, como obtener totales, la idea es reducir la lista a un valor más simplificado;
const costosListaCompras = [15,52,50,16,90,32,50,28,105,45,2,94,10];

 //Cómo podemos calcular el total de una lista de costos de un carrito de compras
 console.log("Los precios son: ")
console.table(costosListaCompras)
console.log(`El total de la compra es: ${costosListaCompras.reduce((total, precio) => total+precio,0).toFixed(2)}`);
