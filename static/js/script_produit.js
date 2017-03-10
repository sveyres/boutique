$(document).ready(function(){
    var index = GET_PARAM("index")
    var produit = catalog[index]
    $('.lePrix').html(produit.price+"€ TTC")
    $('#imageP').attr("src", produit.thumb)
    $('#titreArt').html(produit.name)
    $('#desc').html(produit.description)

    $('.monPanier').click(function(){
    var quantite = $('.maQuantite').val()
        var monObjet = {
            propriete1 : index,
            propriete2 : quantite
        }

        // var panier = {
        //     index : quantite
        //
        //
        // }
        console.log("youpi");
        var monObjetStock_json = JSON.stringify(monObjetStock);
        sessionStorage.setItem("objet",monObjetStock_json);

    })
});
