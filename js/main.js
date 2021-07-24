'use strict'
$(document).ready(function () {
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
    });
});