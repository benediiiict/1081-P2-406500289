var express = require('express');
var router = express.Router();

const portfolioController =require("../controllers/portfolioController");

router.get("/portfolio", portfolioController.getPortfolios);

router.get("/portfolio2", portfolioController.getPortfolios2);


/* GET home page. */
// router.get('/portfolio', function(req, res, next) {
//   res.render('portfolio', { title: 'portfolio' });
// });

module.exports = router;
