<?php
    // Probeert verbinding te maken met de database, try/catch wordt gebruikt zodat de site niet crasht bij foutmeldingen
    try
    {
        // Begin connectie
	    $pdo = new PDO('sqlsrv:server=.\SQLEXPRESS;database=Mojo;','','');
    	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    }
    catch(PDOException $e)
    {
	    die ('Unable to connect to the database server.' . $e->getMessage());
    }
?>