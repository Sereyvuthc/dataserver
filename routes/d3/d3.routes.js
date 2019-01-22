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
                res.render('d3');
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