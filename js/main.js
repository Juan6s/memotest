const  $contenedor=document.querySelector(".container");
const TAMANOCUADRADO = 5;

let imagenes = crearImagenes();

for(let i = 0;i<TAMANOCUADRADO;i++){
    const fila = document.createElement("div");
    fila.className="row";

    for(let j=0;j<TAMANOCUADRADO;j++){
        
        const columna = document.createElement("div");
        columna.className="col";
        columna.append(imagenes[i][j]);
        fila.append(columna);

    }
    $contenedor.append(fila)

}

function crearImagenes(){
    let imagenes=[];
    for(let i=0;i<TAMANOCUADRADO;i++){
        let fila=[];
        for(let j=0;j<TAMANOCUADRADO;j++){
            const imagen = document.createElement("img");
            imagen.src="images/default.jpg";
            imagen.className="img-thumbnail";
            imagen.id="B737";

            fila.push(imagen);
        }
        imagenes.push(fila);
    } 
    return imagenes;
}

imagenes.forEach(function(array){
    array.forEach(function(imagen){
        imagen.onclick=function(){
            
            imagen.src=`images/${imagen.id}.jpg`
            volterImagen(imagen)
        }
    })
})

function volterImagen(imagen){
    setTimeout(function(){
        imagen.src=`images/default.jpg`
    },1000);


}