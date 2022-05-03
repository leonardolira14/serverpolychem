'use strict'
const Products = use("App/Models/Product")
class ProductController {
 async index({response}){
    try {
     const proyects = await Products.all();
     return response.status(200).json({data:proyects})
    } catch (error) {
      console.log(error);
        return response.status(500).json({response:'Error',mgs:error});
    }
  }
  async byid({request,response}){
    try {
      const {idproduct} = request.all();
      const proyectdata = await Products.find(idproduct);
      return response.status(200).json({data:proyectdata})
    } catch (error) {
      console.log(error);
      return response.status(500).json({response:'Error',mgs:error});
    }
  }
}


module.exports = ProductController
