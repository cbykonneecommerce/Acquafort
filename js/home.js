
$("#primeirocolec .destaqueslist li").click(function(){
    let content = $("span", this).text()
       $("#primeirocolec .row h3 span").text(content)
   
   })

$("#segundocolec .destaqueslist li").click(function(){
    let content = $("span", this).text()
       $("#segundocolec .row h3 span").text(content)
   
   })