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