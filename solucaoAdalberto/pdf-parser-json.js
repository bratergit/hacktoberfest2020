const fs = require('fs');
const pdfparse = require('pdf-parse');
const pdffile = fs.readFileSync('EXEMPLO-NOTA-FUTUROS-TORO.pdf');
var texto = " " ;
var re;
var json;
pdfparse(pdffile).then(function (data) {
	for (i=0; i<(data.text).length;i++){
		texto = texto + data.text[i] ;
	}
	texto = texto.split("\n");	
	try {
		json = {
			venda_disponivel:  texto[4].replace(/[^0-9-,\.]/g, ""),
			compra_disponivel: texto[5].replace(/[^0-9-,\.]/g, ""),
			venda_opcao: texto[6].replace(/[^0-9-,\.]/g, ""),
			compra_opcao:texto[7].replace(/[^0-9-,\.]/g, ""),
			ajustes_posicao:texto[8].replace(/[^0-9-,\.]/g, ""),
			ajustes_encerra_hoje:texto[9].replace(/[^0-9-,\.]/g, ""),
			total_de_negocios:texto[10].replace(/[^0-9-,\.]/g, ""),
			ISS: texto[12].replace(/[^0-9-,\.]/g, ""),
			PIS: texto[13].replace(/[^0-9-,\.]/g, ""),
			COFINS: texto[14].replace(/[^0-9-,\.]/g, ""),
			IRRF_COMUM: texto[15].replace(/[^0-9-,\.]/g, ""),
			IRRF_DAY_TRADE: texto[16].replace(/[^0-9-,\.]/g, ""),
			total_tributos: texto[17].replace(/[^0-9-,\.]/g, ""),
			taxa_reg_BMF: texto[19].replace(/[^0-9-,\.]/g, ""),
			taxa_emo_BMF: texto[20].replace(/[^0-9-,\.]/g, ""),
			taxa_operacional: texto[21].replace(/[^0-9-,\.]/g, ""),
			total_custos: texto[22].replace(/[^0-9-,\.]/g, ""),
			total_dos_negocios: texto[23].replace(/[^0-9-,\.]/g, ""),
			tributos: texto[24].replace(/[^0-9-,\.]/g, ""),
			custos: texto[25].replace(/[^0-9-,\.]/g, ""),
			total_liquido: texto[26].replace(/[^0-9-,\.]/g, ""),
			outros: texto[29].replace(/[^0-9-,\.]/g, ""),
			nome: texto[31],
			conta: texto[32].replace(/[^0-9-,\.]/g, ""),
			data_de_referencia: texto[33],
			comprovante: texto[35]
        }		
       createJson(json);
	}catch (err) {
		console.log(err);
    } 

    function createJson(json){
        const dataArchive = JSON.stringify(json);

        // write JSON string to a file
        fs.writeFile('EXEMPLO-NOTA-FUTUROS-TORO.json', dataArchive, (err) => {
             if (err) {
            throw err;
         }
    console.log("JSON data is saved.");
   });        
    }
    

});
