$(document).ready(function(){
    var index = GET_PARAM("index")
    var produit = catalog[index]
    $('.lePrix').html(produit.price+"€ TTC")
    $('#imageP').attr("src", produit.thumb)
    $('#titreArt').html(produit.name)
    $('#desc').html(produit.description)

    $('.monPanier').click(function(){
    var quantite = $('.maQuantite').val()
    var panier ={};
    panier[index]=quantite


        console.log(panier);
        var panier_json = JSON.stringify(panier);
        sessionStorage.setItem("panier",panier_json);

    })
});
