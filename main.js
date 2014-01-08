
console.log('DKB-Steuermappe/main.js');

if ($('a:contains("Finanzstatus")').length > 0) {
    $('ul.nav1wrap').append('<li class="nav1item -"><h4><a target="_top" href="https://banking.dkb.de/dkb/-?$part=DkbTransactionBanking.content.eSafe.Overview.Folder&$event=init&key=safe">Steuermappe</a></h4></li>');
}

