function getProducts(req, res) {
    res.render('admin/products/all-product');
  }
  
  function getNewProduct(req, res) {
    res.render('admin/products/new-product');
  }
  
  function createNewProduct(req,res) {
    
    res.redirect('/admin/products');
  }
  
  module.exports = {
    getProducts: getProducts,
    getNewProduct: getNewProduct,
    createNewProduct: createNewProduct
  };