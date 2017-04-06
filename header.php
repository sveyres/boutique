<?php
    ini_set('display_errors',1);
    error_reporting(E_ALL);
 ?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Boutique</title>
    <link rel="stylesheet" href="static/external/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="static/css/style2.css">
    <link href="https://fonts.googleapis.com/css?family=Walter+Turncoat" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Cinzel|Oswald|Rufina" rel="stylesheet">
    <?php $myLinks = array();
        if(isset($links)){array_push($myLinks, $links);}
        for ($i=0; $i < count($myLinks); $i++) {echo $myLinks[$i];};
        ?>
</head>

<body>
    <div class="container">
        <div class="row monHeader">
            <div class="col-md-12 text-right monIdent">
                <a href="index_login.php">S'identifier <span class="glyphicon glyphicon-user" aria-hidden="true"></span></a>
                <a href="index_panier.php">Panier<span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"><span class="badge">42</span></span></a>
            </div>
            <div class="col-md-12 ">
                <h1><?php echo $title ?></h1>
            </div>

            <div class="col-md-12 nopadding maNav">
                <nav class="navbar navbar-default maNav">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                            <form class="inputRecherche">
                                <input type="text" class="form-control" placeholder="Search">
                                <button type="submit" class="btn btn-default"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                            </form>
                        </div>
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav">
                                <li class="<?php if ($current === 'Home'){echo 'active';}; ?>">
                                <a href="index.php">Home<span class="sr-only">(current)</span></a></li>
                                <li class="<?php if ($current === 'Catalogue'){
                                    echo 'active';
                                }; ?> dropdown">
                                    <a href="index_catalogue.php" class=" dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Catalogue <span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="index_catalogue.php">Général</a></li>
                                        <li role="separator" class="divider"></li>
                                        <li><a href="#">Catégorie 1</a></li>
                                        <li role="separator" class="divider"></li>
                                        <li><a href="#">Catégorie 2</a></li>
                                        <li role="separator" class="divider"></li>
                                        <li><a href="#">Catégorie 3</a></li>
                                        <li role="separator" class="divider"></li>
                                    </ul>
                                </li>
                                <li class = "<?php if ($current === 'Contact'){echo 'active';}; ?>"><a  href="index_contact.php">Contact</a></li>
                            </ul>
                        </div>
                        <!-- /.navbar-collapse -->
                    </div>
                    <!-- /.container-fluid -->
                </nav>
            </div>
        </div>
        <!-- /.Row monHeader -->
