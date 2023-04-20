
// funciones-------------------
// function init(){
//     alert("has entrado a la mejor calculadora del mundo");
// }
var total=0;
var operandoa=0;
var operandob=0;
var operacion;
var identificador= 0;
function init(){
    // variables
    var resultado=document.getElementById("resultado");
    var suma=document.getElementById("suma");
    var resta=document.getElementById("resta");
    var multiplicacion=document.getElementById("multiplicasion");
    var division=document.getElementById("division");
    var reset=document.getElementById("reset");
    var uno=document.getElementById("uno");
    var dos=document.getElementById("dos");
    var tres=document.getElementById("tres");
    var cuatro=document.getElementById("cuatro");
    var cinco=document.getElementById("cinco");
    var seis=document.getElementById("seis");
    var siete=document.getElementById("siete");
    var ocho=document.getElementById("ocho");
    var nueve=document.getElementById("nueve");
    var cero=document.getElementById("cero");
    var igual=document.getElementById("igual");
    var totalmostrar=document.getElementById("total");

    // ventos
    uno.onclick = function (e)
    {
        resultado.textContent=resultado.textContent + "1"
    }
    dos.onclick = function (e)
    {
        resultado.textContent=resultado.textContent + "2"
    }
    tres.onclick = function (e)
    {
        resultado.textContent=resultado.textContent + "3"
    }
    cuatro.onclick = function (e)
    {
        resultado.textContent=resultado.textContent + "4"
    }
    cinco.onclick= function(e)
    {
        resultado.textContent=resultado.textContent + "5"
    }
    seis.onclick=function (e){
        resultado.textContent=resultado.textContent + "6"
    }
    siete.onclick=function (e){
        resultado.textContent=resultado.textContent + "7"
    }
    ocho.onclick=function (e){
        resultado.textContent=resultado.textContent + "8"
    }
    nueve.onclick=function (e)
    {
        resultado.textContent=resultado.textContent +"9"
    }
    cero.onclick=function(e){
        resultado.textContent=resultado.textContent + "0"
    }
    // operaciones de la calculadora
    suma.onclick=function(e){
        if(resultado.textContent=="")
        { operacion="+"}else
        {
        if(identificador==0)
        {
        operandoa=resultado.textContent;
        resultado.textContent="";
        }else
        {
            if(operacion=="/")
                {
                total=parseInt(operandoa)/parseInt(resultado.textContent);
                resultado.textContent="";
                operandoa=total;
                }
            if(operacion=="*")
                {
                total=parseInt(operandoa)*parseInt(resultado.textContent);
                resultado.textContent="";
                operandoa=total;
                }
            if(operacion=="+")
            {
            total=parseInt(operandoa)+parseInt(resultado.textContent);
            resultado.textContent="";
            operandoa=total;
            }
            if(operacion=="-")
            {
             total=parseInt(operandoa)-parseInt(resultado.textContent);
            resultado.textContent="";
            operandoa=total;
            }
        }
        identificador=1;
        }
    operacion="+";
    totalmostrar.textContent=total;
    }

    resta.onclick=function(e){
        if(resultado.textContent=="")
        {}
        else{
            if(identificador==0)
            {
                operandoa=resultado.textContent;
                resultado.textContent="";
            }else{
                if(operacion=="/")
                {
                total=parseInt(operandoa)/parseInt(resultado.textContent);
                resultado.textContent="";
                operandoa=total;
                }
                if(operacion=="*")
                {
                total=parseInt(operandoa)*parseInt(resultado.textContent);
                resultado.textContent="";
                operandoa=total;
                }
                if(operacion=="+")
                {
                total=parseInt(operandoa)+parseInt(resultado.textContent);
                resultado.textContent="";
                operandoa=total;
                 }
                if(operacion=="-")
                {
                total=parseInt(operandoa)-parseInt(resultado.textContent);
                resultado.textContent="";
                operandoa=total;
                }
                }
            identificador=1;
        } 
        operacion="-";
        totalmostrar.textContent=total;
    }


    multiplicacion.onclick=function(e){
       if(resultado.textContent=="")
        {}
        else{
            if(identificador==0)
            {
                operandoa=resultado.textContent;
                resultado.textContent="";
            }else{
                if(operacion=="/")
                {
                total=parseInt(operandoa)/parseInt(resultado.textContent);
                resultado.textContent="";
                operandoa=total;
                }
                if(operacion=="*")
                {
                total=parseInt(operandoa)*parseInt(resultado.textContent);
                resultado.textContent="";
                operandoa=total;
                }

                if(operacion=="+")
                {
                total=parseInt(operandoa)+parseInt(resultado.textContent);
                resultado.textContent="";
                operandoa=total;
                 }
                if(operacion=="-")
                {
                total=parseInt(operandoa)-parseInt(resultado.textContent);
                resultado.textContent="";
                operandoa=total;
                }
                }
            identificador=1;
        } 
        operacion="*";
        totalmostrar.textContent=total;
    }
    division.onclick=function(e){
        if(resultado.textContent=="")
        {}
        else{
            if(identificador==0)
            {
                operandoa=resultado.textContent;
                resultado.textContent="";
            }else{
                if(operacion=="/")
                {
                total=parseInt(operandoa)/parseInt(resultado.textContent);
                resultado.textContent="";
                operandoa=total;
                }
                if(operacion=="*")
                {
                total=parseInt(operandoa)*parseInt(resultado.textContent);
                resultado.textContent="";
                operandoa=total;
                }

                if(operacion=="+")
                {
                total=parseInt(operandoa)+parseInt(resultado.textContent);
                resultado.textContent="";
                operandoa=total;
                 }
                if(operacion=="-")
                {
                total=parseInt(operandoa)-parseInt(resultado.textContent);
                resultado.textContent="";
                operandoa=total;
                }
                }
            identificador=1;
        } 
        operacion="/";
        totalmostrar.textContent=total;
    }

    // otras opreaciones
    reset.onclick=function(e){
    identificador=0;
    total=0;
    operacion="";
    operandoa=0;
    operandob=0;
    resultado.textContent="";
    totalmostrar.textContent=total;
    }
    igual.onclick=function(e){
        if(resultado.textContent!="")
        {
        operandob = resultado.textContent;
        switch(operacion)
        {
            case "+":
                if(total==0){
                total=parseInt(operandoa) + parseInt(operandob);
                resultado.textContent=total;
                }else
                {
                    total=total+parseInt( resultado.textContent);
                    resultado.textContent=total;
                }    
                identificador=0;     
            break;
            case "-":
                if(total==0){
                    total=parseInt(operandoa) - parseInt(operandob);
                    resultado.textContent=total;
                    }else
                    {
                        total=total-parseInt( resultado.textContent);
                        resultado.textContent=total;
                    }    
                    identificador=0;    
            break;
            case "/":
               if(total==0){
                    total=parseInt(operandoa) / parseInt(operandob);
                    resultado.textContent=total;
                    }else
                    {
                        total=total/parseInt( resultado.textContent);
                        resultado.textContent=total;
                    }    
                    identificador=0; 
            break;
            case "*":
                 if(total==0){
                    total=parseInt(operandoa) * parseInt(operandob);
                    resultado.textContent=total;
                    }else
                    {
                        total=total*parseInt( resultado.textContent);
                        resultado.textContent=total;
                    }    
                    identificador=0; 
            break;

        }
        }
    else{resultado.textContent=total}
    operacion="";
    totalmostrar.textContent=total;
    }

}

