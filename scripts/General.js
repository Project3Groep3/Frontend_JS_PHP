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
*   return welke van de twee datatype het is
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