'use strict'
$(document).ready(function () {

    //slider
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


    //posts
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
        var plantilla=`
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
        //cambio de color al hacer hover en menu
        $(".lis").removeClass("li_rojo li_verde");
        $(".lis").addClass("li_azul");
    });


});
