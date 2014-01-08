
console.log('DKB-Steuermappe/main.js');

var Finanzstatus = $('a:contains("Finanzstatus")');
if (Finanzstatus.length > 0) {
    Finanzstatus.parent().find('ul').append('<li class="nav1item -"><h4><a target="_top" href="https://banking.dkb.de/dkb/-?$part=DkbTransactionBanking.content.eSafe.Overview.Folder&$event=init&key=safe">Steuermappe</a></h4></li>');
}

$('a.label:contains("Tresor")').html('Steuermappe'); // Menue links

