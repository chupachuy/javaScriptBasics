
/* Funcion que determina si un numero es primo (aquel que es solo divisible por si mismo y por Uno, miFuncion(10,1), devlvera true; */

const numeroPrimo = (numero = undefined) =>{

    if(numero === undefined) return console.warn("No ingresaste un Numero");

    if(typeof numero !== "number") return console.error(`El valor "${numero}" Ingresado.No es un numero`);

    if( numero === 0) return console.error("El numero no puede ser 0");

    if( numero == 1) return console.warn("El numero debe ser diferente a 1");

    if(Math.sign(numero) === -1) return console.error("El numero no puede ser Negativo");

    let divisible = false;

    for(let i = 2; i < numero; i++){
        if((numero  % i) === 0){
            divisible = true;
            break;
        }
    }

    return (divisible) ? console.log(`El numero ${numero} NO es primo`): console.log(`El numero ${numero} SI es primo`);

}

/*numeroPrimo();
numeroPrimo("5");
numeroPrimo(true);
numeroPrimo(0);
numeroPrimo(1);
numeroPrimo(-1);
numeroPrimo(13);*/


/*Programa una funcion si un numero es PAr o IMPAR  miFuncion(29) devilvera impar*/

const numeroPar = (numero = undefined) => {

    if( numero === undefined) return console.warn("NO ingresaste un numero");

    if(typeof numero !== "number") return console.error(`El valor del numero ${numero} ningresaro. No es un numero`);


    return( (numero % 2) === 0)? console.log(`El numero ${numero} es Par`): console.log(`El numero ${numero} es Impar`);

}

/*numeroPar();
numeroPar(188);*/


/** Programa una funciom para convertir los grados Celsius a Farenheit y viseversa. pe. mifuncion(0, "C") devolvera 32°F */

const convertirGrados = ( grados = undefined, unidad = undefined) =>{

    if( grados === undefined) return console.warn("No ingresate grados para convertir");

    if( typeof grados !== "number") return console.error(`El valor de "${grados}" ingresado. NO es un numero valido`);

    if(unidad === undefined) return console.warn("NO ingresaste el tipo de grado a convertir");

    if(typeof unidad !== "string") return console.error(`El valor "${unidad}" ingresado: NO es una cadena de Texto`);

    if(unidad.length !== 1 || !/(C|F)/.test(unidad))  console.warn("Valor de unidad no reconocido");


    if( unidad === "C"){
        return console.info(`${grados}°C = ${Math.round((grados *(9/5) + 32 ))}°F`);
    }else if( unidad === "F"){
        return console.info(`${grados}°C = ${Math.round((grados -32) *(5/9) )}°F`);
    }else{
        return concolse.warn("El tipo de grados no es valido");
    }
    //console.info("Funciona");
}

// convertirGrados( 32, "F");

/**  Programar una funcion para convertir numeros de base binaria a decimal y viceversa. pe, miFuncio(100, 2) devolvera 4 base 10 */


const converirBinario = (numero = undefined, base = undefined)=>{

    if(numero === undefined) return console.warn("no ingresaste el numero a Convertir");

    if(typeof numero !== "number") return console.error(`El ${numero} no es valor valido`);

    if(base === undefined) return console.warn("no ingresaste el numero a Convertir");

    if(typeof base !== "number") return console.error(`El ${base} no es valor valido`);

    if(base === 2){
        return console.log(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
    }else if(base === 10){
        return console.log(`${numero} base ${base} = ${numero.toString(2)} base 2`);
    }else{
        return console.log("El tipo de base a convertir no es valido");
    }

}
//converirBinario(114, 3);

//** Programa una funcion qeu devuelca el monto final despues de aplicar un descuento a una cantidad ddad. pe. miFuncion(1000, 20) devolvera 800 */


const aplicarDescuento = (monto = undefined, descuento = 0) =>{

    if(monto == undefined) return console.warn("NO ingresaste Monto");
    if(typeof monto !== "number") return console.error(`El valor de ${monto} ingresado. NO es un numero`);

    if(Math.sign(monto) === -1) return console.error("El monto no puede ser Negativo");

    if(typeof descuento !== "number") return console.error(`El valor de ${descuento} ingresado. NO es un numero`);

    if(Math.sign(descuento) === -1) return console.warn(`El valor de descuento no tiene uqe ser negativo`);

    return console.info(`${monto} - ${descuento}% = ${monto-((monto * descuento)/100)}`);

}
//aplicarDescuento(1000, 25);

//** PRograma una funcion qeu dad una fecha valida que determine cuantos años han pasado desde el de de hoy. pe. miFuncion(1984,4,23) decolvera 36 años (en 2023)*/

const calcularAnios = (fecha = undefined) => {

    if(fecha === undefined) return console.warn("no enviaste ninguna fecha");

    if(!(fecha instanceof Date)) return console.error(`El valor que ingresaste noes una fecha valida.`);

    let hoyMenosFecha = new Date().getTime() - fecha.getTime();

    aniosEnMS = 1000 * 60 * 60 * 24 * 365;
    aniosHUmanos = Math.floor(hoyMenosFecha / aniosEnMS);

    return (Math.sign(aniosHUmanos) ===  -1)
        ? console.info(`Faltan ${Math.abs(aniosHUmanos)} años humanos para el ${fecha.getFullYear()}`)
        : (Math.sign(aniosHUmanos) === 1)
        ? console.info(`Han pasado ${aniosHUmanos} desde ${fecha.getFullYear()}`): console.info(`Estamos en el año actual ${fecha.getFullYear()}`);

}

/*calcularAnios();
calcularAnios(new Date(2031,11,24));*/

/*** PRograma una funcion qeu dado un array numerico devuelve otro arrray con los numeros elevados a cuadrado. pe. mi funcion(1,4,5) devuelvera [1, 16, 25] */


const devolverCuadrados = (arr = undefined) =>{
    if(arr === undefined) console.warn("NO has ingresado ninugn Array");

    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no ees un Arreglo");

    if(arr.length === 0)return console.error("El Arreglo es igual a 0");

    for (let num of arr) {
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado. NO es un numero`);
    }

    const newArr = arr.map(el => el * el); 

    return console.info(`El Arreglo original"${arr}". Arreglo elevado al cuadrado "${newArr}"`);

}

/* devolverCuadrados([3,6,9]); */

/** Programa una funcion qeu dado un un array devuelva el numnero mas alto y el mas bajo  de dicho Array . pe. miFuncion(1, 4, 5 ,99, -60) devolvera (99, -60)  */

const arrayMinMax = (arr = undefined) => {
    if(arr === undefined) return console.warn("NO ingresaste un Array de numeros");

    if(!(arr instanceof Array)) return console.error("El valor que agregaste no es un arreglo");

    if( arr.length === 0) return console.warn("EL arreglo esta vacio");

    for (const num of arr) {
        if(typeof num !== "number") return console.warn(`El valor "${num}" nigresado. No es un numero`);
    };

    return console.info(`Àrreglo original "${arr}". Valor mayor ${Math.max(...arr)} y el Valor menor es ${Math.min(...arr)}.`);


}


//arrayMinMax([1, 4, 5, 99, -60]);
//arrayMinMax([1, 4, 5, true, -60]);

/** PRograma una funcion que dado un Array de numeros devuelva un objeto con 2 arreglos en el primero alamcena los numeros pares y en el segundo los impares. pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolvera pares: [2,4,6,8,0]; y en el segundo impares [1,3,5,7,9]  */

const obtenerParesImpares = ( arr = undefined) => {

    if(arr === undefined) return console.warn("no ingresaste un array con numeros");

    if(!(arr instanceof Array)) return console.warn("El valor que agregaste no es un arreglo");

    if(arr.length === 0) return console.warn("El Arreglo esta vacio");

    for( const num of arr){
        if(typeof num !== "number") return console.error(`El valor ${num} no es un numero.`);
    }

    return console.info({
        pares: arr.filter(num => num%2 === 0),
        impares: arr.filter(num => num%2 === 1)
    });
}

//obtenerParesImpares([1,2,3,4,5,6,7,8,9,0]);

/** Programa una funcion  que dado un arreglo de numeros devuelva un objeto con dos arreglos el primero tendra los numeros en forma ascendente y el segundo en forma descendente. pe. minfuncion([7,5,7,8,6]) devolvera (asc [5,6,7,7,8] des[8,7,7,6,5] ) */

const ordernarArreglo = (arr = undefined) => {

    if(arr === undefined) return console.warn("NO ingresaste un Arreglo de numeros");

    if(!(arr instanceof Array)) return console.warn("El valor que ingresaste no es un arreglo");

    if(arr.length === 0) return console.warn("El array esta vacio");

    for(let num of arr){
        if(typeof num !== "number") return console.warn(`El valor ${num} ingresaro. NO es un numero`);
    }

    return console.info({
        arr,
        asc: arr.map(el => el).sort(),
        desc: arr.map(el =>el).reverse()

    });

}

// ordernarArreglo([7,5,7,8,6]);

/*** Programa una funcion que dado un Arreglo de elementos elimine los duplicados. pe miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devvolvera  ["x", 10, 2, "10", true] */

const quitarDuplicados = (arr = undefined) => {

    if(arr === undefined) return console.warn("NO ingresaste un array");

    if(!(arr instanceof Array)) return console.warn("el valor ue ingresaste no es un Arreglo");

    if(arr === 0) return console.warn("El arreglo esta vacio"); 

    if(arr === 1) return console.warn("El arreglo debe de tener mas de dos elementos");

    console.info({
        original: arr,
        //sinDuplicados: arr.filter((value, index, self) => self.indexOf(value) === index)
        sinDuplicados: [...new Set(arr)]
    });

}

//quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);


/** Programa una funcion qeu dado un arreglo de numero obtenga el promedio. pe miFuncion(9,8,7,6,5,4,3,2,1,0) devolvera 4.5*/


const promedio = (arr = undefined) => {

    if(arr === undefined) return console.warn("NO ingresaste un array");

    if(!(arr instanceof Array)) return console.warn("el valor ue ingresaste no es un Arreglo");

    if(arr === 0) return console.warn("El arreglo esta vacio"); 

    for (let num of arr){
        if(typeof num !== "number") console.warn(`El elemento ${num} no es un numero`);
    }

    return console.info(
        arr.reduce((total, num, index, arr) => {
            total += num;
            if(index === arr.length- 1){
                return `El promedio de ${arr.join(" + ")} es ${total / arr.length}`;
            }else{
                return total;
            }
        } )
    );

}


//promedio([7,6,5,4,3,2,1,0])

/*** Progreamar un sistema que traiga datos de la pagina de INBD peliculas de cine */

class Pelicula{

    constructor({id,titulo, director, estreno, pais, generos, calificacion}){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;
        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);

    }

    static get listaGeneros(){
        return ["Action", "Adult", "Adventure", "Animation", "Comedy"];
    }

    static generosAceptados(){
        return console.info(`los Generos Aceptados son ${Pelicula.listaGeneros.join(", ")}`);
    }

    /** VALIDACIOJES SIMILARES  */

    validarCadena(propiedad, valor){

        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio"`);

        if(typeof valor !== "string") return console.warn(`${propiedad} "${valor}" ingresado. NO es una cadena de texto`);

        return true;

    }

    validarNumero(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio!`);

        if(typeof valor !== "number") return console.error(`${propiedad} "${valor}" no es un Numero`);
    }

    validarlongitudCadena(propiedad, valor, longitud){
        if(valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el numero de caracteres permitido ${longitud}`);
    }


    validarArreglo(propiedad, valor){

        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio.`);

        if(!(valor instanceof Array)) return console.warm(`${propiedad} "${valor}" ingresado no es un Areglo.`);

        if(valor.length === 0) return console.error(`${propiedad} "${valor}" NO tiene datos`);

        for(let cadena of valor){
            if(typeof cadena !== "string") return console.error(`El valor ${cadena} ingresado. NO es una cadena de texto`);
        }


    }

    /** */

    /*** Valida que los dos primeros sean minusculas y los restantes 7 numeros  */
    
    validarIMDB(id){
        if(this.validarCadena("iMDB id", id)){
            /*console.log(id);
            console.log("id es de tipo "+ typeof id);*/
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id))) return console.error(`iMDB id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros minusculas, los 7 restantes numeros`);
            
        }
    }

    validarTitulo(titulo){
        if(this.validarCadena("Titulo", titulo)){
          this.validarlongitudCadena("Titulo", titulo, 100);
        }
    }

    validarDirector(director){
        if(this.validarCadena("Director", director)){
          this.validarlongitudCadena("Director", director, 50);
        }
    }

    validarEstreno(estreno){
        if(this.validarNumero("Año de estreno", estreno))
            if(!(/^([0-9]){4}$/.test(estreno))) return console.error(`Año de estreno "${estreno}" no es valido. debe de ser un nuero de 4 digitos`);
    
    }

    validarPais(pais){
        this.validarArreglo("País", pais);
    }
    
    validarGeneros(generos){
        if(this.validarArreglo("Generos", generos)){
            for(let genero of generos){
                console.log(genero, Pelicula.listaGeneros.includes(genero));
            }
            if(!(Pelicula.listaGeneros.includes(genero))){
                return console.error(`Generos Incorrectos ${generos.join(", ")}`);
                //Pelicula.generosAceptados();
            }
        }

    }

    validarCalificacion(calificacion){
        if(this.validarNumero("Calificacion", calificacion)){
            return (calificacion < 0 || calificacion > 10)? console.error("la calificacion tiene que estar comprendida entre 0 y 10"): this.calificacion = calificacion.foFixed(1);
        }
    }

    fichaTecnica(){

    }
}

//Pelicula.generosAceptados();
/*const peli = new Pelicula({
    id: "tt1234567",
    titulo: "Eterno resplandor de una mente sin recuerdo",
    director: "Jesus Lopez Velazquez",
    estreno: 20205,
    pais: ["Mexico", "EE.UU"],
    generos: ["Actiones"],
    calificacion: 11

});*/

const misPelis = [
    {
        id: "tt1234567",
        title: "Eterno Resplandor de unamente sin recuerdo",
        director: "Jesus Lopez",
        estreno: 2012,
        pais: ["MExico", "EEUU"],
        generos: ["Action"],
        calificacion: 7.89
    },
    {
        id: "tt7654321",
        title: "Matrix",
        director: "Jesus Lopez",
        estreno: 2012,
        pais: ["MExico", "EEUU"],
        generos: ["Action"],
        calificacion: 7.89
    },

]

console.info(misPelis);


