/*
Import & config
*/
const express = require('express');
const frontRouter = express.Router();
//


/*
Définition
*/
    class FrontRouterClass{
        constructor(){

        }

        routes(){
            // => Homepage
            frontRouter.get('/', (req, res) => {
                res.render('index');
            });

            frontRouter.get('/convert', (req, res) => {
                res.render('convert');
            });

            frontRouter.get('/d3', (req, res) => {
                res.render('d3');
            });
        }

        init(){
            this.routes();
            return frontRouter;
        }
    }
//

/*
Exports
*/
    module.exports = FrontRouterClass;
//