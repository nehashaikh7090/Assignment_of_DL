
const categoryController = require('../controller/category')({})


module.exports = function(router, expressApp){
    
    router.get('/category/getall', categoryController.getCategories);
    router.post('/category/add', categoryController.saveCategory);
    router.post('/category/delete', categoryController.deleteCategory);
    router.post('/category/update', categoryController.updateCategory);

    return router
}

