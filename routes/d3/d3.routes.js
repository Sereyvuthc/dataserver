/*
Import & config
*/
    const d3 = require('d3');
    const express = require('express');
    const d3Router = express.Router();
//


/*
Définitions
*/
    class d3RouterClass{
        constructor(){}

        routes(){
            d3Router.get('/', (req, res) => {
                res.json( { msg:"Hello API" } );
            });
            d3Router.post('/convert', (req, res) => {
                // => Convertir un CSV en JSON avec D3js
                let jsonData = d3.csvParse( req.body.input );

                //=> Regex to check numeric value
                const regexNumeric = /(\d+(\.\d+)?)/;



                //=> Faire une boucle sur la collection de données
                for( let i = 0; i < jsonData.length; i++ ){
                    console.log( jsonData[i] )

                    let item = jsonData[i];

                    //=> Boucle sur un objet
                    for( let prop in item ){
                        //=> Vérifier les valeurs numériques
                        if( regexNumeric.test(item[prop]) ){
                            console.log(+item[prop])
                        }
                    }
                }

                res.json( { msg:"Post data", data: jsonData } );
            });
        }

        init(){
            this.routes();
            return d3Router;
        }
    }
//

/*
Exports
*/
    module.exports = d3RouterClass;
//