

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
    case 'aplicação':
            me = "aplicacao"
            break;
  default:
    console.log('nada');
}
        $("img", this).attr("src","/arquivos/fat-arrow-up.png")
        $(`#admake-advanced-filter > .box-filtro.filtro-${me} .opcoes`).slideDown();
    }, function() {
        let me = $(this).text().toLowerCase();


        switch (me) {
          case 'pressão indicada':
            me = "pressao-indicada"
            break;
          case 'tipo de gás':
            me = "tipo-de-gas"
            break;
            case 'aplicação':
            me = "aplicacao"
            break;
          default:
            console.log('nada');
        }
        $("img", this).attr("src","/arquivos/fat-arrow-down.png")
        $(`#admake-advanced-filter > .box-filtro.filtro-${me} .opcoes`).slideUp();
    })


    for(let i = 0; i <  $(" #admake-advanced-filter  .filtro-ativo").length; i++) {
        let texto =  $($(" #admake-advanced-filter  .filtro-ativo")[i]).text()
          $(".filtros-ativos").append(`<div class="filter-pill">${texto}</div>`)
      }
  
      const titles= $( ".menu-departamento h4" )
      const lists = $( ".menu-departamento h4" ).next()

      let subnav = ''
      for(let i = 0; i < titles.length; i++) {
        subnav += `${$(titles[i]).html()} <ul> ${$(lists[i]).html()} </ul>`
      }

      subnav = `<div id="subnavigator"> ${subnav}</div>`
      $("#mySidenav #departament-navegador").prepend(subnav)

}, 1000)


