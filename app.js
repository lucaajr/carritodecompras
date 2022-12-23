const productos = [ 
    {nombre: "Corona 710", precio: 550},
    {nombre: "Fernet Branca", precio: 1600},
    {nombre: "Smirnoff", precio: 1400},
    {nombre: "Absolut", precio: 3800},
    {nombre: "Renaissance Extra Brut", precio: 800},
];

let carrito =  []

let seleccion = prompt ("Hola, desea comprar algún producto, colocar si o no.")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor, ingresar si o no")
    seleccion = prompt ("Hola, desea comprar algún producto, colocar si o no.")
}

if(seleccion == "si"){
    alert("A continuación verá nuestra lista de productos")
    let todoslosProductos = productos.map(
        (producto) => producto.nombre + " " + "$" + producto.precio);
    alert(todoslosProductos.join(" - "))
} else if (seleccion == "no"){
    alert("Gracias por venir, hasta pronto!")
}

while(seleccion != "no"){
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0

    if(producto == "Corona 710" || producto == "Fernet Branca" || producto == "Smirnoff" || producto == "Absolut" || producto == "Renaissance Extra Brut") {
        switch(producto) {
            case "Corona 710":
                precio = 550;
                break
            
            case "Fernet Branca":
                precio = 1600;
                break
            
            case "Smirnoff":
                precio = 1400;
                break

            case "Absolut":
                precio = 3800;
                break

            case "Renaissance Extra Brut":
                precio = 800
                break
            default:
                break;        
        }
        let unidades = parseInt (prompt("Cuantas unidades quiere agregar."))

        carrito.push({producto, unidades, precio})
        console.log(carrito)
    } else {
        alert("No tenemos ese producto disponible.")
    }

    seleccion = prompt ("Desea seguir agregando productos?")
    
    while (seleccion === "no"){
        alert("Gracias por su compra! Vuelva pronto.")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce((acc,el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por su compra es de: ${total}`)