var args = arguments[0] || {};


var backend = require('backend');
var dataBase = require('dataBase');	
backend.getHoroscopo(function(signos){
		
	dataBase('create', null, null, null);
	dataBase('delete', null, null, null);
	signos.forEach(function(signo){
					
			dataBase('insert', signo.nome, signo.data, signo.msg);
			
		return signo;
	});
	
	
	
 
var data = [];
var db = Titanium.Database.open('dataBaseName');
var result = db.execute('SELECT * FROM signos' );
 
while (result.isValidRow()) {
 
    Ti.API.info('result' +result.fieldByName('nome'));
 
    data.push({
        title: result.fieldByName('nome'),
    });
    result.next();
}
result.close();
db.close();
 
 

var aTableView = $.signoTableView;
 

aTableView.setData(data);
 
$.horoscopoWindow.add(aTableView);
 
		
		
		
		
});


function showDetails(e) {

 var horoscopo = Alloy.Collections.Horoscopo.at(e.index);
 var ctr = Alloy.createController('signoDetalhe', horoscopo);
  $.horoscopoTab.open(ctr.getView());
  
}








