# Prezzi_express

## Intro

Progetto realizzato con **Express.js** con lo scopo di recuperare il .csv da questo [link](https://dgsaie.mise.gov.it/open_data_export.php?export-id=1&export-type=csv) e convertirlo in .json

## About

Il file csv contiene i prezzi aggiornati settimanalmente dei carburanti in Italia stilati dal [**MISE**](https://www.mise.gov.it/index.php/it/open-data/elenco-dataset/carburanti-prezzi-praticati-e-anagrafica-degli-impianti)


Oltre alla conversione del file .csv in .json, viene impostato il 'server virtuale' 4000:

### localhost:4000

Che permette la visualizzazione a browser della avvenuta conversione in JSON.

## More Info

I dati in .json ottenuti servono per essere esportati nel mio progetto **React** precedente impostato con il 'server virtuale' 3000:

### localhost:3000

e permettere la 'visualizzazione del JSON' in una tabella interattiva.

La visualizzazione è permessa grazie a una funzione asincrona che con il fetch permette il recupero dei dati dalla porta 4000.
