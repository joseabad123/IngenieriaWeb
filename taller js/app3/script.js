var nombre = "José";
var apellido = "Abad";
let subtotal = 0;
var descuento;
const iva = 0.12; // declarar constantes
var nombrescompletos= nombre+" "+apellido;

var datos= document.getElementById("Cliente");
var datos2= document.getElementById("Articulos");
var datos3= document.getElementById("Valores");
var random=document.getElementById("NumFactura");
let ran = Math.ceil(Math.random()*100);

//datos encabezado de factura
random.innerHTML=`Factura N° 00${ran}`;
datos.innerHTML=`<h2> Nombre del cliente: ${nombre} ${apellido}</h2>`;//Incrustar datos en string

//Detalle de productos
var productos =[
                ['Arroz', 5, 12],
                ['Azucar', 4, 8],
                ['Harina', 2, 4],
                ['Sal', 2, 3],
                ['Avena', 3, 6]
                            ];

datos2.innerHTML += "<h3> Detalle de productos</h3>";
datos2.innerHTML = datos2.innerHTML + (productos[0][0] + "<br> Cantidad: " + productos[0][1] +" kilos <br> Valor: $"+ productos[0][2] +"<br>"+ 
    "<br>" + productos[1][0] + "<br> Cantidad: " + productos[1][1] +" kilos <br> Valor: $"+ productos[1][2] +"<br>"+ 
    "<br>" + productos[2][0] + "<br> Cantidad: " + productos[2][1] +" kilos <br> Valor: $"+ productos[2][2] +"<br>"+ 
    "<br>" + productos[3][0] + "<br> Cantidad: " + productos[3][1] +" kilos <br> Valor: $"+ productos[3][2] +"<br>"+ 
    "<br>" + productos[4][0] + "<br> Cantidad: " + productos[4][1] +" kilos <br> Valor: $"+ productos[4][2] +"<br>"+ 
    "</br>");
// console.log(productos[0][2]);

// otra forma de for 
// productos.forEach((producto)=>{
//     document.write(producto+"<br>");
// });

//Cálculo de valores

subtotal =  productos[0][2] +
            productos[1][2] +
            productos[2][2] +
            productos[3][2] +
            productos[4][2] ;

if (subtotal>=20) {
    datos3.innerHTML=`Su monto (${subtotal}) es mayor a $20`;
    descuento =0.10;
} else {
    datos3.innerHTML="Su monto es menor a $19 ";
    descuento =0.05;
}

function calculoIva(){
    var calIva = subtotal*iva;
    return calIva;
}

function imprimir(){
    var resIva=calculoIva(subtotal);
    var total=subtotal+resIva;
    datos3.innerHTML +="<br>Su valor de iva a pagar es: " + resIva;
    datos3.innerHTML +="<br>Su valor total de la factura es: " + total;
}

imprimir();