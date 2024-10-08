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
import ClassesController from '#controllers/classes_controller'
import Instructor from '#controllers/instructor_controller'

router.group(() => {

  router.resource('users', UsersController).except(['create', 'edit'])
  router.resource('users/instructor', Instructor).except(['create', 'edit'])

  router.resource('courses', CourseController).except(['create', 'edit'])

  router.resource('/grades', GradesController).except(['create', 'edit'])

  router.resource('/classes', ClassesController).except(['create', 'edit'])

}).prefix('api/v1')
