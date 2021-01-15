const mysql = require("mysql");
require("dotenv").config();
    
module.exports = function(request) {
    var con = mysql.createConnection({
        user: process.env.DBUSER,
        password: process.env.DBPASSWORD,
        host: process.env.DBHOST,
        database: process.env.DB,
        port: 3306
    });

    return new Promise(function(resolve, reject) {
        con.query(request, function(err, result) {
            if (err) return reject(err);
              resolve(result);
        })
    })
}
