const express= require('express');
const router = express.Router();
const{add,detail} =require('../controllers/productsController')
/* GET home page. */
router.get('/add', add);
router.get('/detail', detail);
module.exports = router;
