/* FUNÇÕES PARA OS BOTÕES DO HEADER */
function menuExpand(){
    document.getElementById('filters-menu').style.display = 'block';
    document.getElementById('btn-show').style.display = "none";
    document.getElementById('btn-close').style.display = "block";
}
function menuUnexpand(){
    document.getElementById('filters-menu').style.display = 'none';
    document.getElementById('btn-show').style.display= "block";
    document.getElementById('btn-close').style.display = "none";
}
function btnMapSelected(){
    document.getElementById('btn-map').style.backgroundColor = "steelblue";
    document.getElementById('main-map').style.display = "block";
}
function btnListSelected(){
    document.getElementById('btn-list').style.backgroundColor = "steelblue";
    document.getElementById('list').style.display = "block";
}
function btnHomeSelected(){
    document.getElementById('btn-home').style.backgroundColor = "steelblue";
}
function btnFavSelected(){
    document.getElementById('btn-fav').style.backgroundColor = "steelblue";
}
function btnNotifSelected(){
    document.getElementById('btn-notif').style.backgroundColor = "steelblue";
}
function btnConfigSelected(){
    document.getElementById('btn-config').style.backgroundColor = "steelblue";
}

/* FUNÇÕES PARA OS FILTROS E SUB-FILTROS */

/* AS VARIÁVEIS NÃO FUNCIONARAM NOS METODOS */
let $filtersMenu = document.getElementById("filters-menu");
let $filters = document.getElementsByClassName('filters');
let $subFilters = document.getElementsByClassName('sub-filters');

/* EXPANSÃO DOS SUBFILTROS */

var index = document.querySelectorAll(".filters"); 

index.forEach(function (filterSelect) {
    filterSelect.addEventListener("click", subFiltersExpand);
});

function subFiltersExpand(event){
    $subFilters[Array.from(index).indexOf(event.target)].style.display = "block";
}

/* var index = 0;

$filters[index].addEventListener("click", subFilterExpand);

function filterSelect() {
    subFilterExpand();
} 
function subFilterExpand() {
    $filters[index].style.backgroundColor = "gray";
    $subFilters[index].style.backgroundColor = "lightgray";
    $subFilters[index].style.display = "block";
} */



