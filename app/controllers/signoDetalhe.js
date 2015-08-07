

	var args = arguments[0] || {};
	
	$.signoDetalhe.title =args;


function retornoTitulo(e){
	
	$.signoDetalhe.close();
 
}

var backend = require('backend');

backend.getHoroscopo(function(signos){
	
Alloy.Collections.Horoscopo.reset(signos); 


 
 
/*var nome = [];
var msg = [];
var db = Titanium.Database.open('dataBaseName');
var result = db.execute('SELECT * FROM signos' );
 
while (result.isValidRow()) {
 
    Ti.API.info('result' +result.fieldByName('msg'));
 
    nome.push({
        text: result.fieldByName('nome'),
                
    });
    
     msg.push({
        text: result.fieldByName('msg'),
                
    });
        
    result.next();
}
result.close();
db.close();
 
 

var nomeLabel = Ti.UI.createLabel();
var msgLabel = Ti.UI.createLabel();
 

nomeLabel.setText(nome);
msgLabel.setText(msg);
 
$.signoView.add(nomeLabel);
$.signoView.add(msgLabel); */
		
		

		
});



