if(window.location.search.indexOf('previous') == -1)
{
    window.location = window.location + '&previous=index.php';    
}

$(document).ready(function () 
{

    var naam = getFestivalFromSearchQuery(window.location.search);
    var search = naam.replace(new RegExp('%20', 'g'), ' ');

    // Artiesten array
    var artiesten = getFestivalArtist(getFestivalIDByName(search)[0]);
    var festival = getFestivalInfo(naam);
    
    // Voegt tekst toe aan de banner
    $('#festivalInfo').append('<span>Locatie: </span>' + festival[0].Plaats + '<br />');
    $('#festivalInfo').append('<span>Entree: </span>' + '€' + Math.round(festival[0].Prijs, 2));

    addEventsToPage();

    /*  Voegt evenementen toe aan de pagina
    *   geen parameters
    *   geen return
    */
    function addEventsToPage() 
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
            for (var j = 0; j < 3; j++) 
            {
                if (artiesten[index] != null) 
                {
                    // Voegt de images en tekst toe
                    var td = document.createElement('td');
                    var div = document.createElement('div');

                    var nameHead = document.createElement('h2');

                    var name = document.createTextNode(artiesten[index].Artiest);
                    nameHead.appendChild(name);

                    var img = document.createElement('img');

                    var dataType = getDataType(artiesten[index].ArtistImage);

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

    // Wanneer je op een festival klikt
    $('#artistTable td div').on('click', function(e)
    {
        var txt = $(this).find('h2').text();

        navigateTo('artiest.php', 'artiest=' + txt, 'festival.php?festival=' + search);
    });
});