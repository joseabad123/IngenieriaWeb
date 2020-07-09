var nombre = "José";
var apellido = "Abad";
let subtotal = 500;
var descuento;
const iva = 0.12; // declarar constantes
var nombrescompletos= nombre+" "+apellido;

var datos= document.getElementById("Cliente");
var datos2= document.getElementById("Articulos");
var datos3= document.getElementById("Valores");
var random=document.getElementById("Random");
let ran = Math.ceil(Math.random()*100);

//datos encabezado de factura
random.innerHTML=`Factura N° 00${ran}`;
datos.innerHTML=`<h2> Nombre del cliente: ${nombre} ${apellido}</h2>`;//Incrustar datos en string

//Detalle de productos
var productos =['Arroz','Azucar','Harina','Sal','Avena'];
datos2.innerHTML += "<h3> Detalle de productos</h3>";

for(let x=0;x<productos.length; x++){
    datos2.innerHTML += "<ul><li>"+productos[x]; "</li></ul>"
    
}

// otra forma de for
// productos.forEach((producto)=>{
//     document.write(producto+"<br>");
// });

//Cálculo de valores
if (subtotal>=200) {
    datos3.innerHTML="Su monto es mayor a $200 ";
    descuento =0.10;
}else{
    datos3.innerHTML="Su monto es menor a $199 ";
    descuento =0.05;
}

function calculoIva(){
    var calIva = subtotal*iva;
    return calIva;
}

function imprimir(){
    var resIva=calculoIva(subtotal);
    var total=subtotal+resIva;
    datos3.innerHTML +="<br>Su valor de iva a pagar es:"+resIva;
    datos3.innerHTML +="<br>Su valor total de la factura es:"+total;
}

imprimir();