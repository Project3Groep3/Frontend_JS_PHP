// Voegt functie toe aan de terug knop
$(document).ready(function()
{
    // Wanneer er op de terug knop is gedrukt gaat je terug naar de vorige pagina
    $('#terug').on('click', function()
    {
        navigate($(this).attr('data-prev'));      
    });

});

/*  Zet binary/hex data om naar base64
*   @param1: De binary/hex data die moet worden omgezet
*   return: De base64 string
*/
function hexToBase64(str) 
{
    return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, '').replace(/([\da-fA-F]{2}) ?/g, '0x$1 ').replace(/ +$/, '').split(' ')));
}

/*  Zoekt uit of de image jpeg/png is
*   @param1: De binary/hex data
*   return: welke van de twee datatype het is
*/
function getDataType(data)
{
    var id = data.substr(0, 3);

    // Regex voor identificatie welke datatype het is
    var regexPNG = new RegExp(/[0-9][0-9][0-9]/i);
    var regexJPG = new RegExp(/[A-Z][A-Z][A-Z]/i);

    var execPNG = regexPNG.exec(id);
    var execJPG = regexJPG.exec(id);

    // Data type als tekst
    var type = '';
    if(execPNG != null)
    {
        type = 'png';
    }
    else if(execJPG != null)
    {
        type = 'jpg';
    }

    return type;
}

/*  Navigeert naar een link met get parameters
*   @param1: De link
*   @param2: De get parameters
*   @param3: De vorige pagina
*   geen return
*/
function navigateTo(link, get, previous)
{
    window.location = link + '?' + get + '&previous=' + previous;
}

/*  Navigeert naar een link met get parameters
*   @param1: De link
*   geen return
*/
function navigate(link)
{
    window.location = link;
}

/*  Haalt de festival op
*   @param1: De search query
*   return: Het festival
*/
function getFestivalFromSearchQuery(query)
{
    query = query.replace('%20', ' ');
    query = query.replace('&', ' ');
    query = query.replace('?', ' ');
    query = query.replace('festival', ' ');

    var start = query.indexOf(' ') + 3;
    var end = query.indexOf('previous') - 4;

    var nStr = query.substr(start, end);

    return nStr;
}

/*  Haalt de naam van de artiest op
*   @param1: De search query
*   return: De naam van de artiest
*/
function getArtistNameFromSearchQuery(query)
{
    query = query.replace('%20', ' ');
    query = query.replace('&', ' ');
    query = query.replace('?', ' ');
    query = query.replace('artiest', ' ');

    var start = query.indexOf(' ') + 3;
    var end = query.indexOf('previous') - 4;

    var nStr = query.substr(start, end);

    return nStr;   
}

/*  Veranderd de thema
*   @param1: De thema
*   geen return
*/
function setTheme(festivalID)
{
    // Veranderd de thema
    var thema = getCurrentTheme(festivalID);

    $('#title').css('background-color', thema[0].SecondaryColor).css('color', thema[0].FontColor);
    $('#title h2').css('background-color', thema[0].PrimaryColor).css('color', thema[0].FontColor);
    $('#title button').css('background-color', thema[0].PrimaryColor).css('color', thema[0].FontColor);
}