

setTimeout(function(){
    $("#admake-advanced-filter > .box-filtro h3").append(`<img src="/arquivos/fat-arrow-down.png" style="max-width: 22px;float: right;margin-top: 6px;"/>`);

    $("#admake-advanced-filter .opcoes").hide();
    
    $("#admake-advanced-filter > .box-filtro h3").toggle(function() {
        let me = $(this).text().toLowerCase();
        $("img", this).attr("src","/arquivos/fat-arrow-up.png")
        $(`#admake-advanced-filter > .box-filtro.filtro-${me} .opcoes`).slideDown();
    }, function() {
        let me = $(this).text().toLowerCase();
        $("img", this).attr("src","/arquivos/fat-arrow-down.png")
        $(`#admake-advanced-filter > .box-filtro.filtro-${me} .opcoes`).slideUp();
    })
}, 1000)