<?php $title = "Ma boutique | login";

    $current = 'login'; ?>


<?php require 'header.php'; ?>

            <div class="row monMain ">
                <div class="col-md-8 col-md-offset-2 ">
                    <form data-toggle="validator" role="form">
                        <div class="form-group">
                            <label for="inputName" class="control-label">Pseudonyme</label>
                            <input type="text" class="form-control" id="inputName" placeholder="Pseudonyme" required>
                        </div>
                        <div class="form-group">
                            <label for="inputEmail" class="control-label">Email</label>
                            <input type="email" class="form-control" id="inputEmail" placeholder="Email" data-error="Email address invalid" required>
                            <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group">
                            <label for="inputPassword" class="control-label">Password</label>
                            <div class="form-inline row">
                                <div class="form-group col-sm-6">
                                    <input type="password" data-minlength="6" class="form-control" id="inputPassword" placeholder="Password" required>
                                    <div class="help-block">Minimum of 5 characters</div>
                                </div>
                                <div class="form-group col-sm-6">
                                    <input type="password" class="form-control" id="inputPasswordConfirm" data-match="#inputPassword" data-match-error="Whoops, these don't match" placeholder="Confirm" required>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <button type="submit" class="btn btn-primary">Submit</button>
                            <button type="reset" class="btn btn-primary">Reset</button>
                        </div>
                    </form>
                </div>
            </div>

            <?php include 'footer.php'; ?>
