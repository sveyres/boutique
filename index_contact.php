
<?php $title = "Ma boutique";
    $link = '<link rel="stylesheet" href="static/external/paginate/src/jquery.paginate.css">' ;
    $current = 'Contact'; ?>


<?php require 'header.php'; ?>

        <div class="row monMain ">
            <div class="col-md-12 col-md-offset-2">
                <h3>Nos Coordonnées</h3>
            </div>
            <div class="col-md-4 col-md-offset-2" >
                <dl class="monAdresse ">
                    <dt>Adresse</dt>
                    <dd>1 rue Chaptal</dd>
                    <dd>54859 Paysdesimbeciles</dd>
                </dl>
            </div>
            <div class="col-md-4">

                <dl class="monNum">
                    <dt>Téléphone</dt>
                    <dd>tel : 04 00 25 23 21</dd>
                    <dd>fax : 04 00 25 23 00</dd>
                </dl>
            </div>
            <div class="col-md-8 col-md-offset-2">
                <h3>Nous contacter</h3>
                <form data-toggle="validator">
                    <div class="form-group">
                        <label for="inputName" class="control-label">Nom</label>
                        <input type="text" class="form-control" id="inputName" placeholder="Votre nom" required>
                    </div>
                    <div class="form-group">
                        <label for="inputEmail" class="control-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail" placeholder="Email" data-error="veuillez insérer un mail valide" required>
                        <div class="help-block with-errors"></div>
                    </div>
                    <label for="message">Message</label>
                    <div class="form-group">
                        <textarea id="message" name="message" rows="8" cols="80" placeholder="Veuillez saisir votre message"></textarea>
                    </div>
                    <div class="form-group text-center">
                        <button type="submit" class="btn btn-primary">Envoyer</button>
                    </div>
                </form>
            </div>


        </div>
        <!-- /.Row monMain -->

<?php include 'footer.php'; ?>
<?php $scripts = '<script src="static/external/bootstrap-validator/dist/validator.min.js" charset="utf-8"></script>
<script src="static/js/script_contact.js"></script>
' ?>
