<div id="title">
    <h2><?php echo $title; ?></h2>
    <?php
        if(isset($_GET['previous']))
        {
            $prev = $_GET['previous'];

            echo "<button id='terug' data-prev='$prev'>Terug</button>";
        }
    ?>
</div>