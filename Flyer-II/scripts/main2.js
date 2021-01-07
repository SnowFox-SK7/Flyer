/* FUNÇÕES PARA OS BOTÕES DO HEADER */
let $btnShow = document.getElementById('btn-show');
let $btnClose = document.getElementById('btn-close');
let $btnMap = document.getElementById('btn-map');
let $btnList = document.getElementById('btn-list');
let $btnHome = document.getElementById('btn-home');
let $btnFav = document.getElementById('btn-fav');
let $btnPromo = document.getElementById('btn-promo');
let $btnConfig = document.getElementById('btn-config');
let $btnGps = document.getElementById('btn-gps');

function menuExpand() {
    if ($filtersMenu.style.display == "block"){
        $filtersMenu.style.display = "none";
        $btnShow.style.display = "block";
        $btnClose.style.display = "none";
    }
    else {
        $filtersMenu.style.display = "block";
        $btnShow.style.display = "none";
        $btnClose.style.display = "block";
        
    }
}
$btnShow.onclick = menuExpand;
$btnClose.onclick = menuExpand;

function btnMapSelected(){
    if (document.getElementById('main-map').style.display == "block"){
        document.getElementById('main-map').style.display = "none";
        document.getElementById('btn-map').style.backgroundColor = "silver";
    }
    else {
        $btnMap.style.backgroundColor = "steelblue";
        document.getElementById('main-map').style.display = "block";        
    }
}
$btnMap.onclick = btnMapSelected;

function btnListSelected(){
    if (document.getElementById('list').style.display == "block"){
        document.getElementById('list').style.display = "none"
        document.getElementById('btn-list').style.backgroundColor = "silver";
    }
    else {
        document.getElementById('btn-list').style.backgroundColor = "steelblue";
        document.getElementById('list').style.display = "block";
    }
}
$btnList.onclick = btnListSelected;

function btnGpsSelected(){
    if ($btnGps.style.backgroundColor == "steelblue"){
        $btnGps.style.backgroundColor = "silver";
    }
    else {
        $btnGps.style.backgroundColor = "steelblue";
    }
}
$btnGps.onclick = btnGpsSelected;


function btnHomeSelected(){
    if ($btnHome.style.backgroundColor == "steelblue"){
        $btnHome.style.backgroundColor = "silver";
    }
    else {
        $btnHome.style.backgroundColor = "steelblue";
    }
}
$btnHome.onclick = btnHomeSelected;

function btnFavSelected(){
    if ($btnFav.style.backgroundColor == "steelblue"){
        $btnFav.style.backgroundColor = "silver";
    }
    else {
        $btnFav.style.backgroundColor = "steelblue";
        
    }
}
$btnFav.onclick = btnFavSelected;

function btnPromoSelected(){
    if ($btnPromo.style.backgroundColor == "steelblue"){
        $btnPromo.style.backgroundColor = "silver";
    }
    else {
        $btnPromo.style.backgroundColor = "steelblue";
    }
}
$btnPromo.onclick = btnPromoSelected;

function btnConfigSelected(){
    if ($btnConfig.style.backgroundColor == "steelblue"){
        $btnConfig.style.backgroundColor = "silver";
    }
    else {
        $btnConfig.style.backgroundColor = "steelblue";
    }
}
$btnConfig.addEventListener("click", btnConfigSelected);

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
        if($subFilters[Array.from(index).indexOf(event.target)].style.display == "block"){
            for ( i = 0; i < $filters.length; i++ ){
                $subFilters[i].style.display = "none";
            }            
        } 
        else {
            $subFilters[Array.from(index).indexOf(event.target)].style.display = "block";            
        }
    }
}

subIndex.forEach(function (subFilterSelect) {
    subFilterSelect.addEventListener("click", subFilterItem);
});
function subFilterItem(event) {
    console.log (Array.from(subIndex).indexOf(event.target));
}