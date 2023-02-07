
const productsService = require('../services/products.service.js');

class productController {
    constructor() {
        this.products =[];

    }


    async find(req,res){
        try {
            this.products = await productsService.find(req.body);   
            res.status.send(this.products);
            
        } catch (error) {
            res.stat
        }
        
    }

}

module.exports = productController;