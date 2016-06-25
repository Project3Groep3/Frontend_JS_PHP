$(document).ready(function () 
{
    // Laad de artiesten pagina
    var artiestenPagina = getArtistByName(getArtistNameFromSearchQuery(window.location.search))[0];

    // Veranderd de thema
    setTheme(artiestenPagina.FestivalID);

    // Veranderd de image op de pagina
    var dataType = getDataType(artiestenPagina.ArtistImage);
    $('#artiestImg').attr('src', 'data:image/' + dataType + ';base64,' + hexToBase64(artiestenPagina.ArtistImage));

    // Veranderd de tekst op de pagina
    $('#artiestNaam').text(artiestenPagina.HeaderContent);
    $('#artiestInfo').html(artiestenPagina.InnerContent);
});