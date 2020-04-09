// Controle para destaques em departamento

$(".destaques-shelf#aquecedores").show();
$(".destaques-shelf#iluminacao").show();

$(".destaqueslist #aquecedores").click(() => {
    $(".destaques-shelf").hide();
    $(".destaqueslist li span").css({"color": "#333"})
    $(".destaqueslist li .select-triangle").css({"display": "none"})
    $(".destaques-shelf#aquecedores").show()
    
    $(".destaqueslist #aquecedores span").css({"color": "#38B7F8"})
    $(".destaqueslist #aquecedores .select-triangle").css({"display": "block"})
})

$(".destaqueslist #ventiladores").click(() => {
    $(".destaques-shelf").hide();
    $(".destaqueslist li span").css({"color": "#333"})
    $(".destaqueslist li .select-triangle").css({"display": "none"})
    $(".destaques-shelf#ventiladores").show()
    $(".destaqueslist #ventiladores span").css({"color": "#38B7F8"})
    $(".destaqueslist #ventiladores .select-triangle").css({"display": "block"})
})

$(".destaqueslist #duchas").click(() => {
    $(".destaques-shelf").hide();
    $(".destaqueslist li span").css({"color": "#333"})
    $(".destaqueslist li .select-triangle").css({"display": "none"})
    $(".destaques-shelf#duchas").show()

    $(".destaqueslist #duchas span").css({"color": "#38B7F8"})
    $(".destaqueslist #duchas .select-triangle").css({"display": "block"})
})
$(".destaqueslist #loucas").click(() => {
    $(".destaques-shelf").hide();
    $(".destaqueslist li span").css({"color": "#333"})
    $(".destaqueslist li .select-triangle").css({"display": "none"})
    $(".destaques-shelf#loucas").show()

    $(".destaqueslist #loucas span").css({"color": "#38B7F8"})
    $(".destaqueslist #loucas .select-triangle").css({"display": "block"})
})

$(".destaqueslist #tintas").click(() => {
    $(".destaques-shelf").hide();
    $(".destaqueslist li span").css({"color": "#333"})
    $(".destaqueslist li .select-triangle").css({"display": "none"})
    $(".destaques-shelf#tintas").show()

    $(".destaqueslist #tintas span").css({"color": "#38B7F8"})
    $(".destaqueslist #tintas .select-triangle").css({"display": "block"})
})

$(".destaqueslist #iluminacao").click(() => {
    $(".destaques-shelf").hide();
    $(".destaqueslist li span").css({"color": "#333"})
    $(".destaqueslist li .select-triangle").css({"display": "none"})
    $(".destaques-shelf#iluminacao").show()

    $(".destaqueslist #iluminacao span").css({"color": "#38B7F8"})
    $(".destaqueslist #iluminacao .select-triangle").css({"display": "block"})
})

$(".destaqueslist #Medidores").click(() => {
    $(".destaques-shelf").hide();
    $(".destaqueslist li span").css({"color": "#333"})
    $(".destaqueslist li .select-triangle").css({"display": "none"})
    $(".destaques-shelf#Medidores").show()

    $(".destaqueslist #Medidores span").css({"color": "#38B7F8"})
    $(".destaqueslist #Medidores .select-triangle").css({"display": "block"})
})

$(".destaqueslist #placas").click(() => {
    $(".destaques-shelf").hide();
    $(".destaqueslist li span").css({"color": "#333"})
    $(".destaqueslist li .select-triangle").css({"display": "none"})
    $(".destaques-shelf#placas").show()

    $(".destaqueslist #placas span").css({"color": "#38B7F8"})
    $(".destaqueslist #placas .select-triangle").css({"display": "block"})
})

$(".destaqueslist #Prevencao").click(() => {
    $(".destaques-shelf").hide();
    $(".destaqueslist li span").css({"color": "#333"})
    $(".destaqueslist li .select-triangle").css({"display": "none"})
    $(".destaques-shelf#Prevencao").show()

    $(".destaqueslist #Prevencao span").css({"color": "#38B7F8"})
    $(".destaqueslist #Prevencao .select-triangle").css({"display": "block"})
})









// Controle para coleções da Home

let first = $("#colecoes #colection-dropdown li")[0];
$("#dropdownMenu1").html(`${$(first).text()} <i class="fa fa-chevron-down"></i>`);
$(`.colection-item#${$(first).attr("id")}`).show();
$("#colecoes #colection-dropdown li#material-eletrico").click((e) => {
    $("#dropdownMenu1").html(`${$(e.target).text()} <i class="fa fa-chevron-down"></i>`)
    $(".colection-item").hide();
    $(`.colection-item#material-eletrico`).show();
});

$("#colecoes #colection-dropdown li#material-colecao").click((e) => {
    $("#dropdownMenu1").html(`${$(e.target).text()} <i class="fa fa-chevron-down"></i>`)
    $(".colection-item").hide();
    $(`.colection-item#material-colecao`).show();
});




//  Controle para menu mobile 


$(".dropdown-btn#rouparia").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#rouparia i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#rouparia").slideDown()
}, () => {
    $(".dropdown-container#rouparia").hide()
    $(".dropdown-btn#rouparia i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-btn#tableware").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#tableware i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#tableware").slideDown()
}, () => {
    $(".dropdown-container#tableware").hide()
    $(".dropdown-btn#tableware i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-btn#decor").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#decor i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#decor").slideDown()
}, () => {
    $(".dropdown-container#decor").hide()
    $(".dropdown-btn#decor i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-btn#moveis").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#moveis i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#moveis").slideDown()
}, () => {
    $(".dropdown-container#moveis").hide()
    $(".dropdown-btn#moveis i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-btn#presentes").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#presentes i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#presentes").slideDown()
}, () => {
    $(".dropdown-container#presentes").hide()
    $(".dropdown-btn#presentes i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-btn#aromas").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#aromas i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#aromas").slideDown()
}, () => {
    $(".dropdown-container#aromas").hide()
    $(".dropdown-btn#aromas i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-btn#baby").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#baby i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#baby").slideDown()
}, () => {
    $(".dropdown-container#baby").hide()
    $(".dropdown-btn#baby i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-btn#custom").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#moveis i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#custom").slideDown()
}, () => {
    $(".dropdown-container#custom").hide()
    $(".dropdown-btn#custom i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-btn#marcas").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#marcas i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#marcas").slideDown()
}, () => {
    $(".dropdown-container#marcas").hide()
    $(".dropdown-btn#marcas i").attr('class', 'fa fa-angle-down');
})

