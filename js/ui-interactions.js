// Controle para destaques em departamento

$(".destaqueslist #aquecedores").click(() => {
    $(".destaques-shelf").hide();
    $(".destaques-shelf#aquecedores").show()
})

$(".destaqueslist #ventiladores").click(() => {
    $(".destaques-shelf").hide();
    $(".destaques-shelf#ventiladores").show()
})

$(".destaqueslist #duchas").click(() => {
    $(".destaques-shelf").hide();
    $(".destaques-shelf#duchas").show()
})
$(".destaqueslist #loucas").click(() => {
    $(".destaques-shelf").hide();
    $(".destaques-shelf#loucas").show()
})

$(".destaqueslist #tintas").click(() => {
    $(".destaques-shelf").hide();
    $(".destaques-shelf#tintas").show()
})

$(".destaqueslist #iluminacao").click(() => {
    $(".destaques-shelf").hide();
    $(".destaques-shelf#iluminacao").show()
})

$(".destaqueslist #Medidores").click(() => {
    $(".destaques-shelf").hide();
    $(".destaques-shelf#Medidores").show()
})

$(".destaqueslist #placas").click(() => {
    $(".destaques-shelf").hide();
    $(".destaques-shelf#placas").show()
})

$(".destaqueslist #Prevencao").click(() => {
    $(".destaques-shelf").hide();
    $(".destaques-shelf#Prevencao").show()
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

