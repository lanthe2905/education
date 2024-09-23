import { ClassRepository } from '#repositories/class_repository';
import { inject } from '@adonisjs/core';
import { create_update_class} from '#validators/class'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class ClassesController {
  constructor(public repository: ClassRepository){}
  /**
   * Display a list of resource
   */
  async index({request, response}: HttpContext) {
    return response.send(await this.repository.getData(request.all()))
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(create_update_class)
    return response.send(await this.repository.store(payload))
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    return response.send(await this.repository.show(params['id']))
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const id = params['id']
    const payload = await request.validateUsing(create_update_class)
    const data = await this.repository.update(payload, id)
    return response.send(data)
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
