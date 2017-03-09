$(document).ready(function(){
    var index = GET_PARAM("index")
    var produit = catalog[index]
    $('.lePrix').html(produit.price+"€ TTC")
    $('#imageP').attr("src", produit.thumb)
    $('#titreArt').html(produit.name)
    $('#desc').html(produit.description)
});
