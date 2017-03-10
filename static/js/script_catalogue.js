$(document).ready(function() {

var aComp;
    for (var i = 0; i < catalog.length; i++) {
        var monBlockArticle = $('<div class="col-md-3 monBlockArticle grid-item"></div>')
        var monArticle = $('<article class="monArticle"></article>')
        var monImage = $('<img class="img-responsive" src="' + catalog[i].thumb + '" alt="">')
        var monTitre = $('<a href="index_produit.html?index=' + i + '"><h4>' + catalog[i].name + '</h4></a>')
        var maDescription = $('<p>' + catalog[i].description.substring(0, 100) + '(...)</p>')
        var monPrix = $(' <div class="lePrix text-right ">' + catalog[i].price + '€</div>')
        var monPanier = $('<a href="#">Ajoutter au panier<span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></a>')

        $(".monCatalogue").append(monBlockArticle);
        monBlockArticle.append(monArticle);
        monArticle.append(monImage);
        monArticle.append(monTitre);
        monArticle.append(maDescription);
        monArticle.append(monPrix);
        monArticle.append(monPanier);
        aComp = catalog[i].price
        // console.log(catalog[i].price);

        
    }
    function sortByPrice(key1, key2){
        return key1.price < key2.price;
    }
    $('#inlineRadio1').click(function(){
        catalog.sort(sortByPrice);
    });

    $('#moncata').paginate({
        perPage: 8
    });



    // $('#inlineRadio1').click(function(){
    //     $('.grid').isotope({
    //         // options
    //         itemSelector: '.grid-item',
    //         layoutMode: 'fitRows',
    //         sortBy: 'catalog.price'
    //     });
    //
    // })


});
