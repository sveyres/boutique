$(document).ready(function(){
    var index = GET_PARAM("index")
    var produit = catalog[index]
    $('.lePrix').html(produit.price+"€ TTC")
    $('#imageP').attr("src", produit.thumb)
    $('#titreArt').html(produit.name)
    $('#desc').html(produit.description)




$('.monPanier').click(function(){
    var panier= sessionStorage.getItem("panier");
    var quantite = $('.maQuantite').val()
    if(panier==undefined){
        var panier_json ={};
        panier_json[index]=quantite;
    }else{
        var panier_json = JSON.parse(panier)
        panier_json[index]=quantite;
    }
    panier_json = JSON.stringify(panier_json);
    sessionStorage.setItem("panier",panier_json);
})








    // $('.monPanier').click(function(){
    // var quantite = $('.maQuantite').val()
    // var panier ={};
    // panier[index]=quantite
    //
    //     var panier_json = JSON.stringify(panier);
    //     sessionStorage.setItem("panier",panier_json);
    //
    // })
});
