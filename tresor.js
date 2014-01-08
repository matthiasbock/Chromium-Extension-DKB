
if (window.location.href.indexOf('id=') < 0) {
    
    console.log("DKB-Steuermappe/tresor.js");
    
    /*
     * Beschreibung einer Datei abrufen
     */
    getDescription = function(id, success) {
        $.ajax({
                url: '/dkb/-?$part=DkbTransactionBanking.content.eSafe.Overview.Folder&$event=pick&id='+id+'&esafe=true&row=0',
                success: function(data) {
                    //console.log(data);
                    var json = '{'+data.between('Beschreibung', '</strong>').between('<strong>', '<').replaceAll('&#034;','"')+'}';
                    ['\b','\f','\n','\r','\t'].forEach(function(a) {
                        json = json.replaceAll(a,'');
                    });
        //            var json = '{"d":"7.1.14","b":"13.79","a":"5er Set Tintenpatronen Canon","e":"380647254085","r":"siehe Drucker"}';
                    console.log(json);
                    json = json.parseJSON();
                    console.log(json);
                    success(json);
                },
                async: false
        });
    };
    
    /*
     * Tabelle: Spalten-Ueberschriften modifizieren
     */
    $('thead').html("<tr>"+
                        "<th>Datum</th>"+
                        "<th>Betrag inkl. Mehrwert-/Umsatzsteuer</th>"+
                        "<th>für</th>"+
                        "<th>steuerlich relevant, weil</th>"+
                        "<th></th>"+
                    "</tr>");
    
    /*
     * Spalten modifizieren
     */
    icons = function(id) {
        return  '<td class="alignLeft nowrap alignRight" style="width: 9%;" headers="'+tableId+':edit">'+
                '<a href="/dkb/-?$part=DkbTransactionBanking.content.eSafe.Overview.Folder&amp;$event=pick&amp;id='+id+'&amp;esafe=true&amp;row=0"><span class="icons iconLoupe0" title="Details"></span></a>'+
                '<a href="/dkb/-?$part=DkbTransactionBanking.content.eSafe.Overview.Folder&amp;$event=edit&amp;id='+id+'&amp;esafe=true&amp;row=0"><span class="icons iconEdit0" title="Dokument ändern"></span></a>'+
                '<a href="/dkb/-?$part=DkbTransactionBanking.content.eSafe.Overview.Folder&amp;$event=delete&amp;id='+id+'&amp;esafe=true&amp;row=0"><span class="icons iconDelete0" title="In den Papierkorb verschieben"></span></a>'+
                '</td>';
    };
    
    modifyRow = function(tr) {
        var id = tr.html().between('$event=pick&amp;id=','&amp;');
        console.log('ID: '+id);
        getDescription(id, function(json) {
            tr.html(
                    '<td>'+json.d+'</td>'+
                    '<td>'+json.b+'</td>'+
                    '<td>'+json.a+'</td>'+
                    '<td>'+json.r+'</td>'+
                    icons(id)
                    );
        });
    };
    
    tableId = $('tbody').html().between('headers="',':');
    console.log('tableId: '+tableId);
    $('tbody > tr').each(function() {
        modifyRow($(this));
    });
    
    /*
     * Style-Anpassungen
     */
    $('h1:contains("Tresor")').html('Steuermappe'); // Ueberschrift
    $('div.textDefaultModule').remove(); // Ihr Ablagefach ...
    $('div.bankingStatusBox').css('margin-bottom','0px');
    $('div.text:contains("Ordner:")').remove(); // Ordner: Tesor/
    $('div.content').append( $('div.text:contains("Speicherplatz")') ); // Speicherplatz-Details unter die Tabelle
    
    // volle Breite
    $('table').css('width','100%');
//    $('div.pageWrapper').css('width','1200px').css('max-width','1200px'); // +200px
//    $('div.grid_4').css('width','950px'); // +200px
}
