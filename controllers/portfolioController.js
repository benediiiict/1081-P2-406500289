const Portfolio = require("../models/portfolioModel");

exports.getPortfolios = async (req, res, next) => {
 try {
    let portfolios;
    await Portfolio.fetchAll().then(([rows]) => {
      portfolios = rows;
});
res.render('portfolio', { 
    data: portfolios,
    title: 'portfolio' 
});

} catch (err) {
console.log(err);
}

};

exports.getPortfolios2 = async (req, res, next) => {
    try {
       let portfolios2;
       await Portfolio.fetchPortfolio2().then(([rows]) => {
         portfolios2 = rows;
   });
   res.render('portfolio2', { 
       data: portfolios2,
       title: 'portfolio2' 
   });
   
   } catch (err) {
   console.log(err);
   }
   
   };