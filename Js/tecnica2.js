$(document).ready(function(){

    //arreglos para los jugadores
    var portero    = document.querySelectorAll(".portero img");
    var defensas   = document.querySelectorAll(".defensa img");
    var volantes   = document.querySelectorAll(".volantes img");
    var delanteros = document.querySelectorAll(".delanteros img");
    var i;

    //caso especial para contenciones en la hoja cuatrodos.html
    var contenciones = document.querySelectorAll(".contencion img");

    //bucles para cada arreglo
    for(i = 0; i < portero.length; i++){
        portero[i].addEventListener("mouseover", cambia, false);
        portero[i].addEventListener("mouseout", restaurar, false);
    }
    for(i = 0; i < defensas.length; i++){
        defensas[i].addEventListener("mouseover", cambia, false);
        defensas[i].addEventListener("mouseout", restaurar, false);
    }
    for(i = 0; i < volantes.length; i++){
        volantes[i].addEventListener("mouseover", cambia, false);
        volantes[i].addEventListener("mouseout", restaurar, false);
    }
    for(i = 0; i < delanteros.length; i++){
        delanteros[i].addEventListener("mouseover", cambia, false);
        delanteros[i].addEventListener("mouseout", restaurar, false);
    }

    //caso especial para contenciones en la hoja cuatrodos.html
    for(i = 0; i < contenciones.length; i++){
        contenciones[i].addEventListener("mouseover", cambia, false);
        contenciones[i].addEventListener("mouseout", restaurar, false);
    }
});

function cambia(e){
    if(e.target == endou){
        $("#endou").attr("src", "../images/endou.gif");
    }
    else if(e.target == fubuki){
        $("#fubuki").attr("src", "../images/fubuki.gif");
    }
    else if(e.target == tsunami){
        $("#tsunami").attr("src", "../images/tsunami.gif");
    }
    else if(e.target == hijikata){
        $("#hijikata").attr("src", "../images/hijikata2.png");
    }
    else if(e.target == tobitaka){
        $("#tobitaka").attr("src", "../images/tobitaka.gif");
    }
    else if(e.target == kazemaru){
        $("#kazemaru").attr("src", "../images/kazemaru.gif");
    }
    else if(e.target == kidou){
        $("#kidou").attr("src", "../images/kido.GIF");
    }
    else if(e.target == fudou){
        $("#fudou").attr("src", "../images/kido.GIF");
    }
    else if(e.target == hiroto){
        $("#hiroto").attr("src", "../images/hiroto.gif");
    }
    else if(e.target == goenji){
        $("#goenji").attr("src", "../images/goenji.gif");
    }
    else if(e.target == someoka){
        $("#someoka").attr("src", "../images/someoka.gif");
    }
}//cambia

function restaurar(e){
    if(e.target == endou){
        $("#endou").attr("src", "../images/endou.png");
    }
    else if(e.target == fubuki){
        $("#fubuki").attr("src", "../images/fubuki.png");
    }
    else if(e.target == tsunami){
        $("#tsunami").attr("src", "../images/tsunami.png");
    }
    else if(e.target == hijikata){
        $("#hijikata").attr("src", "../images/hijikata.png");
    }
    else if(e.target == tobitaka){
        $("#tobitaka").attr("src", "../images/tobitaka.png");
    }
    else if(e.target == kazemaru){
        $("#kazemaru").attr("src", "../images/kazemaru.png");
    }
    else if(e.target == kidou){
        $("#kidou").attr("src", "../images/kidou.png");
    }
    else if(e.target == fudou){
        $("#fudou").attr("src", "../images/fudou.png");
    }
    else if(e.target == hiroto){
        $("#hiroto").attr("src", "../images/hiroto.png");
    }
    else if(e.target == goenji){
        $("#goenji").attr("src", "../images/goenji.png");
    }
    else if(e.target == someoka){
        $("#someoka").attr("src", "../images/someoka.png");
    }
}//restaurar