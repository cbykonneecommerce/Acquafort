$(".depto-todas").hover(()=>{
    
    $(".depto-todas#todas").show();


    $(".deptonav:not(:first-child)").css( "margin-left", "17em" );
}, 
()=>{
    $(".depto-todas#todas").hide();
    $(".deptonav:not(:first-child)").css( "margin-left", "0" );
})




$(".depto-aquecedores").hover(()=>{
    
    $(".depto-aquecedores#aquecedores").show()
}, 
()=>{
    $(".depto-aquecedores#aquecedores").hide()
})

$(".depto-iluminacao").hover(()=>{
    
    $(".depto-iluminacao#iluminacao").show()
}, 
()=>{
    $(".depto-iluminacao#iluminacao").hide()
})

$(".depto-eletrico").hover(()=>{
    
    $(".depto-eletrico#eletrico").show()
}, 
()=>{
    $(".depto-eletrico#eletrico").hide()
})

$(".depto-hidraulico").hover(()=>{
    
    $(".depto-hidraulico#hidraulico").show()
}, 
()=>{
    $(".depto-hidraulico#hidraulico").hide()
})
$(".depto-incendio").hover(()=>{
    
    $(".depto-incendio#incendio").show()
}, 
()=>{
    $(".depto-incendio#incendio").hide()
})

$(".depto-casa").hover(()=>{
    
    $(".depto-casa#casa").show()
}, 
()=>{
    $(".depto-casa#casa").hide()
})

$(".depto-chuveiro").hover(()=>{
    
    $(".depto-chuveiro#chuveiro").show()
}, 
()=>{
    $(".depto-chuveiro#chuveiro").hide()
})

$(".depto-ferramentas").hover(()=>{
    
    $(".depto-ferramentas#ferramentas").show()
}, 
()=>{
    $(".depto-ferramentas#ferramentas").hide()
})

$(".depto-loucas").hover(()=>{
    
    $(".depto-loucas#loucas").show()
}, 
()=>{
    $(".depto-loucas#loucas").hide()
})

$(".depto-medidores").hover(()=>{
    
    $(".depto-loucas#medidores").show()
}, 
()=>{
    $(".depto-loucas#medidores").hide()
})

$(".depto-sinalizacao").hover(()=>{
    
    $(".depto-sinalizacao#sinalizacao").show()
}, 
()=>{
    $(".depto-sinalizacao#sinalizacao").hide()
})

$(".depto-tinta").hover(()=>{
    
    $(".depto-tinta#tinta").show()
}, 
()=>{
    $(".depto-tinta#tinta").hide()
})

$(".depto-ventilador").hover(()=>{
    
    $(".depto-ventilador#ventilador").show()
}, 
()=>{
    $(".depto-ventilador#ventilador").hide()
})










//  Controle para menu mobile 

$(".dropdown-container").hide();
$(".dropdown-btn#aquecedores").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#aquecedores i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#aquecedores").slideDown()
}, () => {
    $(".dropdown-container#aquecedores").slideUp()
    $(".dropdown-btn#aquecedores i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-container").hide();
$(".dropdown-btn#aquecedorsolar").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#aquecedorsolar i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#aquecedorsolar").slideDown()
}, () => {
    $(".dropdown-container#aquecedorsolar").slideUp()
    $(".dropdown-btn#aquecedorsolar i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-container").hide();
$(".dropdown-btn#aquecedorgas").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#aquecedorgas i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#aquecedorgas").slideDown()
}, () => {
    $(".dropdown-container#aquecedorgas").slideUp()
    $(".dropdown-btn#aquecedorgas i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-container").hide();
$(".dropdown-btn#casa").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#casa i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#casa").slideDown()
}, () => {
    $(".dropdown-container#casa").slideUp()
    $(".dropdown-btn#casa i").attr('class', 'fa fa-angle-down');
})



$(".dropdown-container").hide();
$(".dropdown-btn#chuveiro").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#chuveiro i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#chuveiro").slideDown()
}, () => {
    $(".dropdown-container#chuveiro").slideUp()
    $(".dropdown-btn#chuveiro i").attr('class', 'fa fa-angle-down');
})



$(".dropdown-container").hide();
$(".dropdown-btn#ferramentas").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#ferramentas i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#ferramentas").slideDown()
}, () => {
    $(".dropdown-container#ferramentas").slideUp()
    $(".dropdown-btn#ferramentas i").attr('class', 'fa fa-angle-down');
})




$(".dropdown-container").hide();
$(".dropdown-btn#iluminacao").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#iluminacao i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#iluminacao").slideDown()
}, () => {
    $(".dropdown-container#iluminacao").slideUp()
    $(".dropdown-btn#iluminacao i").attr('class', 'fa fa-angle-down');
})



$(".dropdown-container").hide();
$(".dropdown-btn#loucas").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#loucas i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#loucas").slideDown()
}, () => {
    $(".dropdown-container#loucas").slideUp()
    $(".dropdown-btn#loucas i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-container").hide();
$(".dropdown-btn#eletrico").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#eletrico i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#eletrico").slideDown()
}, () => {
    $(".dropdown-container#eletrico").slideUp()
    $(".dropdown-btn#eletrico i").attr('class', 'fa fa-angle-down');
})



$(".dropdown-container").hide();
$(".dropdown-btn#hidraulico").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#hidraulico i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#hidraulico").slideDown()
}, () => {
    $(".dropdown-container#hidraulico").slideUp()
    $(".dropdown-btn#hidraulico i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-container").hide();
$(".dropdown-btn#medidores").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#medidores i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#medidores").slideDown()
}, () => {
    $(".dropdown-container#medidores").slideUp()
    $(".dropdown-btn#medidores i").attr('class', 'fa fa-angle-down');
})



$(".dropdown-container").hide();
$(".dropdown-btn#medidoresagua").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#medidoresagua i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#medidoresagua").slideDown()
}, () => {
    $(".dropdown-container#medidoresagua").slideUp()
    $(".dropdown-btn#medidoresagua i").attr('class', 'fa fa-angle-down');
})

$(".dropdown-container").hide();
$(".dropdown-btn#medidoresgas").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#medidoresgas i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#medidoresgas").slideDown()
}, () => {
    $(".dropdown-container#medidoresgas").slideUp()
    $(".dropdown-btn#medidoresgas i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-container").hide();
$(".dropdown-btn#sinalizacao").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#sinalizacao i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#sinalizacao").slideDown()
}, () => {
    $(".dropdown-container#sinalizacao").slideUp()
    $(".dropdown-btn#sinalizacao i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-container").hide();
$(".dropdown-btn#incendio").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#incendio i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#incendio").slideDown()
}, () => {
    $(".dropdown-container#incendio").slideUp()
    $(".dropdown-btn#incendio i").attr('class', 'fa fa-angle-down');
})



$(".dropdown-container").hide();
$(".dropdown-btn#tintas").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#tintas i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#tintas").slideDown()
}, () => {
    $(".dropdown-container#tintas").slideUp()
    $(".dropdown-btn#tintas i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-container").hide();
$(".dropdown-btn#ventilador").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#ventilador i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#ventilador").slideDown()
}, () => {
    $(".dropdown-container#ventilador").slideUp()
    $(".dropdown-btn#ventilador i").attr('class', 'fa fa-angle-down');
})








