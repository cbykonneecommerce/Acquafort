
$("#primeirocolec .destaqueslist li").click(function(){
    let content = $("span", this).text()
       $("#primeirocolec .row h3 span").text(content)
   
   })

$("#segundocolec .destaqueslist li").click(function(){
    let content = $("span", this).text()
       $("#segundocolec .row h3 span").text(content)
   
   })


   $("#zap").hover(()=>{
    
    $("#zap").attr("src","/arquivos/zapefron-pol-azul.png");
}, 
()=>{
    $("#zap").attr("src","/arquivos/zapefron-pol.png");
})

$("#calen").hover(()=>{
    
    $("#calen").attr("src","/arquivos/calendario-pol-azul.png");
}, 
()=>{
    $("#calen").attr("src","/arquivos/calendario-pol.png");
})

$("#env").hover(()=>{
    
    $("#env").attr("src","/arquivos/envelope-pol-azul.png");
}, 
()=>{
    $("#env").attr("src","/arquivos/envelope-pol.png");
})





$(".depto-nav #nav-grid .col-sm-2").hover(function () {
    
    const currentImg = $(".content a img",this).attr("src").split('.')[0];
    
    $(".content a img",this).attr("src",`${currentImg}_branco.png`);
}, 
function () {

    const currentImg = $(".content a img",this).attr("src").split('_branco')[0];
    $(".content a img",this).attr("src",`${currentImg}.png`);
})



$(".depto-nav #bottomrow .col-sm-2").hover(function () {
    
    const currentImg = $(".content a img",this).attr("src").split('.')[0];
    
    $(".content a img",this).attr("src",`${currentImg}_branco.png`);
}, 
function () {

    const currentImg = $(".content a img",this).attr("src").split('_branco')[0];
    $(".content a img",this).attr("src",`${currentImg}.png`);
})