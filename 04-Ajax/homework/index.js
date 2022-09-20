
//Cuando haga click, se ejecuta la funcion.
$("#boton").click(function(){
   //data contains the data from the server
   //La funcion devuelve un GET,
   $("#lista").empty();

    $.get("http://localhost:5000/amigos", function(datos){
    
    
        for (let i = 0; i <datos.length; i++){
            
            $("#lista").append('<li>' + datos[i].name + '</li>');
            
        }
/*         $.each(datos, function ( index , obj){
            //creo item de UL vacío
            let item = document.createElement('li');
            //le coloco el elemento
            item.append(obj.name);
            //agrega el item de amigo a la UL de ID "lista";
            $("#lista").append(item);

            }
        )//cierra each */
  
    })//cierra el GET
})


$("#search").click(function(){
    //data contains the data from the server
    //La funcion devuelve un GET,
    let Identif = document.getElementById("input").value;
        $.get("http://localhost:5000/amigos/" + Identif, function(datos){
            //en lugar de crear un nuevo elemento, para que quede en línea, coloca el valor en el span existe.    
            $("#amigo").text(datos.name);//el método text tiene el input implicito
                }
        )
    
})


$("#delete").click(function(){
    let iDelete = document.getElementById("inputDelete").value;
    let message = document.getElementById("success");

    $.ajax({
        url: `http://localhost:5000/amigos/${iDelete}`,
        type: "DELETE",
        success: ()=>{
             $("#success").text("Tu ex-amigo fue borrado con éxito.");
            
        }
    });    
});