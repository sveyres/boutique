$(document).ready(function(){
    $(".change" ).change(function() {
        console.log("test");
        $.ajax({
            url: '/boutique/update_panier.php',
            type: 'POST',
            dataType: 'html',
            data: { quantity: $(this).val(),
                    id_contains : $(this).attr("id")}
        });

    });





    // creation()
    // function creation() {
    //     $("#lePanier").empty()
    //     var panier_json= sessionStorage.getItem("panier");
    //     var panier = JSON.parse(panier_json)
    //     var Intermediaire=0;
    //     for (var key in panier) {
    //         var maLigne = $('<tr data-id="'+key+'"></tr>');
    //         var maDesignPanier = $('<th>'+catalog[key].name+'</th>');
    //         var monPrixPanier =$('<td>'+catalog[key].price+'€ TTC</td>');
    //         var maQuantitePanier = $('<td><button type="button" class="moins">-</button><input type="text" value="'+panier[key]+'"><button type="button" class="plus">+</button><button type="button" class="trash"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td>');
    //         var monTotalArticle = $('<td>'+catalog[key].price * panier[key] +'€ TTC</td>');
    //         $("#lePanier").append(maLigne);
    //         maLigne.append(maDesignPanier);
    //         maLigne.append(monPrixPanier);
    //         maLigne.append(maQuantitePanier);
    //         maLigne.append(monTotalArticle);
    //         Intermediaire += parseInt(catalog[key].price) * parseInt(panier[key]);
    //     }
    //
    //     console.log(Intermediaire);
    //     $("#totalFinal").html(Intermediaire+" € TTC")
    //     $(".moins").click(function(){
    //         var panier_json= sessionStorage.getItem("panier");
    //         var panier = JSON.parse(panier_json)
    //         var dataId = $(this).parent().parent().data("id")
    //         if (panier[dataId]>1) {
    //             panier[dataId]--
    //             panier = JSON.stringify(panier);
    //             sessionStorage.setItem("panier",panier)
    //             creation()
    //         }
    //     })
    //     $(".plus").click(function(){
    //         var panier_json= sessionStorage.getItem("panier");
    //         var panier = JSON.parse(panier_json)
    //         var dataId = $(this).parent().parent().data("id")
    //         panier[dataId]++
    //         panier = JSON.stringify(panier);
    //         sessionStorage.setItem("panier",panier)
    //         creation()
    //     })
    //     $(".trash").click(function() {
    //         var dataId = $(this).parent().parent().data("id")
    //         var panier_json= sessionStorage.getItem("panier");
    //         var panier = JSON.parse(panier_json)
    //         delete panier[dataId]
    //         panier = JSON.stringify(panier);
    //         sessionStorage.setItem("panier",panier)
    //         creation()
    //     })
    // }
});
