<!DOCTYPE html>
<html lang="en">
    <?php include 'included/header_artiest.php' ?>
    <body>
        <?php
            // Bepaling welke festival het is
            $title = 'Mojo Evenementen';

            if(isset($_GET['artiest']))
            {
                $title = $_GET['artiest'];
            }

            include 'included/title.php'; 
        ?>
        <img src="resources/undefined.png" alt="Artiest" id="artiestImg">
        <h2 id="artiestNaam">Onbekend</h2>
        <div id="artiestInfo">Deze Artiest is niet bekend bij ons</div>
    </body>
</html>
