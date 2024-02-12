$(document).ready(function(){
    //Clase activa primer enlace
    $('.lista-categorias .item-categoria[categoria="todas"]').addClass('categoria-abierta');

    $('.item-categoria').click(function(){
        //Clase activa selecionado
        $('.item-categoria, .item-categoria0, .item-categoria1, .item-categoria2, .item-categoria3, .item-categoria4, .item-categoria5').removeClass('categoria-abierta');
        $(this).addClass('categoria-abierta')
    });

    $('.item-categoria0').click(function(){
        var categoriaPrenda = $(this).attr('categoria0');
        console.log(categoriaPrenda);

        //Clase activa selecionado
        $('.item-categoria, .item-categoria0, .item-categoria1, .item-categoria2, .item-categoria3, .item-categoria4, .item-categoria5').removeClass('categoria-abierta');
        $(this).addClass('categoria-abierta')

        //Ocultar prendas
        $('.prenda').hide();

        //Mostrar prendas
        $('.prenda[categoria0="'+categoriaPrenda+'"]').show();
    });

    $('.item-categoria1').click(function(){
        var categoriaPrenda = $(this).attr('categoria1');
        console.log(categoriaPrenda);

        //Clase activa selecionado
        $('.item-categoria, .item-categoria0, .item-categoria1, .item-categoria2, .item-categoria3, .item-categoria4, .item-categoria5').removeClass('categoria-abierta');
        $(this).addClass('categoria-abierta')

        //Ocultar prendas
        $('.prenda').hide();

        //Mostrar prendas
        $('.prenda[categoria1="'+categoriaPrenda+'"]').show();
    });

    $('.item-categoria2').click(function(){
        var categoriaPrenda = $(this).attr('categoria2');
        console.log(categoriaPrenda);

        //Clase activa selecionado
        $('.item-categoria, .item-categoria0, .item-categoria1, .item-categoria2, .item-categoria3, .item-categoria4, .item-categoria5').removeClass('categoria-abierta');
        $(this).addClass('categoria-abierta')

        //Ocultar prendas
        $('.prenda').hide();

        //Mostrar prendas
        $('.prenda[categoria2="'+categoriaPrenda+'"]').show();
    });

    $('.item-categoria3').click(function(){
        var categoriaPrenda = $(this).attr('categoria3');
        console.log(categoriaPrenda);

        //Clase activa selecionado
        $('.item-categoria, .item-categoria0, .item-categoria1, .item-categoria2, .item-categoria3, .item-categoria4, .item-categoria5').removeClass('categoria-abierta');
        $(this).addClass('categoria-abierta')

        //Ocultar prendas
        $('.prenda').hide();

        //Mostrar prendas
        $('.prenda[categoria3="'+categoriaPrenda+'"]').show();
    });

    $('.item-categoria4').click(function(){
        var categoriaPrenda = $(this).attr('categoria4');
        console.log(categoriaPrenda);
    
        //Separar los valores
        var valores = categoriaPrenda.split(' ');
    
        //Clase activa seleccionado
        $('.item-categoria, .item-categoria0, .item-categoria1, .item-categoria2, .item-categoria3, .item-categoria4, .item-categoria5').removeClass('categoria-abierta');
        $(this).addClass('categoria-abierta');
    
        //Ocultar prendas
        $('.prenda').hide();
    
        //Mostrar prendas
        $('.prenda').filter(function() {
            var categoriasPrenda = $(this).attr('categoria4');
            //Comprobar que los valores están presentes
            return valores.every(function(valor) {
                return categoriasPrenda.includes(valor);
            });
        }).show();
    });

    /*$('.item-categoria4').click(function(){
        var categoriaPrenda = $(this).attr('categoria4');
        console.log(categoriaPrenda);

        //Clase activa selecionado
        $('.item-categoria4').removeClass('categoria-abierta');
        $(this).addClass('categoria-abierta')

        //Ocultar prendas
        $('.prenda').hide();

        //Mostrar prendas
        $('.prenda[categoria4="'+categoriaPrenda+'"]').show();
    });*/

    $('.item-categoria5').click(function(){
        var categoriaPrenda = $(this).attr('categoria5');
        console.log(categoriaPrenda);

        //Clase activa selecionado
        $('.item-categoria, .item-categoria0, .item-categoria1, .item-categoria2, .item-categoria3, .item-categoria4, .item-categoria5').removeClass('categoria-abierta');
        $(this).addClass('categoria-abierta')

        //Ocultar prendas
        $('.prenda').hide();

        //Mostrar prendas
        $('.prenda[categoria5="'+categoriaPrenda+'"]').show();
    });

    $('.item-categoria[categoria="todas"]').click(function(){
        $('.prenda').show();
    });
});