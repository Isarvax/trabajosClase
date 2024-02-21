let tipoCliente = "normal"
if (tipoCliente == "normal"){
    console.log(`va a ser atendido en el modulo 1, por ser ${tipoCliente}`);
}else if(tipoCliente == "preferencial"){console.log(`esta habilitado los modulos 2 y 3 para su atencion`);
}else{
    console.log("utsde no es cliente de este banco, por favor dirijase al modulo 4")
}