// EJERCICIO 1: 
// Funcion para calcular la nueva altura de Alicia
function calcularAltura(altura, pocion) {
    const reduccion = pocion * 2;
    const alturaFinal = altura - reduccion;

    return alturaFinal;
}

// Funcion que procesa el formulario de la pocion
function procesarPocion(evento) {
    evento.preventDefault();

    const altura = Number(
        document.getElementById("alturaInicial").value
    );

    const pocion = Number(
        document.getElementById("cantidadPocion").value
    );

    const resultado = document.getElementById("resultadoPocion");

    // Validar la altura inicial
    if (!Number.isFinite(altura) || altura <= 0 || altura > 1000) {
        resultado.textContent =
            "Error: la altura debe ser mayor que 0 y no superar 1000 cm.";
    }

    // Validar la cantidad de pocion
    else if (
        !Number.isFinite(pocion) ||
        pocion < 0 ||
        pocion > 100
    ) {
        resultado.textContent =
            "Error: la pocion debe estar entre 0 y 100 ml.";
    }

    else {
        const alturaFinal = calcularAltura(altura, pocion);

        // Comprobar que el resultado tenga sentido
        if (alturaFinal <= 0) {
            resultado.textContent =
                "¡Ups! La pocion es demasiado fuerte. " +
                "La altura final no puede ser cero ni negativa. " +
                "Prueba con otra cantidad.";
        }

        else if (alturaFinal <= 100) {
            resultado.textContent =
                "¡Felicidades, Alicia! Puedes atravesar la puerta. " +
                "Tu altura inicial era de " + altura + " cm. " +
                "Bebiste " + pocion + " ml de pocion y ahora mides " +
                alturaFinal + " cm. ¡Bienvenida al jardin!";
        }

        else {
            resultado.textContent =
                "¡Todavia no, Alicia! No puedes atravesar la puerta. " +
                "Tu altura final es de " + alturaFinal +
                " cm y la puerta mide 100 cm. " +
                "Necesitas reducir un poco mas tu tamaño.";
        }
    }
}

// Detectar el envio del formulario
document.getElementById("formularioPocion")
    .addEventListener("submit", procesarPocion);


/*EJERCICIO 2:*/

// Funcion para obtener el precio con switch
function obtenerPrecio(bebida) {
    let precio;

    switch (bebida) {
        case "te":
            precio = 5;
            break;

        case "limonada":
            precio = 7;
            break;

        case "chocolate":
            precio = 10;
            break;

        case "jugo":
            precio = 8;
            break;

        default:
            precio = -1;
    }

    return precio;
}

// Funcion para procesar la compra
function procesarMerienda(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombreInvitado")
        .value.trim();

    const bebida = document.getElementById("tipoBebida").value;

    const cantidad = Number(
        document.getElementById("cantidadTazas").value
    );

    const resultado = document.getElementById("resultadoMerienda");

    // Validar el nombre
    if (nombre === "") {
        resultado.textContent =
            "Error: debes escribir el nombre del invitado.";
    }

    // Validar la bebida
    else if (
        bebida !== "te" &&
        bebida !== "limonada" &&
        bebida !== "chocolate" &&
        bebida !== "jugo"
    ) {
        resultado.textContent =
            "Error: debes seleccionar una bebida del menu.";
    }

    // Validar la cantidad de tazas
    else if (
        !Number.isInteger(cantidad) ||
        cantidad < 1 ||
        cantidad > 20
    ) {
        resultado.textContent =
            "Error: la cantidad debe ser un entero entre 1 y 20.";
    }

    else {
        const precio = obtenerPrecio(bebida);

        // Calcular el subtotal
        const subtotal = precio * cantidad;

        let descuento = 0;

        // Aplicar descuento a partir de 5 tazas
        if (cantidad >= 5) {
            descuento = subtotal * 0.10;
        }

        const total = subtotal - descuento;

        let nombreBebida;

        switch (bebida) {
            case "te":
                nombreBebida = "Te magico";
                break;

            case "limonada":
                nombreBebida = "Limonada del Gato";
                break;

            case "chocolate":
                nombreBebida = "Chocolate encantado";
                break;

            case "jugo":
                nombreBebida = "Jugo de fresas";
                break;
        }

        // Mostrar el resumen de la compra
        resultado.textContent =
            "¡Bienvenido/a a la merienda, " + nombre + "!\n\n" +
            "Bebida: " + nombreBebida + "\n" +
            "Cantidad de tazas: " + cantidad + "\n" +
            "Precio por taza: Bs " + precio.toFixed(2) + "\n" +
            "Subtotal: Bs " + subtotal.toFixed(2) + "\n" +
            "Descuento: Bs " + descuento.toFixed(2) + "\n" +
            "TOTAL A PAGAR: Bs " + total.toFixed(2) + "\n\n" +
            (descuento > 0
                ? "¡Has conseguido el descuento del 10 %!"
                : "Compra 5 tazas o mas para obtener un descuento.");
    }
}

// Detectar el envio del formulario
document.getElementById("formularioMerienda")
    .addEventListener("submit", procesarMerienda);


/*EJERCICIO 3:*/

// Funcion que analiza los numeros de las cartas
function analizarCartas(cantidad) {
    let sumaPares = 0;
    let sumaImpares = 0;

    let cantidadPares = 0;
    let cantidadImpares = 0;

    let listaPares = "";
    let listaImpares = "";

    let secuencia = "";

    // Recorrer los numeros desde 1 hasta la cantidad indicada
    for (let numero = 1; numero <= cantidad; numero++) {
        secuencia += numero;

        if (numero < cantidad) {
            secuencia += ", ";
        }

        // Clasificar el numero como par o impar
        if (numero % 2 === 0) {
            sumaPares += numero;
            cantidadPares++;

            if (listaPares !== "") {
                listaPares += ", ";
            }

            listaPares += numero;
        }

        else {
            sumaImpares += numero;
            cantidadImpares++;

            if (listaImpares !== "") {
                listaImpares += ", ";
            }

            listaImpares += numero;
        }
    }

    let ganador;

    // Comparar las sumas de ambos grupos
    if (sumaPares > sumaImpares) {
        ganador = "¡Ganan las cartas pares!";
    }

    else if (sumaImpares > sumaPares) {
        ganador = "¡Ganan las cartas impares!";
    }

    else {
        ganador = "¡Empate! Ambos grupos tienen la misma suma.";
    }

    // Devolver todos los resultados
    return {
        secuencia: secuencia,
        listaPares: listaPares || "Ninguno",
        listaImpares: listaImpares || "Ninguno",
        cantidadPares: cantidadPares,
        cantidadImpares: cantidadImpares,
        sumaPares: sumaPares,
        sumaImpares: sumaImpares,
        ganador: ganador
    };
}

// Funcion que procesa el formulario de la Reina
function procesarReina(evento) {
    evento.preventDefault();

    const cantidad = Number(
        document.getElementById("cantidadCartas").value
    );

    const resultado = document.getElementById("resultadoReina");

    // Validar el numero de cartas
    if (
        !Number.isInteger(cantidad) ||
        cantidad < 1 ||
        cantidad > 100
    ) {
        resultado.textContent =
            "Error: debes ingresar un numero entero entre 1 y 100.";
    }

    else {
        const datos = analizarCartas(cantidad);

        // Mostrar el resultado del analisis
        resultado.textContent =
            "¡La Reina ha recibido tu analisis!\n\n" +
            "Secuencia completa: " + datos.secuencia + "\n\n" +
            "CARTAS PARES\n" +
            "Numeros: " + datos.listaPares + "\n" +
            "Cantidad: " + datos.cantidadPares + "\n" +
            "Suma total: " + datos.sumaPares + "\n\n" +
            "CARTAS IMPARES\n" +
            "Numeros: " + datos.listaImpares + "\n" +
            "Cantidad: " + datos.cantidadImpares + "\n" +
            "Suma total: " + datos.sumaImpares + "\n\n" +
            datos.ganador;
    }
}

// Detectar el envio del formulario
document.getElementById("formularioReina")
    .addEventListener("submit", procesarReina);
