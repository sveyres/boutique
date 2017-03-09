$(document).ready(function(){


    for (var i = 0; i < catalog.length; i++) {
        var monBlockArticle = $('<div class="col-md-3 monBlockArticle"></div>')
        var monArticle = $('<article class="monArticle"></article>')
        var monImage = $('<img class="img-responsive" src="'+catalog[i].thumb+'" alt="">')
        var monTitre = $('<a href="index_produit.html?index='+i+'"><h4>'+catalog[i].name+'</h4></a>')
        var maDescription =$('<p>'+catalog[i].description.substring(0,100) +'(...)</p>')
        var monPrix =$(' <div class="lePrix text-right ">'+catalog[i].price+'€</div>')
        var monPanier =$('<a href="#">Ajoutter au panier<span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></a>')

        $(".monCatalogue").append(monBlockArticle);
        monBlockArticle.append(monArticle);
        monArticle.append(monImage);
        monArticle.append(monTitre);
        monArticle.append(maDescription);
        monArticle.append(monPrix);
        monArticle.append(monPanier);
    }

    $('#moncata').paginate({
           perPage: 8
       });


});
