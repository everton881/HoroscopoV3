var xhr = Ti.Network.createHTTPClient();

exports.getHoroscopo = function(callback) {
	xhr.open('GET', 'http://developers.agenciaideias.com.br/horoscopo/json');
	xhr.onload = function () {
		var data = JSON.parse(this.responseText).signos;
		callback(data);

	};
	xhr.onerror = function(e) {
		alert(e.error);
	};
	xhr.send();
};
 


 
