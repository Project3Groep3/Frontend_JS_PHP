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
        data: 
        {
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
function getFestivalInfo(name)
{
    var festival = [];
    var naam = name.replace(new RegExp('%20', 'g'), ' ');

    // GET request alle festivals
    $.ajax(
    {
        url: 'serverSided/DataEncode.php',
        dataType: 'json',
        type: 'GET',
        async: false,
        data: 
        {
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
    var naam = name.replace(new RegExp('%20', 'g'), ' ');

    // GET request alle festivals
    $.ajax(
    {
        url: 'serverSided/DataEncode.php',
        dataType: 'json',
        type: 'GET',
        async: false,
        data: 
        {
            db: 'Festival',
            whereKey: 'Naam',
            whereValue: "'" + naam + "'",
            sel: 'festivalID'
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
function getFestivalArtist(festivalID)
{
    var artists = [];

    // GET request alle festivals
    $.ajax(
    {
        url: 'serverSided/DataEncode.php',
        dataType: 'json',
        type: 'GET',
        async: false,
        data: 
        {
            db: 'ArtiestenPagina',
            whereKey: 'FestivalID',
            whereValue: festivalID
        },
        success: function (data) 
        {
            artists = data;
        }
    });

    return artists;    
}

/*  Haalt aangegeven artiest op
*   @param1: De naam van de artiest
*   return: Alle info van de artiest
*/
function getArtistByName(name)
{
    var artiest = [];
    var naam = name.replace(new RegExp('%20', 'g'), ' ');

    // GET request alle festivals
    $.ajax(
    {
        url: 'serverSided/DataEncode.php',
        dataType: 'json',
        type: 'GET',
        async: false,
        data: 
        {
            db: 'ArtiestenPagina',
            whereKey: 'Artiest',
            whereValue: "'" + naam + "'"
        },
        success: function (data) 
        {
            artiest = data;
        }
    });

    return artiest;
}

/*  Haalt de huidige ingestelde thema op
*   geen parameters
*   return: De thema
*/
function getCurrentTheme(festivalID)
{
    var thema = [];

    // GET request alle festivals
    $.ajax(
    {
        url: 'serverSided/DataEncode.php',
        dataType: 'json',
        type: 'GET',
        async: false,
        data: 
        {
            db: 'Themas',
            whereKey: 'FestivalID',
            whereValue: festivalID
        },
        success: function (data) 
        {
            thema = data;
        }
    });

    return thema;
}

/*  Haalt de artiest object op uit de database
*   @param1: De paginaID van de artiest
*   return: De artiest object
*/
function getArtistObject(paginaID)
{
    var artiest = [];

    // GET request alle festivals
    $.ajax(
    {
        url: 'serverSided/DataEncode.php',
        dataType: 'json',
        type: 'GET',
        async: false,
        data: 
        {
            db: 'Artiesten',
            whereKey: 'PaginaID',
            whereValue: paginaID
        },
        success: function (data) 
        {
            artiest = data;
        }
    });

    return artiest;
}

/*  Haalt de podium object op die bij de gegeven ID hoort
*   @param1: Het ID van het podium
*   return: Het podium
*/
function getPodiumByID(podiumID)
{
    var podium = [];

    // GET request alle festivals
    $.ajax(
    {
        url: 'serverSided/DataEncode.php',
        dataType: 'json',
        type: 'GET',
        async: false,
        data: 
        {
            db: 'Podiums',
            whereKey: 'PodiumID',
            whereValue: podiumID,
            sel: 'Podiumnaam'
        },
        success: function (data) 
        {
            podium = data;
        }
    });

    return podium;
}