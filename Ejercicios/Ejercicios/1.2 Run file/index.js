//Ejercicio 1


//let nombre = "Ismael"; // Asignamos un valor a la variable nombre
//console.log("Hola, " + nombre);

//  Ejercicio 2

// let nombre = "wilbert"; // Una variable que puede ser modificada
// console.log("El nombre es:", nombre);

 // Declaración de una variable con const
// const edad = 21; // Una variable cuyo valor no puede ser modificado
// console.log("La edad es:", edad);

//Ejercicio 3 
// const miArray = [
    // 42,                         // Número
    // "Hola, mundo!",              // Cadena de texto
    // true,                        // Booleano
    // { nombre: "Juan", edad: 30 }, // Objeto
    // [1, 2, 3],                   // Array
   //  function() {                 // Función
      //   console.log("Soy una función dentro de un array!");
   //  }
// ];

// Mostrar los elementos del array en la consola
// console.log("Elemento 1 (Número):", miArray[0]);
// console.log("Elemento 2 (Cadena):", miArray[1]);
// console.log("Elemento 3 (Booleano):", miArray[2]);
// console.log("Elemento 4 (Objeto):", miArray[3]);
// console.log("Elemento 5 (Array):", miArray[4]);

// Llamar a la función dentro del array
// console.log("Elemento 6 (Función):");
// miArray[5]();

// Ejercicio 4 

// function aplicarOperacion(num1, num2) {
//     // Realiza la operación (suma)
//     const resultado = num1 + num2;

//     // Retorna el resultado
//     return resultado;
// }

// // Ejemplo de uso de la función
// const numero1 = 5;
// const numero2 = 10;

// // Llamada a la función y almacenamiento del resultado
// const resultadoOperacion = aplicarOperacion(numero1, numero2);

// // Mostrar el resultado en la consola
// console.log(`El resultado de la operación es: ${resultadoOperacion}`);

//Ejercicio 5

//}}const imprimirEnMayusculas = (texto) => {
   // console.log(texto.toUpperCase());
//};

// Ejemplo de uso
//imprimirEnMayusculas("guillermo"); // Imprime "HOLA MUNDO"



//Ejercicio 6

// Bucle for que imprime los números del 1 al 10
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Ejercicio 7 

//const coche = {
  //   marca: "Ford",
    // modelo: "F-150",
     //año: 2025,
     //color: "Negro",
     //kilometraje: 22000,
     //encendido: false,

     // Método para encender el coche
     //encender: function() {
       //  if (!this.encendido) {
         //    this.encendido = true;
           //  console.log("El coche está encendido.");
        // } else {
          //   console.log("El coche ya está encendido.");
         //}
     //},

     // Método para apagar el coche
     //apagar: function() {
       //  if (this.encendido) {
         //    this.encendido = false;
           //  console.log("El coche está apagado.");
         //} else {
           //  console.log("El coche ya está apagado.");
        // }
     //},

    // Método para obtener la información del coche
     //obtenerInformacion: function() {
       //  return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Color: ${this.color}, Kilometraje: ${this.kilometraje} km`;
    // }
 //};

 // Ejemplo de uso del objeto coche
 //console.log(coche.obtenerInformacion());
 //coche.encender();
 //coche.apagar();

//Ejercicio  8 

// const moto = {
   // marca: "Honda",
   //  modelo: "CBR500R",
   //  anio: 2023,
    // color: "Negro",
    // kilometraje: 5000,
    // encendido: false,

    // Método para encender la moto
    // encender() {
       //  if (!this.encendido) {
          //   this.encendido = true;
          //   console.log(" La moto ha sido encendida.");
       //  } else {
         //    console.log(" La moto ya estaba encendida.");
      //   }
   //  },

    // Método para apagar la moto
    // apagar() {
       //  if (this.encendido) {
        //     this.encendido = false;
         //    console.log(" La moto ha sido apagada.");
       //  } else {
        //     console.log(" La moto ya estaba apagada.");
        // }
    // },

    // Método para obtener la información de la moto
   //  obtenerInformacion() {
       //  return ` Marca: ${this.marca}\n Modelo: ${this.modelo}\n Año: ${this.anio}\n Color: ${this.color}\n Kilometraje: ${this.kilometraje} km`;
    //},

    // Método para imprimir una descripción detallada de la moto
   //  descripcion() {
    //     console.log(`🔷 Esta es una ${this.marca} ${this.modelo} del año ${this.anio}, de color ${this.color} y con un kilometraje de ${this.kilometraje} km.`);
   //  }
// };

// Ejemplo de uso del objeto moto
// console.log(moto.obtenerInformacion());
// moto.descripcion(); // Imprime la descripción de la moto
// moto.encender();
// moto.apagar();


//Ejercicio 10 

// function operacionAsincronica(datos, callback) {
//     console.log("Procesando operación asincrónica...");
    
//     setTimeout(() => {
//         // Simulamos el procesamiento de datos
//         const resultado = `Resultado procesado: ${datos}`;

//         // Llamamos al callback con el resultado
//        callback(null, resultado); // null indica que no hubo error
//     }, 2000); // Simulación de 2 segundos de retraso
// }

//  Uso de la función con un callback
// operacionAsincronica("Datos de prueba", (error, resultado) => {
//     if (error) {
//         console.error("Error:", error);
//     } else {
//       console.log("Operación completada:", resultado);
//     }
// });

//Ejercicio 11 

//function convertirANumero(cadena) {
//     try {
//         // Intenta convertir la cadena a un número
//         let numero = Number(cadena);

//         // Verifica si el resultado es un número válido
//         if (isNaN(numero)) {
//             throw new Error("La cadena no es un número válido.");
//         }

//         console.log(`La conversión fue exitosa: ${numero}`);
//     } catch (error) {
//         // Maneja cualquier error que ocurra
//         console.log(`Error: ${error.message}`);
//     }
// }

// // Ejemplo de uso
// convertirANumero("123");         // Conversión exitosa
// convertirANumero("123.45");      // Conversión exitosa
// convertirANumero("abc");         // Error
// convertirANumero("123abc");      // Error
// convertirANumero("");            // Error (cadena vacía)
