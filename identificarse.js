      function sololetras (event){
        key=e.keyCode || e.which;
        teclado=String.fromCharCode(key);
        letras="abcdefghijklmnñopqrstuvwxyz";
        especiales="8-37-38-46";
        teclado_especial=false;

        for (var i in especiales) {
            if (key==especiales[i]){
                teclado_especial=true;
            }
        }

        if (letras.indexOf(teclado)==-1 && !teclado_especial) {
            return false;

        }

    }

    function solonumerosyletras (e){
        key=e.keyCode || e.which;
        teclado=String.fromCharCode(key);
        numerosletras="0123456789abcdefghijklmnñopqrstuvwxyz";
        especiales="8-37-38-46";
        teclado_especial=false;

        for (var i in especiales) {
            if (key==especiales[i]){
                teclado_especial=true;
            }
        }

        if (numerosletras.indexOf(teclado)==-1 && !teclado_especial) {
            return false;

        }

    }

    $("#ingresarboton").click(function(){  
             
                    var user2 = $("#username").val();
                    var pass2 = $("#password").val();
                    var cliente = "Lilian";
                    var pasacliente = "Pincay";
                    if (user2 == cliente) {
                        if (pass2 == pasacliente) {
                            
                            location.href="file:///C:/Users/Lilian%20Pincay/Desktop/ProyectoWeb.Original/PaginaWeb.html";//ruta de la pagina de los usuarios
                             alert("Bienvenido");  
                       }
                       
                   }
                   else {
                        if((user2=="")||(pass2==""))
                        {
                          if((user2=="")&(pass2==""))
                          {
                             alert("ingresar usuario y clave");  
                          }else{
                              if(user2=="")
                               {
                                 alert("ingrese usuario");  
                               }else{
                                 if(pass2=="")
                                    {
                                      alert("ingrese la contraseña"); 
                                    }
                                  }
                               } 
                        }
                        
                          else{
                           alert("datos Incorrectos");  
                              } 
                    }
                    
                
                });
    });
    }
