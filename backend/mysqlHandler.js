const mysql = require("mysql");

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'ecommerce',
//     port: '3306'
// });


var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"categories"

});


connection.connect(function(err){
if (err){
    console.error('error connecting' + err.stack)
    return;
}
console.log('mysql connected')
})

module.exports = connection;





module.exports = connection;