/*
Import & config
*/
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
            d3Router.post('/', (req, res) => {
                res.json( { msg:"Post data", req: req.body } );
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