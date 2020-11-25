/* NO CASO DE QQR MUDANÇA NO CÓDIGO, COMENTE O CÓDIGO ANTIGO */

/* PARA OS BOTÕES DE OPÇÃO DE BUSCA MUDAREM AO CLICAR */
$('.map-btn').click(function(){
    $('.map-btn').toggleClass('clicked');
});
$('.list-btn').click(function(){
    $('.list-btn').toggleClass('clicked');
});
$('.local-btn').click(function(){
    $('.local-btn').toggleClass('clicked');
});
$('.home-btn').click(function(){
    $('.home-btn').toggleClass('clicked');
});
$('.fav-btn').click(function(){
    $('.fav-btn').toggleClass('clicked');
});
$('.notif-btn').click(function(){
    $('.notif-btn').toggleClass('clicked');
});
$('.settings-btn').click(function(){
    $('.settings-btn').toggleClass('clicked');
});

/* EXPANDIR FILTROS */ 
$('.btn-show').click(function(){
    $('#filters-menu').toggleClass('expand');
});
$('.btn-close').click(function(){
    $('#filters-menu').toggleClass('expand');
});

/* EXPANDIR SUB-FILTROS */ 
$('.filter-item1').click(function(){
    $('#filters-menu ul .sub-filter-item1').toggleClass('expand');
    $('#filters-menu ul li a .list1').toggleClass('turn');
});
$('.filter-item2').click(function(){
    $('#filters-menu ul .sub-filter-item2').toggleClass('expand');
    $('#filters-menu ul li a .list2').toggleClass('turn');
});
$('.filter-item3').click(function(){
    $('#filters-menu ul .sub-filter-item3').toggleClass('expand');
    $('#filters-menu ul li a .list3').toggleClass('turn');
});
$('.filter-item4').click(function(){
    $('#filters-menu ul .sub-filter-item4').toggleClass('expand');
    $('#filters-menu ul li a .list4').toggleClass('turn');
});
$('.filter-item5').click(function(){
    $('#filters-menu ul .sub-filter-item5').toggleClass('expand');
    $('#filters-menu ul li a .list5').toggleClass('turn');
});
$('.filter-item6').click(function(){
    $('#filters-menu ul .sub-filter-item6').toggleClass('expand');
    $('#filters-menu ul li a .list6').toggleClass('turn');
});
$('.filter-item7').click(function(){
    $('#filters-menu ul .sub-filter-item7').toggleClass('expand');
    $('#filters-menu ul li a .list7').toggleClass('turn');
});

/* PARA ESCONDER MENU SE CLICAR FORA DELE */
const $filtersMenu = $('#filters-menu');
$(document).mouseup(e => {
    if(!$filtersMenu.is(e.target)
    && $filtersMenu.has(e.target).length === 0)
    {
        $filtersMenu.removeClass('expand');
    }
}); /* PRECISO MELHORAR ESTA FUNÇÃO */