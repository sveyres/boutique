<?php $title = "Ma boutique";
    $current = 'Catalogue';
    $links ="<link rel='stylesheet' href='static/external/paginate/src/jquery.paginate.css'>";
    include 'header.php';
    ?>

        <div class="row monMain ">
            <table class="table  monPanier">
                <caption> Mon Panier</caption>
                <thead>
                    <tr>

                        <th>Désignation</th>
                        <th>Prix Unitaire TTC</th>
                        <th>Quantité</th>
                        <th>Prix Total TTC</th>
                </thead>
                <tbody id="lePanier">
                    <?php

                        define('MYSQL_SERVEUR', 'localhost');
                        define('MYSQL_UTILISATEUR', 'phpsyl');
                        define('MYSQL_MOTDEPASSE', 'plop');
                        define('MYSQL_BASE', 'shop');

                        $mysql = new mysqli(MYSQL_SERVEUR,
                                    MYSQL_UTILISATEUR,
                                    MYSQL_MOTDEPASSE,
                                    MYSQL_BASE);
                        $mysql->set_charset("utf8");


                        if(isset($_POST["quantity"])){
                            $sql = "INSERT INTO contains (id_cart, id_product, quantity)
                                    VALUES ('1','".$_POST['id_product']."', '".$_POST['quantity']."');";
                            $result = $mysql->query($sql);
                        }

                        $sql = 'SELECT * FROM Product join contains on Product.id = contains.id_product;';
                        $result = $mysql->query($sql);
                        $i=1;
                        while ($row = $result->fetch_assoc()) {
                            echo '<tr data-id="'.$row["id_product"].'"></tr>
                            <th>'.$row["name"].'</th>
                            <td>'.$row["price"].'€ TTC</td>
                            <td><input type="number" id="'.$row["id"].'" class="change" value="'.$row["quantity"].'">
                            <button type="button" class="trash">
                            <input type="text" class="hidden">
                            <span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td>
                            <td>'.$row["price"] * $row["quantity"].'€ TTC</td>
                            ';

                            $i+=1;

                        };
                     ?>
                </tbody>
            </table>
            <div class="col-md-6 col-md-offset-6 prixTotal">
                <table class="table  monPanier">
                    <tbody>
                        <tr>
                            <th scope="row">Prix Total</th>
                            <td id="totalFinal">Houla !</td>
                        </tr>
                        <tr>
                            <th scope="row">Dont Taxes</th>
                            <td>et oui...</td>
                        </tr>
                    </tbody>
                </table>
                <button type="button" name="button">Commander</button>
            </div>
        </div>
        <!-- /.Row monMain -->


<?php $scripts = '<script src="static/js/script_panier.js"></script>' ?>
<?php include 'footer.php'; ?>
