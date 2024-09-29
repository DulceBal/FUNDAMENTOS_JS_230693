//Repaso objetos

const bg= "linear-gradient(11deg, rgba(2,0,36,1)0%, rgba(9,9,121,1)33%, rgba(0,212,255,1)86%)";
const style_console = `background: ${bg}; color:white; border-radius: 6px; padding:4px; font-size:1.0rem; font-weight:bold`

 
//Personalización de las salidas  consola
console.warn("Practica 05: Repaso de Objetos en JavaScript")

//VARIABLES INDEPENDIENTES
console.log("%c1.- variables independientes", style_console);

//Declaramos valores independientes relacionadoas a un PRODUCTO
let Producto_Nombre= "Computadora Gammer Laptop 17\"";
let Producto_Marca= "ASUS";
let Producto_Modelo= "TUF 17";
let Producto_Precio= 15749.50;
let Producto_Disponibilidad= true;
let Producto_SKU= Symbol("tuuf707w-hx221w");
let Producto_Stock= 15;
let Producto_Imagen= null;
let Producto_Barcode;
let Producto_Categorias= ["Electronicos", "Computción", "Gamming", "Promociones Buen Fin", "Mejor valorados"];

//Accedemos a los valores de ñas  caracteristicas del producto de manera independiente
console.log(`Los datos del producto son: \n
Nombre: ${Producto_Nombre} Tipo de dato <${typeof(Producto_Nombre)}>
Marca: ${Producto_Marca} Tipo de dato <${typeof(Producto_Marca)}>
Modelo: ${Producto_Modelo} Tipo de dato <${typeof(Producto_Modelo)}>
Precio: ${Producto_Precio} Tipo de dato <${typeof(Producto_Precio)}>
Disponibilidad: ${Producto_Disponibilidad} Tipo de dato <${typeof(Producto_Disponibilidad)}>
Stock: ${Producto_Stock} Tipo de dato <${typeof(Producto_Stock)}>
Barcode: ${Producto_Barcode} Tipo de dato <${typeof(Producto_Barcode)}>
Imagen: ${Producto_Imagen} Tipo de dato <${typeof(Producto_Imagen)}>
Categorias: ${Producto_Categorias} Tipo de dato <${typeof(Producto_Categorias)}>`)

console.log("En el caso del SKU al ser un Symbol, no se puede concatenar a la cadena de impresion anterior");
console.log(Producto_SKU);
console.log(typeof(Producto_SKU));

//Ahora lo declaramos como un OBJETO
console.log("%c2.- objeto", style_console)
let Producto=
{
    Nombre: "Tenis deportivos",
    Marca: "Nike",
    Modelo:"Jordan '24",
    Precio: 3361.25,
    Disponibilidad: false,
    Stock: 0,
    SKU: "DZ54596-612",
    Imagen: "ASSETS",
    Barcode: null,
    Categorias: ["Deportivos", "Juvenil"]
}

//Ahora leemos el objeto completo 
console.table(Producto);

//Para acceder s las propiedades del objeto utilizamos un "." y el nombre de la propiedad a leer.
console.log("Accediendo a propiedades especificas del PRODUCTO")
console.log(`Nombre Completo del PRODUCTO: ${Producto.Nombre} ${Producto.Marca}
    ${Producto.Modelo}`)
console.log(`Precio: ${Producto.Precio}`)
if (Producto.Disponibilidad==0)
console.log(`Estatus: Agotado`)
else
console.log(`Estatus: ${Producto_Stock} Unidades disponibles`);

console.log("%c3.- Destructuración de Objetos", style_console);
let  Producto2=
{
    ID: 30525,
    Clave:316,
    Nombre: "Tenis deportivLentes para sol",
    Marca: "Oakley",
    Modelo:"QNTM Kato",
    Precio: 6829.25,
    Disponibilidad: true,
    Stock: 5,
    SKU: "000958ID-0656",
    Imagen: "ASSETS",
    Barcode: 888395645896,
    Categorias: ["Deportes", "Lentes", "Mujer", "Accesorios"]
}
let Comprador=
{
    Clave:3216,
    Nombre: "Dulce",
    Apellidos: "Balderas Gomez",
    Tipo:"Frecuente",
    Correo: "dulce123@gmail.com",
    PaisOrigen: "Mexico",
    SaldoActual: 14000.20
}
let Pedido=
{
    ID: 305,
    Procuto_Clave:316,
    Comprador_Clave: 3216,
    Cantidad: 2,
    Estatus:"Carrito de compra",
}

//En base a los 3 Objetos necesitamos calcular el costo de a compra y su le alcamza con sus saldos a favor
let {Precio: Producto_Precio2}=Producto2;
let {Cantidad: Pedido_Cantidad}=Pedido;
let {SaldoActual: Cliente_SaldoActual}=Comprador;
let Costo_Compra=Producto_Precio2*Pedido_Cantidad;

console.log(`El cliente ha agregado a su carrito de compreas ${Pedido_Cantidad} unidades, con un costo total de: $${Costo_Compra}`);
if (Costo_Compra<Cliente_SaldoActual)
    console.log("El cliente tiene saldo insuficiente")

//Actualizar el valor de los objetos
console.log("%c4.- Actualización de los valores de las pro´piedades de un objetos", style_console);

console.log(`El objeto actualmente tiene las siguemntes valores ${Producto2}`)
console.log(JSON.stringify(Producto2, null, 2))

console.log(`Por cuestiones de inflación el costo del producto ha cambiado y debe ser actualizado... de $6829.25 a $6900.30`)

//Par modificar el valor de un objeto hasta con igualar el nuevo valor de la proepiedad deseada
Producto2.Precio=6900.30;
console.log(`Los nuevos valores del Producto son:`)
console.log( Producto2)

//¿Puede cambiar no solo el valor, sino el tipo de dato de un Objeto en JavaScript
console.log(`----------------------------------------------------------------------------`)
console.log(`El objeto actualmente tiene los siguentes valores`)
let tipoDisponibilidad = typeof(Producto.Disponibilidad)
console.log(`El tipo de dato de la disponibilidad es: ${tipoDisponibilidad}`)
console.log(JSON.stringify(Producto2, null, 2)); //Disponibilidad booleano
Producto2.Disponibilidad="Si";
let nuevoTipoDisponibilidad=typeof(Producto2.Disponibilidad)
console.log(Producto2);
console.log(`El nuevo tipo de dato de la disponibilidad es: ${nuevoTipoDisponibilidad}`)

//Agregar nuevas propiedades al obejto
console.log("%c5.- Agregar nuevas propiedades al objeto", style_console);
// Para agregar una nueva propiedad utiloizaremos el nombre del objeto lod corchetes [] y el nuevo de la propiedad con su valor por defecto
console.log("Los datos actuales del comprador son: ")
console.table(Comprador)
Comprador['Direccion']="Av. Benito Juárez No. 1252, Interios 4D, Xicotepec de Juárez Puebla, Mexico"
Comprador['Tipo']="Nuevo Cliente"
Comprador['ActividadReciente']=true
Comprador['TotalCompras']=3516.25
console.log("Despues de haber agregado las propiedades Dirección, Tipo, ActividadReciente  y TotalCompras.....")
console.table(Comprador)

//Eliminar propiedades exitentes de un objeto
console.log("%c6.- Eliminar propiedades axistentes de un objeto", style_console);
console.log("La estructur y los valores del objeto PEDIDO son previos a la modificación: ")
console.table(Pedido)
delete Pedido.TipoPago
console.log("")

console.log("%c7.- Metodos para controlar la mutabilidad de los objetos, Congelación (FREEZE", style_console);

//Si deseamos no permitir que los objetos seqan modificación ni en estructura, si es valor, utilizaremos el metodo FREESE (congelado)
console.log(`La estructura actual del objeto COMPRADOR es:`)
console.table(Comprador)
Object.freeze(Comprador)
//Intentamos agregar, elimiar o modificar los valores de sus propiedades
Comprador.FechaUltimaCompra = "05/09/2024 10:15:25"
delete Comprador.Tipo;
Comprador.Direccion="Calle 16 de Septiembre =102, Col. Manantiales Huauchinango, Puebla, Mexico";
console.log(`Verificación si se realizaron los cambios en el Objete COMPRADOR`)
console.table(Comprador)

console.log("%c8.- Metodos para controlar la mutabilidad de los objetos Sellado (SEAL)", style_console);
//Sin embargo en el caso que deseemos poder modificar los valores de las propiedades del objeto, pero no se estructura, suamos SEAL
console.log("Objeto antes de ser modificado: ")
console.table(Pedido)
//Sellamos el objeto
Object.seal(Pedido)
//Intentamos modificar su estructura 
Pedido['FechaPedido']="25/09/2024 11:05:03"
delete Pedido['Cantidad']
console.log(`Verificación si se realizaron los cambios en el Objeto PEDIDO: `)
console.table(Pedido)
//Ahora intentamos modificar el valor de las propiedades 
Pedido.Cantidad=5
console.log(`Verificación si se realizaron los cambios en el Objeto PEDIDO: `)
console.table(Pedido)

//Desestructuracion de 2 o mas objetos
console.log("%c9.- Desestructuración de 2 o mas objetos", style_console);

let {Precio: productoPrecio, Marca: ProductoMarca}= Producto
let {Correo: clienteCorreo, PaisOrigen: clientePais, SaldoActual: clienteSaldo, Tipo: clienteTipo}= Comprador

//Transformar valores cuantitativos en cualitativos
if(productoPrecio>2000)
    productoPrecio="Caro"
else
productoPrecio="Barato"

if(clienteSaldo>0)
    clienteSaldo="A favor"
else if (clienteSaldo<0)
 clienteSaldo="Sin deuda"

//Transfromar valores cualitativos en cuantitativos
let clienteNivel;
if(clienteTipo=="Premium")
    clienteNive=1
if(clienteTipo=="Freemium")
    clienteNive=2
if(clienteTipo=="No identificado")
    clienteNivel=3

//Clasificación al cliente por su País de Origen 
if(clientePais>"México")
    clientePais="Nacional"
else
    clientePais="Extranjero"

//OLE - Object Literal Ennhacement 
 let datosClientePromociones = {clienteCorreo, clientePais, clienteNivel, clienteSaldo, ProductoMarca, productoPrecio}

 //El nuevo objeto que creamos seria un ejemplo de la información que enviaremos al area de Marketing para la difusión de promociones
 console.log("Los satos del cliente y sus hábitos de compra son : ")
 console.table(datosClientePromociones)

 //Operaciones sobre Objetos
 //Union de objetos
 console.log("%c10.- Unión de Objetos usando el método de asignación (ASSING)", style_console)
 console.log("Imprimimos la estructura y los valores del Objeto PRODUCTO")
 console.table(Producto);

 console.log("Imprimimos la estructura y los valores del objeto PEDIDO ")
 console.table(Pedido);
 //Suponiendo que el usuario ya realizo el pagp el pedido se convertira en una venta que requiere informcaión de ambos objetos
 const venta= Object.assign(Producto, Pedido);
 console.log("Consultamos este nuevo objeto VENTA")
 console.table(venta)


