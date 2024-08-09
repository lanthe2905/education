/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import UsersController from '#controllers/users_controller'

router.group(() => {
  //resource users
  router.group(() => {
    router.resource('users', UsersController)
  }).prefix('/user')




}).prefix('api/v1')
