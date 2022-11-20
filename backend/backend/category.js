const connection = require('../mysqlHandler')
module.exports = function(props){
    return {
        getCategories, 
        saveCategory,
        deleteCategory,
        updateCategory
    }
}
function getCategories(payload, callback){
    connection.query('Select * from category', function(err, response){
        console.log("test")
        if(err){
            let options = {
                status: 500,
                response : null,
                error: err
            }
            callback(options) 
        } else {
            let options = {
                status: 200,
                response : response,
                error: null
            }
            callback(options) 
        }
    })
    
}
function saveCategory(payload, callback){
    let sqlStmt = `INSERT INTO category (name) VALUES ("${payload.name}")`
    connection.query(sqlStmt, function(err, response){
        if(!err){
            let options = {
                status: 200,
                response,
                error: null
            }
            callback(options)
        } else {
            let options = {
                status: 500,
                response: null,
                error: err
            }
            callback(options)
        }
    });
}
function deleteCategory(payload, callback){
   let sqlStmt = `DELETE from category where id = "${payload.id}"`
   
    connection.query(sqlStmt, function(err, response){
        if(!err){
            let options = {
                status: 200,
                response,
                error: null
            }
            callback(options)
        } else {
            let options = {
                status: 500,
                response: null,
                error: err
            }
            callback(options)
        }
    });
}
function updateCategory(payload, callback){
    let sqlStmt = `UPDATE category SET name = "${payload.name}" where id = "${payload.id}"`
     connection.query(sqlStmt, function(err, response){
         if(!err){
             let options = {
                 status: 200,
                 response,
                 error: null
             }
             callback(options)
         } else {
             let options = {
                 status: 500,
                 response: null,
                 error: err
             }
             callback(options)
         }
     });
 }