$(document).ready(function(){
    var panierPanier_json= sessionStorage.getItem("panier");
    var panierPanier = JSON.parse(panierPanier_json)
    var key = Object.keys(panierPanier)
    console.log(catalog[key]);
for (var i = 0; i < 1; i++) {
    var maLigne = $('<tr></tr>');
    var maDesignPanier = $('<th>'+catalog[key].name+'</th>');
    var monPrixPanier =$('<td>'+catalog[key].price+'€ TTC</td>');
    var maQuantitePanier = $('<td><button type="button">-</button><input type="text" value="'+' '+'"><button type="button">+</button><button type="button"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td>');
    var monTotalArticle = $('<td>'+' '+'€ TTC</td>');

    $("#lePanier").append(maLigne);
    maLigne.append(maDesignPanier);
    maLigne.append(monPrixPanier);
    maLigne.append(maQuantitePanier);
    maLigne.append(monTotalArticle);
}

});
