const express = require('express')
const app = express()
const port = 4000
const getCsv = require('./services.js');

/*app.get('/csv', (req, res) => {
  const prezzi = [ 	
    { Data: 1, Benzina: 1 , Gasolio: 1 , Gpl: 1 },
    { Data: 2, Benzina: 1.5 , Gasolio: 1.5 , Gpl: 1.5 },
    { Data: 3, Benzina: 2 , Gasolio: 2 , Gpl: 2 },
    { Data: 4, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
    { Data: 5, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
    { Data: 6, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
    { Data: 7, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
    { Data: 8, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
    { Data: 9, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
    { Data: 10, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
    { Data: 11, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
    { Data: 12, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
    { Data: 13, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
    { Data: 14, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
    { Data: 15, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
    { Data: 16, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
    { Data: 17, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
    { Data: 18, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
    { Data: 19, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
    { Data: 20, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
  ]
  res.send(prezzi)
  })
 /* const prezzi = []; //'read' file da locales simile a fetch
  fs.readFile('./prezzi.json', (err, data) => { // get the data from the file
      if(data != ''){
          products = JSON.parse(data);
      }
      products.push(this);
      fs.writeFile('./prezzi.json', JSON.stringify(products), (err) => {
          console.log(err);
      });            
  }); */ 
//let file = fs.createWriteStream("prezzi.json"); //creaz file non ancora json ma in formato csv


app.get('/csv' , async (req , res) => {
  const prezzicsv = await getCsv()
  res.send(prezzicsv)
  /* et prezzics = fs.readFileSync('prezzi.json')
    .toString() // convert to string
    .split('\n') // split string to lines
    .map(e => e.trim()) // remove white spaces for each line
    .map(e => e.split(',').map(e => e.trim())); // split each line to array
  const prezzi = JSON.stringify(prezzicsv, '', 2); //converto prezzicsv in json
  stream=response.pipe(file);
  stream.on("finish", function() { 
  console.log("done");
})*/
});
//file= fs.createWriteStream("prezzi.json");


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
