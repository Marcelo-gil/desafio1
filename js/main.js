let pos1=0;
let pos2=0;
let digito = [0,0,0,0,0,0,0,0,0,0]
const multiplicaDigito = [5,4,3,2,7,6,5,4,3,2]
let total=0;
let isPar=0;
let xdifi=0;
let xcuit=0;
let pasadas=1;
let origen = "";
let numeroDoc="";
while ((origen!="ESC" && origen!="esc" && origen!="1" && origen!="2" && origen!="3")){
    origen =(prompt("1-Empresa 2-Masculino 3-Femenino ESC-Termina"));
    if (origen!="ESC" && origen!="esc" && origen!="1" && origen!="2" && origen!="3"){
        alert("Solo puede ser Esc,1,2,3");
    }
}
while (origen!="ESC" && origen!="esc"){
    if (pasadas==1){
        /* asigno los dos digito del comienzo de la cuit */
        switch(origen){
            case "1":
                pos1=3;
                pos2=0;
                break;        
            case "2":
                pos1=2;
                pos2=0;
                break;
            default:
                pos1=2;
                pos2=7;
                break;
        }
        numeroDoc = prompt("Ingrese Nº de Documento"); 
    }
    let longitud = numeroDoc.length;
    /* controlo que el numero de documento tenga 7 digitos  */
    if (longitud!=8){
        alert("el documento debe tener 8 digitos");
        pasadas=1;
    } else {
        /* Multiplico cada digito para obtener el digito Verificador */
        digito[0]=pos1*multiplicaDigito[0];
        digito[1]=pos2*multiplicaDigito[1];
        total=digito[0]+digito[1];
        for (let i=0; i<8; i++) {
            digito[i+2]=parseInt(numeroDoc[i])*multiplicaDigito[i+2];
            total=total+digito[i+2];
        }
        isresto= total % 11;
        xdifi=0
        if (isresto!=0){
            xdifi=11-isresto;
        }
        if (xdifi>9){
            /* si el resto es mayor a 9 reasigno los dos digito del comienzo de la cuit y vuelvo a hacer el calculo*/
            if (origen=="1"){
                switch(pasadas){
                    case 1:
                        pos1=3;
                        pos2=3;
                        pasadas=pasadas+1;
                        break;        
                    case 2:
                        pos1=3;
                        pos2=4;
                        pasadas=pasadas+1;
                        break;
                    default:
                        alert("no se pudo calcular");
                        origen="ESC";
                        break;
                }
            }else{
                switch(pasadas){
                    case 1:
                        pos1=2;
                        pos2=3;
                        pasadas=pasadas+1;
                        break;
                    case 2:
                        pos1=2;
                        pos2=4;
                        pasadas=pasadas+1;
                        break;
                    default:
                        alert("no se pudo calcular");
                        origen="ESC";
                        break;
                }
            }
        }else{
            xcuit=pos1.toString()+pos2.toString()+"-"+numeroDoc+"-"+xdifi.toString();
            alert("Su numero de Cuit es "+xcuit);
            origen="";
            while ((origen!="ESC" && origen!="esc" && origen!="1" && origen!="2" && origen!="3")){
                origen =(prompt("1-Empresa 2-Masculino 3-Femenino ESC-Termina"));
                if (origen!="ESC" && origen!="esc" && origen!="1" && origen!="2" && origen!="3"){
                    alert("Solo puede ser Esc,1,2,3");
                }
            }
            pasadas=1;
        }
    }
}
