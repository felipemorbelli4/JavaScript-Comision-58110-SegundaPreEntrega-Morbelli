



let productos = [
    {id: 1, nombre: "Guante Buceo 3 mm", precio: 18000, categoria: "Buceo Deportivo" },
    {id: 2, nombre: "Chaleco Smooth 3mm", precio: 46900, categoria: "Buceo Deportivo"},
    {id: 3, nombre: "Cressi Pro Star", precio: 52897, categoria: "Snorkeling"},
    {id: 4, nombre: "Cressi Quantum", precio: 77266, categoria: "Snorkeling"},
    {id: 5, nombre: "Pino Tokyo 4/3 mm", precio: 154000, categoria: "Surf"},
    {id: 6, nombre: "Pino Raia 3mm", precio: 147285, categoria:"Surf"},
    {id: 7, nombre: "Orca Hydro", precio: 20500, categoria: "Natación"},
    {id: 8, nombre: "Aquon Casco Natacion 3mm", precio: 12500, categoria: "Natación"},
]



let usuario = prompt("Bienvenido, escriba su nombre de usuario por favor, No dejar en blanco. ")
while(usuario === ""){
    alert("Le recomendamos que escriba un nombre de usuario válido, gracias")
    usuario = prompt("Indique su nombre de usuario por favor: ")
}



let mensaje = alert(`Bienvenido ${usuario}`)

let seleccion = prompt(`¿Desea ver la lista de nuestros productos de buceo ${usuario}? \n Si es así escriba Si, de lo contrario, escriba No `) 

while(seleccion != "Si" && seleccion != "No"){
    alert("Por favor, escriba Si o No en el teclado, con la primera letra en mayúsculas.")
    seleccion = prompt("¿Desea ver nuestra lista de productos?")
    
}

if (seleccion === "Si"){
    alert("A continuación elija una opción para seguir: ")
}else if (seleccion === "No"){
    alert(`Gracias por su visita ${usuario}, le dejamos a continuación una lista de opciones por si se arrepiente de su desición:`)
    
} 

let carrito = []


let Lista = "Ponga el respectivo número de lo que desee:\n \n1 - Para ver la lista de los productos\n \n2 - Para ver información de un producto según su ID, verá el precio del producto\n \n3 - Agregar un producto al carrito\n \n4 - Filtrar por categoría\n \n5 - Finalizar compra\n \n6 - Para salir"


let opcion 



do {
    opcion = Number(prompt(Lista))
    if (opcion === 1){
        alert("Haga click en Aceptar para volver a las opciones\n\n" + listarProductos (productos))

    } else if (opcion === 2){
        let id = Number(prompt("Ingrese el ID correspondiente para ver su precio\n\n " + listarProductos(productos)))
        idProducto(id)
        
    }else if (opcion === 3){
        let id = Number(prompt("Ingrese el ID correspondiente para agregar al carrito, una vez agregado volverá a las opciones.\n\n " + listarProductos(productos)))
        agregarAlCarrito(carrito, id)

    }else if (opcion == 5){
        let total = carrito.reduce((acum, producto) => acum + producto.subtotal, 0)
        alert("El total a pagar es: ")

    }
} while(opcion !=6)


// Funcion para opcion 1
function listarProductos (productos){
    let miLista = productos.map(producto => `Nombre: ${producto.nombre} - ID: ${producto.id} - Categoria: ${producto.categoria} `).join("\n")
    
    return  miLista
}


// Funcion para opcion 2
function idProducto (id){
    let idElegido = productos.find(producto => producto.id === id)
    alert(`Nombre: ${idElegido.nombre} - Precio: ${idElegido.precio}`)

    
}


//Funcion para opcion 3
function agregarAlCarrito(carrito, id){
    let idElegido = productos.find(producto => producto.id === id)
carrito.push(idElegido)

    console.log(carrito)
    
}


















//Funcion para opcion 5

