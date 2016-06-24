<div id="headliner">
    <img src="resources/banner.jpg" alt="Headliner">
    <h2 id="festivalNaam">
        <?php 
            if(isset($_GET['festival']))
            {
                echo $_GET['festival'];
            }   
        ?>
    </h2>
</div>
<br />
<div id="artistList">
    <table id="artistTable">
    </table>
</div>