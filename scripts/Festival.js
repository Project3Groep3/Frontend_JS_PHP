// Voegt de previous GET toe als deze er nog niet is
if(window.location.search.indexOf('previous') == -1)
{
    window.location = window.location + '&previous=index.php';    
}

$(document).ready(function () 
{
    // Regex voor GET
    var naam = getFestivalFromSearchQuery(window.location.search);
    var search = naam.replace(new RegExp('%20', 'g'), ' ');

    // Artiesten array
    var artiesten = getFestivalArtist(getFestivalIDByName(search)[0].festivalID);
    var festival = getFestivalInfo(naam);

    // Veranderd de thema
    setTheme(getFestivalIDByName(search)[0].festivalID);

    // Veranderd de datum opmaak
    var beginDatumArray = festival[0].Begindatum.split('-');
    var beginDatum = beginDatumArray[2] + '-' + beginDatumArray[1] + '-' + beginDatumArray[0];

    var eindDatumArray = festival[0].Einddatum.split('-');
    var eindDatum = eindDatumArray[2] + '-' + eindDatumArray[1] + '-' + eindDatumArray[0];

    // Voegt tekst toe aan de banner
    $('#festivalInfo').append('<span>Locatie: </span>' + festival[0].Plaats + '<br />');
    $('#festivalInfo').append('<span>Entree: </span>' + '€' + Math.round(festival[0].Prijs, 2) + '<br />');
    $('#festivalInfo').append('<span>Begindatum: </span>' + beginDatum + '<br />');
    $('#festivalInfo').append('<span>Einddatum: </span>' + eindDatum + '<br />');

    // Voegt alle evenementen toe aan de pagina
    addArtistsToPage();

    /*  Voegt artiesten toe aan de pagina
    *   geen parameters
    *   geen return
    */
    function addArtistsToPage() 
    {
        var rows = artiesten.length / 3;
        var endRow = rows > Math.round(rows) ? Math.round(rows) + 1 : Math.round(rows);

        // Huidige Index
        var index = 0;

        // Nieuwe Rijen
        for (var i = 0; i < endRow; i++) 
        {
            var tr = document.createElement('tr');

            // Voegt cells toe, 3 per rij minder wanneer deze er niet zijn.
            for (var j = 0; j < 3; j++) {
                if (artiesten[index] != null) {
                    // Voegt de images en tekst toe
                    var td = document.createElement('td');
                    var div = document.createElement('div');

                    var nameHead = document.createElement('h2');

                    var name = document.createTextNode(artiesten[index].Artiest);
                    nameHead.appendChild(name);

                    var img = document.createElement('img');

                    var dataType = getDataType(artiesten[index].ArtistImage);

                    // Voegt de image link toe
                    img.setAttribute('src', 'data:image/' + dataType + ';base64,' + hexToBase64(artiesten[index].ArtistImage));
                    img.setAttribute('alt', artiesten[index].Artiest);

                    div.appendChild(img);
                    div.appendChild(nameHead);

                    td.appendChild(div);

                    tr.appendChild(td);
                    index++;
                }
            }
            // Voegt rij toe
            document.getElementById('artistTable').appendChild(tr);
        }
    }

    // Wanneer je op een artiest klikt
    $('#artistTable td div').on('click', function (e) 
    {
        var txt = $(this).find('h2').text();

        navigateTo('artiest.php', 'artiest=' + txt, 'festival.php?festival=' + search);
    });
});