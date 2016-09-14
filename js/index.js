$(document).ready(main);


 
const url = 'http://www.serviexpressasistencia.com.mx/api/';
var contador = 1;
 
function main(){
	$('#menu-ch i').click(function(){
		// $('nav').toggle(); 
 
		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
			$(".cb-color-ch").css("display", "block");
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
			$(".cb-color-ch").css("display", "none");
		}


 
	});

	$('#recargar').click(function() {
        // Recargo la página
        location.reload();
    });

	/*
	$("#op-s span").hover(function(){
        $("this ul").css("display","block");
        }, function(){
        $("this ul").css("display","none");
    });
	*/
};

	var i=1;
	var s1=0;
	var s2=0;
	var n=0;
	var c=0;

function inicio(event){
	if(i==0)
	{
		$(".carga").fadeToggle(100);
		$("#op-i span").addClass("color-op");
		$(".capa").load('inicio.html');
		if(s1==1)
		{
			$("#bot-s1").removeClass("color-op");
			s1=0;
		}

		if(s2==1)
		{
			$("#bot-s2").removeClass("color-op");
			s2=0;
		}

		if(n==1)
		{
			$("#op-n span").removeClass("color-op");
			n=0;
		}

		if(c==1)
		{
			$("#op-c span").removeClass("color-op");
			$(".portada").css("display", "block");
			c=0;
		}
		
		i=1;
		$('body, html').animate({scrollTop: '0px'}, 300);
		$(".carga").fadeToggle(4000);
	}	
}


var ich=1;
var s1ch=0;
var s2ch=0;
var nch=0;
var cch=0;

function Cmenu(valor) {


	if(valor==1 && ich==0) {
		ich=1;
		$(".carga").fadeToggle(100);
		$("#ops-i-ch").addClass("cb-color-ch");
		$(".capa").load('inicio.html');

		if(nch==1) {
			$("#ops-n-ch").removeClass("cb-color-ch");
			nch=0;
		}
		else if(s1ch==1) {
			$("#ops-s1-ch").removeClass("cb-color-ch");
			s1ch=0;
		}
		else if(s2ch==1) {
			$("#ops-s2-ch").removeClass("cb-color-ch");
			s2ch=0;
		}
		else if(cch==1) {
			$("#ops-c-ch").removeClass("cb-color-ch");
			$(".portada").css("display", "block");
			cch=0;
		}

		$('nav').animate({
			left: '-100%'
		});
		$('body, html').animate({scrollTop: '0px'}, 300);
		$(".carga").fadeToggle(300);
	}
	else if(valor==2 && nch==0) {
		nch=1;
		$(".carga").fadeToggle(100);
		$("#ops-n-ch").addClass("cb-color-ch");
		$(".capa").load('qs.html');

		if(ich==1) {
			$("#ops-i-ch").removeClass("cb-color-ch");
			ich=0;
		}
		else if(s1ch==1) {
			$("#ops-s1-ch").removeClass("cb-color-ch");
			s1ch=0;
		}
		else if(s2ch==1) {
			$("#ops-s2-ch").removeClass("cb-color-ch");
			s2ch=0;
		}
		else if(cch==1) {
			$("#ops-c-ch").removeClass("cb-color-ch");
			$(".portada").css("display", "block");
			cch=0;
		}

		$('nav').animate({
			left: '-100%'
		});
		$('body, html').animate({scrollTop: '0px'}, 300);
		$(".carga").fadeToggle(300);

	}
	else if(valor==3 && s1ch==0) {
		s1ch=1;
		$(".carga").fadeToggle(100);
		$("#ops-s1-ch").addClass("cb-color-ch");
		$(".capa").load('servicio1.html');

		if(ich==1) {
			$("#ops-i-ch").removeClass("cb-color-ch");
			ich=0;
		}
		else if(nch==1) {
			$("#ops-n-ch").removeClass("cb-color-ch");
			nch=0;
		}
		else if(s2ch==1) {
			$("#ops-s2-ch").removeClass("cb-color-ch");
			s2ch=0;
		}
		else if(cch==1) {
			$("#ops-c-ch").removeClass("cb-color-ch");
			$(".portada").css("display", "block");
			cch=0;
		}

		$('nav').animate({
			left: '-100%'
		});
		$('body, html').animate({scrollTop: '0px'}, 300);
		$(".carga").fadeToggle(300);

	}
	else if(valor==4 && s2ch==0) {
		s2ch=1;
		$(".carga").fadeToggle(100);
		$("#ops-s2-ch").addClass("cb-color-ch");
		$(".capa").load('servicio2.html');

		if(ich==1) {
			$("#ops-i-ch").removeClass("cb-color-ch");
			ich=0;
		}
		else if(nch==1) {
			$("#ops-n-ch").removeClass("cb-color-ch");
			nch=0;
		}
		else if(s1ch==1) {
			$("#ops-s1-ch").removeClass("cb-color-ch");
			s1ch=0;
		}
		else if(cch==1) {
			$("#ops-c-ch").removeClass("cb-color-ch");
			$(".portada").css("display", "block");
			cch=0;
		}

		$('nav').animate({
			left: '-100%'
		});
		$('body, html').animate({scrollTop: '0px'}, 300);
		$(".carga").fadeToggle(300);

	}
	else if(valor==5 && cch==0) {
		cch=1;
		$(".carga").fadeToggle(100);
		$(".portada").css("display", "none");
		$("#ops-c-ch").addClass("cb-color-ch");
		$(".capa").load('contacto.html');

		if(ich==1) {
			$("#ops-i-ch").removeClass("cb-color-ch");
			ich=0;
		}
		else if(nch==1) {
			$("#ops-n-ch").removeClass("cb-color-ch");
			nch=0;
		}
		else if(s1ch==1) {
			$("#ops-s1-ch").removeClass("cb-color-ch");
			s1ch=0;
		}
		else if(s2ch==1) {
			$("#ops-s2-ch").removeClass("cb-color-ch");
			s2ch=0;
		}

		$('nav').animate({
			left: '-100%'
		});
		$('body, html').animate({scrollTop: '0px'}, 300);
		$(".carga").fadeToggle(300);
		let sendContacto = document.querySelector("#sendContacto");
		sendContacto.addEventListener('click', function(){
			console.log('precioado sendContacto');
		});	
	}
	contador=1;
	
}


$(document).ready(function() {

	$(".capa").load('inicio.html');

	$("#op-i span").addClass("color-op");

	$('body, html').animate({scrollTop: '0px'}, 300);

	$("#op-i span").click(function(event) {
		if(i==0)
		{
			$(".carga").fadeToggle(100);
			$("#op-i span").addClass("color-op");
			$(".capa").load('inicio.html');
			if(s1==1)
			{
				$("#bot-s1").removeClass("color-op");
				s1=0;
			}

			if(s2==1)
			{
				$("#bot-s2").removeClass("color-op");
				s2=0;
			}

			if(n==1)
			{
				$("#op-n span").removeClass("color-op");
				n=0;
			}

			if(c==1)
			{
				$("#op-c span").removeClass("color-op");
				$(".portada").css("display", "block");
				c=0;
			}
			
			i=1;
			$('body, html').animate({scrollTop: '0px'}, 300);
			$(".carga").fadeToggle(4000);
		}

	});


	$("#bot-s1").click(function(event) {
		if(s1==0)
		{
			$(".carga").fadeToggle(100);
			$("#bot-s1").addClass("color-op");
			$(".capa").load('servicio1.html');
			if(i==1)
			{
				$("#op-i span").removeClass("color-op");
				i=0;
			}

			if(s2==1)
			{
				$("#bot-s2").removeClass("color-op");
				s2=0;
			}

			if(n==1)
			{
				$("#op-n span").removeClass("color-op");
				n=0;
			}

			if(c==1)
			{
				$("#op-c span").removeClass("color-op");
				$(".portada").css("display", "block");
				c=0;
			}
			
			s1=1;
			$('body, html').animate({scrollTop: '0px'}, 300);
			$(".carga").fadeToggle(4000);
		}
		

	});

	$("#bot-s2").click(function(event) {
		if(s2==0)
		{
			$(".carga").fadeToggle(100);
			$("#bot-s2").addClass("color-op");
			$(".capa").load('servicio2.html');
			if(s1==1)
			{
				$("#bot-s1").removeClass("color-op");
				s1=0;
			}

			if(i==1)
			{
				$("#op-i span").removeClass("color-op");
				i=0;
			}

			if(n==1)
			{
				$("#op-n span").removeClass("color-op");
				n=0;
			}

			if(c==1)
			{
				$("#op-c span").removeClass("color-op");
				$(".portada").css("display", "block");
				c=0;
			}
			
			s2=1;
			$('body, html').animate({scrollTop: '0px'}, 300);
			$(".carga").fadeToggle(4000);
		}

	});

	$("#op-n span").click(function(event) {
		if(n==0)
		{
			$(".carga").fadeToggle(100);
			$("#op-n span").addClass("color-op");
			$(".capa").load('qs.html');
			if(s1==1)
			{
				$("#bot-s1").removeClass("color-op");
				s1=0;
			}

			if(s2==1)
			{
				$("#bot-s2").removeClass("color-op");
				s2=0;
			}

			if(i==1)
			{
				$("#op-i span").removeClass("color-op");
				i=0;
			}

			if(c==1)
			{
				$("#op-c span").removeClass("color-op");
				$(".portada").css("display", "block");
				c=0;
			}
			
			n=1;
			$('body, html').animate({scrollTop: '0px'}, 300);
			$(".carga").fadeToggle(4000);
		}

	});

	$("#op-c span").click(function(event) {
		if(c==0)
		{
			$(".carga").fadeToggle(100);
			$(".portada").css("display", "none");
			$("#op-c span").addClass("color-op");
			$(".capa").load('contacto.html');
			if(s1==1)
			{
				$("#bot-s1").removeClass("color-op");
				s1=0;
			}

			if(s2==1)
			{
				$("#bot-s2").removeClass("color-op");
				s2=0;
			}

			if(n==1)
			{
				$("#op-n span").removeClass("color-op");
				n=0;
			}

			if(i==1)
			{
				$("#op-i span").removeClass("color-op");
				i=0;
			}
			
			c=1;
			$('body, html').animate({scrollTop: '0px'}, 300);
			$(".carga").fadeToggle(4000);
		}	
	});

	/******************* Botones Celular ******************/
	/*
	$("#ops-i-ch").addClass("cb-color-ch");

	$("#op-i-ch").click(function(event) {
		if(i==0)
		{
			$(".carga").fadeToggle(100);
			$("#op-i-ch").addClass("cb-color-ch");
			$(".capa").load('inicio.html');
			if(s1==1)
			{
				$("#op-s1-ch").removeClass("cb-color-ch");
				s1=0;
			}

			if(s2==1)
			{
				$("#op-s2-ch").removeClass("cb-color-ch");
				s2=0;
			}

			if(n==1)
			{
				$("#op-n-ch").removeClass("cb-color-ch");
				n=0;
			}

			if(c==1)
			{
				$("#op-c-ch").removeClass("cb-color-ch");
				$(".portada").css("display", "block");
				c=0;
			}
			
			i=1;
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
			$('body, html').animate({scrollTop: '0px'}, 300);
			$(".carga").fadeToggle(300);
			
		}

	});


	$("#op-s1-ch").click(function(event) {
		if(s1==0)
		{
			$(".carga").fadeToggle(100);
			$("#op-s1-ch").addClass("cb-color-ch");
			$(".capa").load('servicio1.html');
			if(i==1)
			{
				$("#op-i-ch").removeClass("cb-color-ch");
				i=0;
			}

			if(s2==1)
			{
				$("#op-s2-ch").removeClass("cb-color-ch");
				s2=0;
			}

			if(n==1)
			{
				$("#op-n-ch").removeClass("cb-color-ch");
				n=0;
			}

			if(c==1)
			{
				$("#op-c-ch").removeClass("cb-color-ch");
				$(".portada").css("display", "block");
				c=0;
			}
			
			s1=1;
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
			$('body, html').animate({scrollTop: '0px'}, 300);
			$(".carga").fadeToggle(300);
			
		}
		

	});

	$("#op-s2-ch").click(function(event) {
		if(s2==0)
		{
			$(".carga").fadeToggle(100);
			$("#op-s2-ch").addClass("cb-color-ch");
			$(".capa").load('servicio2.html');
			if(s1==1)
			{
				$("#op-s1-ch").removeClass("cb-color-ch");
				s1=0;
			}

			if(i==1)
			{
				$("#op-i-ch").removeClass("cb-color-ch");
				i=0;
			}

			if(n==1)
			{
				$("#op-n-ch").removeClass("cb-color-ch");
				n=0;
			}

			if(c==1)
			{
				$("#op-c-ch").removeClass("cb-color-ch");
				$(".portada").css("display", "block");
				c=0;
			}
			
			s2=1;
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
			$('body, html').animate({scrollTop: '0px'}, 300);
			$(".carga").fadeToggle(300);
			
		}

	});

	$("#op-n-ch").click(function(event) {
		if(n==0)
		{
			$(".carga").fadeToggle(100);
			$("#op-n-ch").addClass("cb-color-ch");
			$(".capa").load('qs.html');
			if(s1==1)
			{
				$("#op-s1-ch").removeClass("cb-color-ch");
				s1=0;
			}

			if(s2==1)
			{
				$("#op-s2-ch").removeClass("cb-color-ch");
				s2=0;
			}

			if(i==1)
			{
				$("#op-i-ch").removeClass("cb-color-ch");
				i=0;
			}

			if(c==1)
			{
				$("#op-c-ch").removeClass("cb-color-ch");
				$(".portada").css("display", "block");
				c=0;
			}
			
			n=1;
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
			$('body, html').animate({scrollTop: '0px'}, 300);
			$(".carga").fadeToggle(300);
			
		}

	});

	$("#op-c-ch").click(function(event) {
		if(c==0)
		{
			$(".carga").fadeToggle(100);
			$(".portada").css("display", "none");
			$("#op-c-ch").addClass("cb-color-ch");
			$(".capa").load('contacto.html');
			if(s1==1)
			{
				$("#op-s1-ch").removeClass("cb-color-ch");
				s1=0;
			}

			if(s2==1)
			{
				$("#op-s2-ch").removeClass("cb-color-ch");
				s2=0;
			}

			if(n==1)
			{
				$("#op-n-ch").removeClass("cb-color-ch");
				n=0;
			}

			if(i==1)
			{
				$("#op-i-ch").removeClass("cb-color-ch");
				i=0;
			}
			
			c=1;
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
			$('body, html').animate({scrollTop: '0px'}, 300);
			$(".carga").fadeToggle(300);
			
		}
		let sendContacto = document.querySelector("#sendContacto");
		sendContacto.addEventListener('click', function(){
			console.log('precioado sendContacto');
		});	
	});
	/*
	
	//Logic
	/******************************************************/
	let agendar = document.querySelector("#agendar");
	agendar.addEventListener('click', function(){
		let clientName = document.querySelector("#clientName");
		let address = document.querySelector("#address");
		let phone = document.querySelector("#phone");
		let email = document.querySelector("#email");
		let service = document.querySelector("#service");
		let date = document.querySelector("#date");

		console.log('client: ' + isValidText(clientName.value));
		console.log('address: ' + isValidText(address.value));
		console.log('phone: ' + isValidPhone(phone.value));
		console.log('email: ' + isValidEmail(email.value));
		console.log('service: ' + isValidText(service.value));
		console.log('date: ' + isValidText(date.value));

		let isCorrectData = true;

		if( !isValidText(clientName.value) && !isValidText(address.value) && !isValidPhone(phone.value) && !isValidEmail(email.value) && !isValidText(date.value) ){
			$.growl.error({ message: "Introduzca sus datos" });
			return;
		}

		if( !isValidText(clientName.value) ){
			isCorrectData = false;
			$.growl.error({ message: "Introduzca un nombre correcto" });
		}

		if( !isValidText(address.value) ){
			isCorrectData = false;
			$.growl.error({ message: "La direccion es incorrecta" });			
		}

		if( !isValidPhone(phone.value) ){
			isCorrectData = false;
			$.growl.error({ message: "El telefono es incorrecto" });			
		}

		if( !isValidEmail(email.value) ){
			isCorrectData = false;
			$.growl.error({ message: "El email es incorrecto" });			
		}

		if( !isValidText(service.value) ){
			isCorrectData = false;
			$.growl.error({ message: "El servicio es incorrecto" });			
		}

		if( !isValidText(date.value) ){
			isCorrectData = false;
			$.growl.error({ message: "La fecha es incorrecta" });			
		}	

		if( isCorrectData )	{
			let datos = {
				clientName : clientName.value,
				address : address.value,
				phone : phone.value,
				email : email.value,
				service : service.value,
				date : date.value 
			};

			$.ajax({
			  type: "POST",
			  dataType: "json",
			  url: url + 'agendar',
			  data: datos,
			  success: successService
			});
		}			
	});
});

function sendContacto( evt ){
	evt.preventDefault();
	evt.stopPropagation();
	let contactName = document.querySelector("#contactName");
	let contactPhone = document.querySelector("#contactPhone");
	let contactEmail = document.querySelector("#contactEmail");
	let contactText = document.querySelector("#contactText");
	let contactAccept = document.querySelector("#contactAccept");

	console.log('client: ' + isValidText(contactName.value));
	console.log('phone: ' + isValidPhone(contactPhone.value));
	console.log('email: ' + isValidEmail(contactEmail.value));
	console.log('client: ' + isValidText(contactText.value));	
	console.log('contactAccept: ' + contactAccept.checked);

	let isCorrectData = true;

	if( !isValidText(contactName.value) && !isValidPhone(contactPhone.value) && !isValidEmail(contactEmail.value) && !isValidText(contactText.value) && !contactAccept.checked ){
		$.growl.error({ message: "Introduzca sus datos" });
		return;
	}

	if( !isValidText(contactName.value) ){
		isCorrectData = false;
		$.growl.error({ message: "Introduzca un nombre correcto" });
	}

	if( !isValidPhone(contactPhone.value) ){
		isCorrectData = false;
		$.growl.error({ message: "El telefono es incorrecto" });			
	}

	if( !isValidEmail(contactEmail.value) ){
		isCorrectData = false;
		$.growl.error({ message: "El email es incorrecto" });			
	}

	if( !isValidText(contactText.value) ){
		isCorrectData = false;
		$.growl.error({ message: "Introduzca su mensaje" });			
	}

	if( !contactAccept.checked ){
		isCorrectData = false;
		$.growl.error({ message: "No ha aceptado los teminos y condiciones" });			
	}	

	if( isCorrectData )	{
		let datos = {
			contactName : contactName.value,
			contactPhone : contactPhone.value,
			contactEmail : contactEmail.value,
			contactText : contactText.value,
		};

		$.ajax({
		  type: "POST",
		  dataType: "json",
		  url: url + 'contacto',
		  data: datos,
		  success: successContact
		});
		return true;
	}	
}

function successService( data ){
	if(data.servicio){
		$.growl.notice({ message: "Se ha enviado con exito su solicitud" });
		let clientName = document.querySelector("#clientName");
		let address = document.querySelector("#address");
		let phone = document.querySelector("#phone");
		let email = document.querySelector("#email");
		let service = document.querySelector("#service");
		let date = document.querySelector("#date");

		clientName.value = '';
		address.value = '';
		phone.value = '';
		email.value = '';
		service.value = '';
		date.value = '';

		$('#myModal').modal('hide');	
	} else {
		$.growl.warning({ message: "Intentelo mas tarde" });
	}
}

function successContact( data ){
	if(data.contacto){
		$.growl.notice({ message: "Se ha enviado con exito su solicitud" });	
		inicio();
	} else {
		$.growl.warning({ message: "Intentelo mas tarde" });
	}
}

function isValidAccept( value ){

}

function isValidEmail( email ){
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function isValidPhone( phone ){
  let phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if(phone.match(phoneno)) {
    return true;
  } else {  
    return false;
  }
}

function isValidText( text ){
	return text ? true : false;
}


function checar() {
	document.getElementById("contactAccept").checked = true;
}