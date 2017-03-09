$(document).ready(function(){
    var index = GET_PARAM("index")
    var produit = catalog[index]
console.log(produit);
    $('.lePrix').html(produit.price+"€ TTC")
    $('#imageP').attr("src", produit.thumb)
    $('#titreArt')
});
