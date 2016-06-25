<!DOCTYPE html>
<html lang="en">
    <?php include 'included/header_festival.php' ?>
    <body>
        <?php
            // Bepaling welke festival het is
            $title = 'Mojo Evenementen';

            include 'included/title.php'; 
        ?>
        <div id="banner">
            <img src="resources/banner.jpg" alt="Banner">
            <h2 id="festivalNaam">
                <?php 
                    if(isset($_GET['festival']))
                    {
                        echo $_GET['festival'];
                    }   
                ?>
            </h2>
            <h3 id="festivalInfo"></h3>
        </div>
        <br />
        <div id="artistList">
            <table id="artistTable">
            </table>
        </div>
    </body>
</html>