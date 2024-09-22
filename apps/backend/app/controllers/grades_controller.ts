import { GradeRepository } from '#repositories/grade_repository';
import { grade_create } from '#validators/grade';
import type { HttpContext } from '@adonisjs/core/http'

export default class GradesController {
  constructor(public repository: GradeRepository) {}
  /**
   * Display a list of resource
   */
  async index({ request, response }: HttpContext) {
    const data = await this.repository.getData(request.all());
    return response.send(data);
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(grade_create);
    return response.status(201).json( await this.repository.store(payload));
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    return response.send(await this.repository.show(params["id"]));
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    return response.send(await this.repository.remove(params["id"]));
  }
}
