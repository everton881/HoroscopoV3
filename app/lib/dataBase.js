function dataBase(request, nome, data, msg){
	
	if(request == 'create'){
								 
						var seila = Ti.Database.install('dataBaseName', 'dataBaseName');
						var db = Ti.Database.open('dataBaseName');
				db.execute('CREATE TABLE IF NOT EXISTS signos(nome TEXT, data TEXT, msg TEXT)');
				if(db != null){
					
					Ti.API.info("Banco Criado");
					
				}else{
					Ti.API.info("Banco não  Criado");
					
				}
				db.close();
										
					}
		
		  else if(request == 'insert'){
		
		        var db = Ti.Database.open('dataBaseName');
		        db.execute('INSERT INTO signos (nome, data, msg) VALUES(?,?,?)', nome, data, msg);
		       
		         if(db != null){
		        Ti.API.info("Dados inseridos" + db.execute('select *from signos'));
		        }
		        db.close();
		       
		
		
	}
	
	 else if(request == 'delete'){
		
		        var db = Ti.Database.open('dataBaseName');
		        db.execute('delete from signos');
		        db.close();
		       
		
	}
	
	
	else if (request == 'update'){
		
		 var db = Ti.Database.open('dataBaseName');
		        db.execute('UPDATE signos set msg = ? WHERE msg = ? ', msg, msg);
		         if(db != null){
		        Ti.API.info("Dados Atualizados");
		}
		        db.close();
		        
		
	}
	
	
	
		
		else{}
			
		
}

module.exports = dataBase;

