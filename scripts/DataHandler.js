/*  Haalt alle festivals op
*   geen parameters
*   return: alle festivals (object) in een array
*/
function getFestivals()
{
    var festivals = [];

    // GET request alle festivals
    $.ajax(
    {
        url: 'serverSided/DataEncode.php',
        dataType: 'json',
        type: 'GET',
        async: false,
        data: {
            db: 'Festival'
        },
        success: function (data) 
        {
            festivals = data;
        }
    });

    return festivals;
}

/*  Haalt informatie over het gevraagde festival op
*   @param1: het festival waar op gezoekt moet worden
*   return: alle informatie over het festival
*/
function getFestivalInfo(naam)
{
    var festival = [];

    // GET request alle festivals
    $.ajax(
    {
        url: 'serverSided/DataEncode.php',
        dataType: 'json',
        type: 'GET',
        async: false,
        data: {
            db: 'Festival',
            whereKey: 'Naam',
            whereValue: "'" + naam + "'"
        },
        success: function (data) 
        {
            festival = data;
        }
    });

    return festival;    
}

/*  Haalt alle festivals op
*   @param1: Het id van het festival
*   return: alle festivals (object) in een array met de gegeven naam
*/
function getFestivalIDByName(name)
{
    var festivals = [];

    // GET request alle festivals
    $.ajax(
    {
        url: 'serverSided/DataEncode.php',
        dataType: 'json',
        type: 'GET',
        async: false,
        data: {
            db: 'Festival',
            whereKey: 'Naam',
            whereValue: "'" + name + "'",
            sel: 'festivalID'
        },
        success: function (data) {
            festivals = data;
        }
    });

    return festivals;
}

/*  Haalt informatie over het gevraagde festival op
*   @param1: het festival waar op gezoekt moet worden
*   return: alle informatie over het festival
*/
function getFestivalArtist(festivalID)
{
    var festival = [];

    // GET request alle festivals
    $.ajax(
    {
        url: 'serverSided/DataEncode.php',
        dataType: 'json',
        type: 'GET',
        async: false,
        data: {
            db: 'ArtiestenPagina',
            whereKey: 'FestivalID',
            whereValue: festivalID.festivalID
        },
        success: function (data) 
        {
            festival = data;
        }
    });

    return festival;    
}