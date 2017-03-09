$(document).ready(function(){



    for (var i = 0; i < catalog.length; i++) {
        var monBlockArticle = $('<div class="col-md-3 monBlockArticle"></div>')
        var monArticle = $('<article class="monArticle"></article>')
        var monImage = $('<img class="img-responsive" src="'+catalog[i].thumb+'" alt="">')
        var monTitre = $('<a href="index_produit.html"><h4>'+catalog[i].name+'</h4></a>')
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
    for (var i = 0; i < 3; i++) {
        var numArticle=Math.floor(Math.random()*catalog.length);
        if (i==0) {
            var maDiv = $('<div class="item active "></div>')
        }else {
            var maDiv = $('<div class="item "></div>')
        }
        var monArticle = $('<article class="topArt"></article>')
        var monImage = $('<img class="img-responsive" src="'+catalog[numArticle].thumb+'" alt="">')
        var maDesArt = $('<div class=""></div>')
        var monTitre = $('<a href="index_produit.html"><h4>'+catalog[numArticle].name+'</h4></a>')
        var maDescription =$('<p>'+catalog[i].description.substring(0,100) +'(...)</p>')
        var monPrix =$(' <div class="lePrix text-right ">'+catalog[numArticle].price+'€</div>')
        var monPanier =$('<a href="#">Ajoutter au panier<span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></a>')
        var legende = $('<div class="carousel-caption">Article top '+i+'</div>')


        $(".auTop").append(maDiv);
            maDiv.append(monArticle);
                monArticle.append(monImage);
                monArticle.append(maDesArt)
                maDesArt.append(monTitre)
                maDesArt.append(maDescription);
                maDesArt.append(monPrix);
                maDesArt.append(monPanier);
        console.log(numArticle);
    }

    $('#pagination-demo').twbsPagination({
        items: catalog.length,
        itemOnPage: 8,
        totalPages: 20,
        visiblePages: 5,
        onPageClick: function (event, page) {
            $('#page-content').text('Page ' + page);
        }
    });


})
//
//
// <img class="img-responsive" src="http://placehold.it/100x100" alt="">
// <a href="index_produit.html"><h4>Article 1</h4></a>
// <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmoda.</p>
// <div class="lePrix text-right ">99.99€</div>
// <a href="#">Ajoutter au panier<span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></a>
