'use strict'
const User = use('App/Models/User');

class UserController {

 async store({ request,response }){
    const { username, email,password} = request.all();

    try {

        const user = await User.create({
          username:email,
          email,
          password
        });
        delete user.password;
        return response.status(200).json(user)
    } catch (error) {
      console.log(error)
      if(error.errno === 1062){
        return response.status(500).json({response:'Error',msg:'La dirección de correo electronico que decea registrar ya existe'});
      }

    }
  }


}

module.exports = UserController
