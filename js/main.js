let pos1=0;
let pos2=0;
let nu1=0;
let nu2=0;
let nu3=0;
let nu4=0;
let nu5=0;
let nu6=0;
let nu7=0;
let nu8=0;
let nu9=0;
let nu10=0;
let nu11=0;
let total=0;
let isPar=0;
let xdifi=0;
let xcuit=0;
let pasadas=1;
let origen = "";
let numeroDoc="";
while ((origen!="ESC" && origen!="ESCAPE" && origen!="1" && origen!="2" && origen!="3")){
    origen =(prompt("1-Empresa 2-Masculino 3-Femenino ESC-Termina"));
    if (origen!="ESC" && origen!="ESCAPE" && origen!="1" && origen!="2" && origen!="3"){
        alert("Solo puede ser Esc,1,2,3");
    }
}
while (origen!="ESC"){
    if (pasadas==1){
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
        /* numeroDoc="11678442"; */
    }
    let longitud = numeroDoc.length;
    if (longitud<7){
        alert("el documento no puede ser menor a 7");
        pasadas=1;
    } else {
        if (longitud>8){
            alert("el documento no puede ser Mayor a 8");
            pasadas=1;
        } else {
            nu1=pos1*5;
            nu2=pos2*4;
            if (longitud=8){
                nu3=parseInt(numeroDoc[0])*3;
            } else{
                nu3=0;
            }
            nu4=parseInt(numeroDoc[1])*2;
            nu5=parseInt(numeroDoc[2])*7;
            nu6=parseInt(numeroDoc[3])*6;
            nu7=parseInt(numeroDoc[4])*5;
            nu8=parseInt(numeroDoc[5])*4;
            nu9=parseInt(numeroDoc[6])*3;
            nu10=parseInt(numeroDoc[7])*2;
            total=nu1+nu2+nu3+nu4+nu5+nu6+nu7+nu8+nu9+nu10;
            isresto= total % 11;
            xdifi=0
            if (isresto!=0){
                xdifi=11-isresto;
            }
            if (xdifi>9){
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
                while ((origen!="ESC" && origen!="ESCAPE" && origen!="1" && origen!="2" && origen!="3")){
                    origen =(prompt("1-Empresa 2-Masculino 3-Femenino ESC-Termina"));
                    if (origen!="ESC" && origen!="ESCAPE" && origen!="1" && origen!="2" && origen!="3"){
                        alert("Solo puede ser Esc,1,2,3");
                    }
                }
                pasadas=1;
            }
        }
    }
}
