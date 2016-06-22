<?php
    include('Connectie.php');

    // Als er een get request is 
    if(isset($_GET['db']))
    {
        // Lees database uit de get request
        $db = $_GET['db'];

        // Standaard select
        $sel = '*';

        // Als de get voor selector is gezet veranderd deze
        if(isset($_GET['sel']))
        {
            $sel = $_GET['sel'];
        }

        try
        {
            // Selecteer uit de database
            $sql = "SELECT $sel FROM $db";

            // Zorgt ervoor dat er ook een where statement kan zijn
            if(isset($_GET['whereKey']) && isset($_GET['whereValue']))
            {
                $whereKey = $_GET['whereKey'];
                $whereValue = $_GET['whereValue'];
                $sql .= " WHERE $whereKey=$whereValue";
            }

            $result = $pdo->query($sql);

        }
        catch(PDOException $e)
        {
            echo 'Er is een fout opgetreden bij het lezen van de database' . $e->getMessage();
        }

        $rijen = array();

        // Voegt de data uit de database toe aan een array
        while($row = $result->fetch(PDO::FETCH_ASSOC))
        {
            $rijen[] = $row;
        }

        // Encode de array naar json
        echo json_encode($rijen);
    }
?>