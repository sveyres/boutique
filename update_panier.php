

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

    $sql = "UPDATE contains SET quantity = ".$_POST('quantity')."WHERE id = "."$_POST('id_contains').";
    $result = $mysql->query($sql);





 ?>
