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
import CourseController from '#controllers/courses_controller'
import GradesController from '#controllers/grades_controller'

router.group(() => {
  //resource users
  router.post('users/giao-vien', [UsersController, 'storeGiaoVien'])
  router.get('users/giao-vien/:id', [UsersController, 'showGiaoVien'])

  router.resource('users', UsersController).except(['create', 'edit'])
  router.resource('courses', CourseController).except(['create', 'edit'])

  router.resource('/grades', GradesController).except(['create', 'edit'])

}).prefix('api/v1')
