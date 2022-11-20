const backend = require('../backend/category')({})


function categoryController(props) {
    
    return {
        getCategories,
        saveCategory,
        deleteCategory,
        updateCategory
    }
}



function getCategories(req, res){
    
    backend.getCategories({}, function(response){
        console.log("check")
        console.log(response)
        res.send(response);
});
    
}


function saveCategory(req, res){
    let payload = req.body;
    backend.saveCategory(payload, function(options){
        res.send(options);
    })

}


function deleteCategory(req, res){
    let payload = req.body;
    backend.deleteCategory(payload, function(options){
        res.send(options);
    })

}
function updateCategory(req, res){
    let payload = req.body;
    backend.updateCategory(payload, function(options){
        res.send(options);
    })

}


module.exports = categoryController;