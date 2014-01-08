
console.log("DKB-Steuermappe/tresor.js");

getDescription = function(id) {
    
    var json = '{'+data.between('<textarea ', '</textarea>').between('>', '<')+'}';
    console.log(json);
    return JSON.parse(json);
};

$('div.textDefaultModule').remove(); // Ihr Ablagefach ...
$('div.bankingStatusBox').css('margin-bottom','0px');
$('div.text:contains("Ordner:")').remove(); // Ordner: Tesor/
//$('th:contains("Typ")').remove();

//$('thead').html('');
