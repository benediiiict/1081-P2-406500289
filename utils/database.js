const mysql=require("mysql2");
const pool=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"ben01190119",
    database:"1081-1a"
});

module.exports=pool.promise();