$(document).ready(function () 
{
    // De evenementen
    var evenementen = [];

    getEvents();
    addEventsToPage();

    /*  Haalt de evenementen uit de database
    *   geen parameters
    *   geen return
    */
    function getEvents() 
    {
        var festivals = getFestivals();

        for (var i = 0; i < festivals.length; i++) 
        {
            evenementen.push(festivals[i]);
        }
    }

    /*  Voegt evenementen toe aan de pagina
    *   geen parameters
    *   geen return
    */
    function addEventsToPage() 
    {
        var rows = evenementen.length / 3;
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
                if (evenementen[index] != null) 
                {
                    // Voegt de images en tekst toe
                    var td = document.createElement('td');
                    var div = document.createElement('div');

                    var nameHead = document.createElement('h2');
                    var name = document.createTextNode(evenementen[index].Naam);
                    nameHead.appendChild(name);

                    var img = document.createElement('img');

                    var dataType = getDataType(evenementen[index].FestivalImage);

                    // Voegt de image link toe
                    img.setAttribute('src', 'data:image/' + dataType + ';base64,' + hexToBase64(evenementen[index].FestivalImage));
                    img.setAttribute('alt', evenementen[index].Naam);

                    div.appendChild(img);
                    div.appendChild(nameHead);

                    td.appendChild(div);

                    tr.appendChild(td);
                    index++;
                }
            }
            // Voegt rij toe
            document.getElementById('eventTable').appendChild(tr);
        }
    }

    // Wanneer je met de muis over een festival gaat
    $('#events td div').on('mouseenter', function () 
    {
        var row = $(this).parent().parent().index();
        var cel = $(this).parent().index();
        var id = row * 3 + cel;

        var ev = evenementen[id];

        // Afronden op twee comma's
        var prijs = Math.round(ev.Prijs != null ? ev.Prijs : '0.00', 2);
        var plaats = ev.Plaats;

        $(this).find('h2').stop().animate(
        {
            top: '60%'
        },
        {
            duration: 300,
            complete: function () 
            {
                $(this).parent().append('<h4 hidden="hidden">' + 'Plaats: ' + plaats + '<br /> Prijs: €' + prijs + '</h4>');
                $(this).parent().find('h4').fadeOut().fadeIn(250);
            }
        });
    });

    // Wanneer je met de muis uit een festival gaat
    $('#events td div').on('mouseleave', function () 
    {
        $(this).find('h4').stop().fadeOut(250, function()
        {
            $(this).find('h4').remove();
        });

        $(this).find('h2').stop().animate(
        {
            top: '75%'
        });
    });

    // Wanneer je op een festival klikt
    $('#events td div').on('click', function(e)
    {
        var txt = $(this).find('h2').text();

        navigateTo('festival.php', 'festival=' + txt, 'index.php');
    });
});