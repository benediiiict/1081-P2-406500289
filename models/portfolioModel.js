const db = require("../utils/database");
const Portfolio = class Portfolio {
constructor(id, name, category, pic) {
this.id = id;
this.name = name;
this.category = category;
this.pic = pic;
}

static fetchAll() {
return db.execute("SELECT * FROM portfolio");
}

static fetchPortfolio2() {
    return db.execute("SELECT * FROM portfolio2");
    }
};


module.exports = Portfolio;