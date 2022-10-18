
const https = require("https");

function toJson(rawData) {
    let prezzi= rawData.split('\n');
    let result = [];
    let headers = prezzi[0].split(",")
    for (let i = 1; i < prezzi.length; i++) {
        let obj = {}
        //DATA_RILEVAZIONE,BENZINA,GASOLIO_AUTO,GPL,GASOLIO_RISCALDAMENTO,O.C._FLUIDO_BTZ,O.C._DENSO_BTZ  
        let row= prezzi[i].split(",")
        //{ Data: 1, Benzina: 1 , Gasolio: 1 , Gpl: 1 },
        obj.Data = row[0];
        obj.Benzina = row[1];
        obj.Gasolio = row[2];
        obj.Gpl = row[3];
       
        result.push(obj);
    }
    return result;
}

function getCsv(){
    return new Promise((resolve, reject) => {
        https.get("https://dgsaie.mise.gov.it/open_data_export.php?export-id=1&export-type=csv", {timeout:60000}, res => {
        //recupero csv da remoto
            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', () => {
            try {
                const prezzi= toJson(rawData);
                resolve(prezzi);
            } catch (e) {
                console.error(e.message);
                reject(e);
            }
            });
        }).on('error', (e) => {
            console.error(`Got error: ${e.message}`);
            reject(e);
        });
    });
}

module.exports =  getCsv;