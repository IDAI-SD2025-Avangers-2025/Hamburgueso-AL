var formulario = document.getElementById("calcularPrecio");

function calcular() {

    var tamano = formulario.tam.value;
    var pan = formulario.pan.value;
    var combo = formulario.combo.value;

    //alert("si funciona mi boton")

    var cantidad = document.getElementById("cantidad").value;
    //alert("Variable Formulario:" + formulario + "Variable cantidad:" + cantidad);
 
         //var tamañoChico = document.getElementById("chico").value;
    //alert(tamañoChico);

        //var tamañoMediano = document.getElementById("mediano").value;
    //alert(tamañoMediano);

        //var tamañoGrande = document.getElementById("grande").value;
    //alert(tamañoGrande);


    var total = 0;

    if(tamano == "chico") {
        total = 100;    }

    else if(tamano == "mediano") {
        total = 150;      }

        
    else if(tamano == "grande") {
            total = 200;     }

    else{
                alert("Por favor selecciona un tamaño");
                return;
            }
    
    
    if(pan == "integral") {
                total = total + 0;     }

                   else if(pan == "blanco") {
                    total = total + 5;     }

                       else if(pan == "papa") {
                        total = total + 5;     }

                          else if(pan == "parmesano") {
                            total = total + 5;     }


                                    else{
                                        alert("Por favor selecciona un tipo de pan");
                                        return;
                                    }


                                if(formulario.combo.value == "si") {
                                total = total + 75;     }  
                                




    formulario.total.value = total * cantidad;


}