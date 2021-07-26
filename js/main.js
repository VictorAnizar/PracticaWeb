'use strict'

$(document).ready(function () {
    //slider
    slidePag();
    
    //acordion sobre mi 
    acordeon();
    
    //posts
    postsDinamicos();

    //cambio de tema
    cambioTema();

    //boton regresar al inicio
    botonRegresar();

    //guardar en localstorage
    guardarLocalStorage();

    //reloj
    reloj();

    //formulario de contacto
    formContact();
});

function formContact(){
    $("#commentForm").validate();
}

function reloj(){


    //podemos usar Date pero tambien podemos usar la libreria moment js
    // var div_reloj=document.querySelector("#reloj");
    // var tiempo = setInterval(function(){
    //     var h=new Date();
    //     var hours=h.getHours();
    //     var minutes=h.getMinutes();
    //     var seconds=h.getSeconds();
    //     var la_hora=`
    //     <h2>La hora es ${hours} con ${minutes} y ${seconds} segundos</h2>
    //     `;
        
    //     div_reloj.innerHTML=(la_hora);

    // }, 1000);
    //clearInterval(tiempo);
    setInterval(function(){
        var hora= (moment().format('h:mm:ss a'));
        var la_hora=`
        <h1>La hora es ${hora}</h1>
        `;
        $("#reloj").html(la_hora);
    }, 1000);
}

function slidePag(){
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 600,
        randomStart: true,
        infiniteLoop: true,
        responsive: true,
        pager: false,
        auto: true,
        speed: 100
    });
}

function acordeon(){
    $("#accordion").accordion({
        heightStyle: "content",
        animate: 500
    });
}

function postsDinamicos(){
    var posts = [
        {
            title: 'prueba de titulo 1',
            date: moment().format("MMM Do YY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet interdum purus sed feugiat. Aliquam consectetur accumsan iaculis. Integer bibendum urna eget nunc semper pharetra. Pellentesque malesuada luctus neque ac fermentum. In hac habitasse platea dictumst. Mauris dolor magna, tristique eget nisl non, hendrerit interdum tellus. In et nulla ac tellus placerat aliquam a sed quam. Sed semper diam ex, ac egestas leo volutpat sagittis. In hac habitasse platea dictumst. Curabitur nec erat convallis, facilisis velit ultricies, efficitur enim. Sed vel consectetur ligul'

        },
        {
            title: 'prueba de titulo 2',
            date: moment().format("MMM Do YY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet interdum purus sed feugiat. Aliquam consectetur accumsan iaculis. Integer bibendum urna eget nunc semper pharetra. Pellentesque malesuada luctus neque ac fermentum. In hac habitasse platea dictumst. Mauris dolor magna, tristique eget nisl non, hendrerit interdum tellus. In et nulla ac tellus placerat aliquam a sed quam. Sed semper diam ex, ac egestas leo volutpat sagittis. In hac habitasse platea dictumst. Curabitur nec erat convallis, facilisis velit ultricies, efficitur enim. Sed vel consectetur ligul'

        },
        {
            title: 'prueba de titulo 3',
            date: moment().format("MMM Do YY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet interdum purus sed feugiat. Aliquam consectetur accumsan iaculis. Integer bibendum urna eget nunc semper pharetra. Pellentesque malesuada luctus neque ac fermentum. In hac habitasse platea dictumst. Mauris dolor magna, tristique eget nisl non, hendrerit interdum tellus. In et nulla ac tellus placerat aliquam a sed quam. Sed semper diam ex, ac egestas leo volutpat sagittis. In hac habitasse platea dictumst. Curabitur nec erat convallis, facilisis velit ultricies, efficitur enim. Sed vel consectetur ligul'

        },
        {
            title: 'prueba de titulo 4',
            date: moment().format("MMM Do YY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet interdum purus sed feugiat. Aliquam consectetur accumsan iaculis. Integer bibendum urna eget nunc semper pharetra. Pellentesque malesuada luctus neque ac fermentum. In hac habitasse platea dictumst. Mauris dolor magna, tristique eget nisl non, hendrerit interdum tellus. In et nulla ac tellus placerat aliquam a sed quam. Sed semper diam ex, ac egestas leo volutpat sagittis. In hac habitasse platea dictumst. Curabitur nec erat convallis, facilisis velit ultricies, efficitur enim. Sed vel consectetur ligul'

        }
    ];
    //agregando los posts a los elementos del html
    //var posts_html=document.querySelector("#posts");
    for (let i of posts) {
        //opcion 1
        // let h2=document.createElement("h2");
        // let fecha=document.createElement("span");
        // let p=document.createElement("p");
        // let a=document.createElement("a");
        // let post=document.createElement("article");
        // post.classList.add("post");
        // //agregando titulos
        // h2.append(i.title);
        // post.appendChild(h2);
        // //agregando fecha
        // fecha.append(i.date);
        // post.appendChild(fecha);
        // //agregando texto
        // p.append(i.content);
        // post.appendChild(p);
        // //agregando boton
        // a.append("Leer más");
        // a.classList.add("leer_más");
        // post.appendChild(a);
        // posts_html.appendChild(post);
        //opcion 2
        var plantilla = `
        <article class="post">
            <h2>${i.title}</h2>
            <span>${i.date}</span>
            <p>${i.content}</p>
            <a href="#" class="leer_más">
                Leer más
            </a>
        </article>
        `;
        $("#posts").append(plantilla);
    }
}

function cambioTema(){
    //cambio de stilo
    //otra opcion para cambiar de temas es alternar la hoja de estilos.
    //se deberia crear una hoja de estilos para cada tema, en cada hoja
    //estarán los selectores que contengan un color.
    //para cambiar entre hojas solo habria que modificar el atributo
    //href en las etiquetas link cada que se presione un boton para 
    //cambiar de tema
    $("#color_rojo").click(function () {
        //cambio el fondo
        $("body").css("background-image", "url('../proyecto1/img/rojo.jpg')");
        //cambia botones de leer mas de articulos
        $(".leer_más").removeClass("verde azul");
        $(".leer_más").addClass("rojo");
        //cambia color texto
        $("#titulo").removeClass("verde azul");
        $("#titulo").addClass("rojo");
        //cambio color boton login
        $("#boton_login").removeClass("verde azul")
            .addClass("rojo");
        $("#buton_logout").removeClass("verde azul")
            .addClass("rojo");
        //cambio de color al hacer hover en menu
        $(".lis").removeClass("li_verde li_azul");
        $(".lis").addClass("li_rojo");

    });
    $("#color_verde").click(function () {
        //cambio el fondo
        $("body").css("background-image", "url('../proyecto1/img/hojas.jpg')");
        //cambia botones de leer mas de articulos
        $(".leer_más").removeClass("rojo azul");
        $(".leer_más").addClass("verde");
        //cambia color texto
        $("#titulo").removeClass("rojo azul");
        $("#titulo").addClass("verde");
        //cambio color boton login
        $("#boton_login").removeClass("rojo azul")
            .addClass("verde");
        $("#buton_logout").removeClass("rojo azul")
            .addClass("verde");
        //cambio de color al hacer hover en menu
        $(".lis").removeClass("li_rojo li_azul");
        $(".lis").addClass("li_verde");

    });
    $("#color_azul").click(function () {
        //cambio el fondo
        $("body").css("background-image", "url('../proyecto1/img/cielo.jpg')");
        //cambia botones de leer mas de articulos
        $(".leer_más").removeClass("rojo verde");
        $(".leer_más").addClass("azul");
        //cambia color texto
        $("#titulo").removeClass("rojo verde");
        $("#titulo").addClass("azul");
        //cambio color boton login
        $("#boton_login").removeClass("rojo verde")
            .addClass("azul");
            $("#buton_logout").removeClass("rojo verde")
            .addClass("azul");
        //cambio de color al hacer hover en menu
        $(".lis").removeClass("li_rojo li_verde");
        $(".lis").addClass("li_azul");
    });
}

function botonRegresar(){

    $("#goback").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
}

function guardarLocalStorage(){
    if (typeof Storage != 'undefined') {
        console.log("Localstorage disponible");
    } else {
        console.log("localstorage incompatible");
    }

    $("#boton_login").click(function () {
        //si los campos son llenados
        if(($("#name").val()!='')&&($("#email").val()!='')&&($("#password").val()!='')){
            var usuario = {
                name: $("#name").val(),
                email: $("#email").val(),
                password: $("#password").val()
            };
            localStorage.setItem("usuario", JSON.stringify(usuario));
        }else{
            alert("Llena los datos correctamente");
        }
    });

    var userjs = JSON.parse(localStorage.getItem("usuario"));
    if (userjs == null) {//si es null es que no hay usuarios en local
        console.log("no hay usuarios en local");
        $("#login_sidebar").removeClass("oculto");//va a estar visible el form
        $("#sesion_iniciada").addClass("oculto");//va a estar invisible el saludo al usuario
    } else {//de lo contrario, es que sí hay un usuario
        console.log(userjs);
        $("#login_sidebar").addClass("oculto");//va a estar visible el form
        $("#sesion_iniciada").removeClass("oculto");//va a estar invisible el saludo al usuario

        //como sí hay un usuario se va a mostar el nombre de éste en el h3

        // var plantilla_saludo=`
        // <h3>Hola ${JSON.parse(localStorage.getItem("usuario")).name}</h3>
        // `;
        var plantilla_saludo=JSON.parse(localStorage.getItem("usuario")).name;
        var h3=document.createElement("h3");
        h3.append("Hola "+plantilla_saludo)
        document.querySelector("#sesion_iniciada").prepend(h3);


        //al presionar el boton de cerrar sesion se borra el usuario en el local storage
        $("#buton_logout").click(function () {
            localStorage.removeItem("usuario");
            $("#login_sidebar").removeClass("oculto");//va a estar visible el form
            $("#sesion_iniciada").addClass("oculto");//va a estar invisible el saludo al usuario
        });
    }
}