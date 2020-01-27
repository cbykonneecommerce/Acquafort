
let sku = 0;

function BatchBuy_OnSkuDataReceived(e) {
    var id = e.skuData.id;
    selectedToBuy = [];
    if (id > 0) {
        console.log(e.skuData);
        sku = e.skuData.id;
    }
}


$(document).ready(function() {


    setTimeout(()=>{
        $('.product-details .price-box .descricao-preco .valor-por').prepend('<img src="/arquivos/avista.png" id="avista" style="width:28px;margin-top:-15px" /><p style="color:#A7A7A7; display:inline; font-size:23px"> Pague à vista</p>');
        $('.product-info .shipping-box label').prepend('<img src="/arquivos/truck2.png" id="minitruck" />');
        $(".product-info .shipping-box .freight-btn").val("Calcular");
    }, 500);

    if(skuJson.skus.length  == 1) {
        console.log("KAWABUNGA")
        sku = skuJson.skus[0].sku;
    }

    var batchBuyListener = new Vtex.JSEvents.Listener('batchBuyListener', BatchBuy_OnSkuDataReceived);
    skuEventDispatcher.addListener(skuDataReceivedEventName, batchBuyListener);
    $(".product-info .shipping-box .freight-btn").val("CALCULAR");


    $(".go-to-cart-button").click(function(e){
        
        if (sku == 0) {
            e.preventDefault();
        alert("Selecione um SKU");
        }
    })





    let value = $(".qtd-field").val();


$(".go-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=1&seller=1&redirect=true&sc=1`);
$(".add-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=1&seller=1&redirect=false&sc=1`);

$(".btn-mais").click(()=>{
    
    $(".qtd-field").val( value ++)
})
$(".btn-menos").click(()=>{
    if ( $(".qtd-field").val() > 1) {
        $(".qtd-field").val( value --)
    }
    
})


$(".qtd-field").on("input propertychange",()=>{
    let qty = $(".qtd-field").val();
    $(".go-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=${qty}&seller=1&redirect=true&sc=1`);
    $(".add-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=${qty}&seller=1&redirect=false&sc=1`);


})

$(".btn-menos").click(()=>{
    let qty = $(".qtd-field").val();
    $(".go-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=${qty}&seller=1&redirect=true&sc=1`);
    $(".add-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=${qty}&seller=1&redirect=false&sc=1`);
})
$(".btn-mais").click(()=>{
    let qty = $(".qtd-field").val();
    $(".go-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=${qty}&seller=1&redirect=true&sc=1`);
    $(".add-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=${qty}&seller=1&redirect=false&sc=1`);

})






$(".add-to-cart-button").click((e)=>{
    e.preventDefault();
        var url = $(".add-to-cart-button").attr('href');
    
        $.ajax({
            url:  url,
            type: "GET",
            crossDomain: !0,
            dataType: "html",
            success: function() {
                alert("Produto adicionado ao carrinho!");
            }
        })
    })



    
});






