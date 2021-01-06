/* FUNÇÕES PARA OS BOTÕES DO HEADER */
let $btnShow = document.getElementById('btn-show');
let $btnClose = document.getElementById('btn-close');
let $btnMap = document.getElementById('btn-map');
let $btnList = document.getElementById('btn-list');
let $btnHome = document.getElementById('btn-home');
let $btnFav = document.getElementById('btn-fav');
let $btnPromo = document.getElementById('btn-promo');
let $btnConfig = document.getElementById('btn-config');

$btnShow.onclick = menuExpand;
$btnClose.onclick = menuExpand;
$btnMap.onclick = btnMapSelected;
$btnHome.onclick = btnHomeSelected;
$btnList.onclick = btnListSelected;
$btnFav.onclick = btnFavSelected;
$btnPromo.onclick = btnPromoSelected;
$btnConfig.onclick = btnConfigSelected;

function menuExpand() {
    if ($filtersMenu.style.display == "none"){
        $filtersMenu.style.display = 'block';
        $btnShow.style.display = "none";
        $btnClose.style.display = "block";
    }
    else {
        $filtersMenu.style.display = "none";
        $btnShow.style.display = "block";
        $btnClose.style.display = "none";
    }
}
function btnMapSelected(){
    if (document.getElementById('main-map').style.display == "none"){
        $btnMap.style.backgroundColor = "steelblue";
        document.getElementById('main-map').style.display = "block";
    }
    else {
        document.getElementById('main-map').style.display = "none";
        document.getElementById('btn-map').style.backgroundColor = "silver";
    }
}
function btnListSelected(){
    if (document.getElementById('list').style.display == "none"){
        document.getElementById('btn-list').style.backgroundColor = "steelblue";
        document.getElementById('list').style.display = "block";
    }
    else {
        document.getElementById('list').style.display = "none"
        document.getElementById('btn-list').style.backgroundColor = "silver";
    }
}
function btnHomeSelected(){
    if ($btnHome.style.backgroundColor == "silver"){
        $btnHome.style.backgroundColor = "steelblue";
    }
    else {
        $btnHome.style.backgroundColor = "silver";
    }
}
function btnFavSelected(){
    if ($btnFav.style.backgroundColor == "silver"){
        $btnFav.style.backgroundColor = "steelblue";
    }
    else {
        $btnFav.style.backgroundColor = "silver";
    }
}
function btnPromoSelected(){
    if ($btnPromo.style.backgroundColor == "silver"){
        $btnPromo.style.backgroundColor = "steelblue";
    }
    else {
        $btnPromo.style.backgroundColor = "silver";
    }
}
function btnConfigSelected(){
    if ($btnConfig.style.backgroundColor == "silver"){
        $btnConfig.style.backgroundColor = "steelblue";
    }
    else {
        $btnConfig.style.backgroundColor = "silver";
    }
}

/* FUNÇÕES PARA OS FILTROS E SUB-FILTROS */

let $filtersMenu = document.getElementById("filters-menu");
let $filters = document.getElementsByClassName('filters');
let $subFilters = document.getElementsByClassName('sub-filters');

/* EXPANSÃO DOS SUBFILTROS */

var index = document.querySelectorAll(".filters"); 
var subIndex = document.querySelectorAll(".sub-filters li");

index.forEach(function (filterSelect) {
    filterSelect.addEventListener("click", subFiltersExpand);
});

function subFiltersExpand(event){
    for ( j = 0; j < $filters.length; j++ ){
        if($subFilters[Array.from(index).indexOf(event.target)].style.display == "none"){
            $subFilters[Array.from(index).indexOf(event.target)].style.display = "block";
        } 
        else {
            for ( i = 0; i < $filters.length; i++ ){
            $subFilters[i].style.display = "none";
            }
        }
    }
}

subIndex.forEach(function (subFilterSelect) {
    subFilterSelect.addEventListener("click", subFilterItem);
});
function subFilterItem(event) {
    console.log (Array.from(subIndex).indexOf(event.target));
}