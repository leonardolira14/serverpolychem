'use strict'

class AuthController {
  async login({request,auth,response}){
    const { email,password } = request.all();

        const token = await auth.attempt(email,password);
        if(!token){
          return response.status(500).json({response:'Error',msg:'Contraseña y/o Email no validos'});
        }
        return response.status(200).json(token)

  }
}

module.exports = AuthController
