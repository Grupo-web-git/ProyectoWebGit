window.addEventListener('load',function(){
	document.querySelector('#btngenerar').addEventListener('click', function(){
		var html='<table border=1>'
		var contador=0;		
		for (var i = document.querySelector('#txtgenerar').value - 1; i >= 0; i--) {
			contador+=2
			html+='<tr> <td id="' + contador + '">' +contador+ '</td></tr>'
		};

		//for (var i = document.querySelector('#txtgenerar').value - 1, contador=2; i >= 0; i--, contador+=2) {
			//contador+=2
			//html+='<tr> <td>  '+ contador + '</td></tr>'
		//};

		html+='</table>'
				[].forEach.call(document.querySelectorAll('td'), function(elemento){
			elemento.addEventListener('click', function(){	
				if (elemento.innerHTML=='x') 
				{
					elemento.innerHTML=elemento.id
				}
				else
				{
					elemento.innerHTML='x'
				}
			})

		})