let encendido = true;
let velocidad = 32
if(encendido){
    console.log("su carro esta encedido");
if(velocidad == 0){
    console.log("carro freno");
}else if (velocidad > 0 && velocidad <= 100){
    console.log("carro en marcha");

}else{console.log("evitese un accidente... exceso de velocidad");}

}else{console.log("encienda su vehiculo");}