

var vop1, vop2, vris;
var valuta_negozio= 100;
function inizializza_calcolatrice() {
	vop1=0;
	vop2=0;
	vris=0;
  
}

function somma( op1, op2) {
    var r;
	r = op1 + op2;
    return r;
}

function esegui_somma() {
       var o1 = parseInt(document.getElementById("primo_valore").value);
	   var o2 = parseInt(document.getElementById("secondo_valore").value);
	   var ris = somma(o1,o2);
	   document.getElementById("risultato_valore").value = ris;
	   document.getElementById("imgoperazione").src = "images/somma.png";
}

function sottrazione ( op1, op2) {
    var r;
	r = op1 - op2;
    return r;
}

function esegui_sottrazione() {
       var o1 = parseInt(document.getElementById("primo_valore").value);
	   var o2 = parseInt(document.getElementById("secondo_valore").value);
	   var ris = sottrazione(o1,o2);
	   document.getElementById("risultato_valore").value = ris;
	   document.getElementById("imgoperazione").src = "images/sottrazione.png";
}

function moltiplicazione( op1, op2) {
    var r;
	r = op1 * op2;
    return r;
}

function esegui_moltiplicazione() {
       var o1 = parseInt(document.getElementById("primo_valore").value);
	   var o2 = parseInt(document.getElementById("secondo_valore").value);
	   var ris = moltiplicazione(o1,o2);
	   document.getElementById("risultato_valore").value = ris;
	   document.getElementById("imgoperazione").src = "images/moltiplicazione.png";
}

function divisione( op1, op2) {
    var r;
	r = op1 / op2;
    
	if (op2==0) {
		r=impossibile
	}else{

    r = op1/op2;


	}
	return r;

	}


function esegui_divisione() {
       var o1 = parseInt(document.getElementById("primo_valore").value);
	   var o2 = parseInt(document.getElementById("secondo_valore").value);
	   var ris = divisione(o1,o2);
	   document.getElementById("risultato_valore").value = ris;
	   document.getElementById("imgoperazione").src = "images/divisione1.png";

}

function annaffia_pianta(){
    
	document.getElementById("vasovuoto").src = "images/vaso-2.gif";

}
function annaffia_pianta2(){
    
	document.getElementById("vasovuoto2").src = "images/cactusero1.png";

}
function annaffia_pianta3(){
    
	document.getElementById("vasovuoto3").src = "images/cicalone1.gif";

}
function annaffia_pianta4(){
    
	document.getElementById("vasovuoto4").src = "images/cammellone1.gif";

}
function annaffia_pianta5(){
    
	document.getElementById("vasovuoto5").src = "images/vasocolonna.png";

}
function annaffia_pianta6(){
    
	document.getElementById("vasovuoto6").src = "images/carnivoro.gif";
}
var valuta_negozio= 100;
 function negozio1(){
	var mydivvaluta = document.getElementById("valuta_negozio");
	valuta_negozio=valuta_negozio-10;
	document.getElementById("valuta_negozio").innerHTML = "Monete totali:" + valuta_negozio;
	document.getElementById("imgvuota").src = "images/stercoraro.png";
	if(valuta_negozio<=0){
		document.getElementById("valuta_negozio").innerHTML = "Hai finito le monete";
		
	}


	
}
function negozio2(){
	var mydivvaluta = document.getElementById("valuta_negozio");
	valuta_negozio=valuta_negozio-20;
	document.getElementById("valuta_negozio").innerHTML = "Monete totali:" + valuta_negozio;
	document.getElementById("imgvuota1").src = "images/pancettaetta.png";
	if(valuta_negozio<=0){
		document.getElementById("valuta_negozio").innerHTML = "Hai finito le monete";
        
	}
	
}
function negozio3(){
	var mydivvaluta = document.getElementById("valuta_negozio");
	valuta_negozio=valuta_negozio-40;
	document.getElementById("valuta_negozio").innerHTML = "Monete totali:" + valuta_negozio;
	document.getElementById("imgvuota2").src = "images/pescespada.png";
	if(valuta_negozio<=0){
		document.getElementById("valuta_negozio").innerHTML = "Hai finito le monete";

	}
}    
function negozio4(){
	var mydivvaluta = document.getElementById("valuta_negozio");
	valuta_negozio=valuta_negozio-70;
	document.getElementById("valuta_negozio").innerHTML = "Monete totali:" + valuta_negozio;
	document.getElementById("imgvuota3").src = "images/samnose.gif";
	
	
	if(valuta_negozio<=0){
		document.getElementById("valuta_negozio").innerHTML = "Hai finito le monete";

	}
	
}    
  
 