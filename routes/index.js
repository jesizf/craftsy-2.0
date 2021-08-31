var express = require('express');
var router = express.Router();
const{index,admin} =require('../controllers/indexController')
/* GET home page. */
router.get('/', index);
router.get('/admin', admin);
module.exports = router;

/*copio los html del viejo craftsy a views
copio tambien los css de public e imagen, lo que habia
 en carpeta de  js tambien y lo coloco en carpeta
 javascrit*/ 
 /*el archivo html que traje del anterior crafty le cambio la extension a ejs y
 borro el original ejs que vino*/