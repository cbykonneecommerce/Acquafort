

setTimeout(function(){
    $("#admake-advanced-filter > .box-filtro h3").append(`<img src="/arquivos/fat-arrow-down.png" style="max-width: 22px;float: right;margin-top: 6px;"/>`);

    $("#admake-advanced-filter .opcoes").hide();
    
    $("#admake-advanced-filter > .box-filtro h3").toggle(function() {
        let me = $(this).text().toLowerCase();
        
switch (me) {
  case 'pressão indicada':
    me = "pressao-indicada"
    break;
  case 'tipo de gás':
    me = "tipo-de-gas"
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}
        $("img", this).attr("src","/arquivos/fat-arrow-up.png")
        $(`#admake-advanced-filter > .box-filtro.filtro-${me} .opcoes`).slideDown();
    }, function() {
        let me = $(this).text().toLowerCase();
        $("img", this).attr("src","/arquivos/fat-arrow-down.png")
        $(`#admake-advanced-filter > .box-filtro.filtro-${me} .opcoes`).slideUp();
    })


    for(let i = 0; i <  $(" #admake-advanced-filter  .filtro-ativo").length; i++) {
        let texto =  $($(" #admake-advanced-filter  .filtro-ativo")[i]).text()
          $(".filtros-ativos").append(`<div class="filter-pill">${texto}</div>`)
      }
  



}, 1000)


