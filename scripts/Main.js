$(document).ready(function () {
    // De evenementen
    var evenementen = [];

    getEvents();
    addEventsToPage();

    /*  Haalt de evenementen uit de database
    *   geen parameters
    *   geen return
    */
    function getEvents() {
        evenementen.push('1');
        evenementen.push('2');
        evenementen.push('3');
        evenementen.push('4');
        evenementen.push('5');
        evenementen.push('6');
        evenementen.push('7');
        evenementen.push('8');
        evenementen.push('9');
        evenementen.push('10');
        evenementen.push('11');
        evenementen.push('12');
        evenementen.push('13');
    }

    /*  Voegt evenementen toe aan de pagina
    *   geen parameters
    *   geen return
    */
    function addEventsToPage() {
        var rows = evenementen.length / 3;
        var endRow = rows > Math.round(rows) ? Math.round(rows) + 1 : Math.round(rows);

        // Huidige Index
        var index = 0;

        // Nieuwe Rijen
        for (var i = 0; i < endRow; i++) {
            var tr = document.createElement('tr');

            // Voegt cells toe, 3 per rij minder wanneer deze er niet zijn.
            for (var j = 0; j < 3; j++) {
                if (evenementen[index] != null) {
                    var td = document.createElement('td');
                    td.appendChild(document.createTextNode(evenementen[index]));

                    tr.appendChild(td);
                    index++;
                }
            }
            // Voegt rij toe
            document.getElementById('eventTable').appendChild(tr);
        }
    }
});