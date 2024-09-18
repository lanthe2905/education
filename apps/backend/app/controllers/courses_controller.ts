import { CourseRepository } from "#repositories/course_repository";
import { inject } from "@adonisjs/core";
import type { HttpContext } from "@adonisjs/core/http";
import { create_update_course } from "#validators/course";

@inject()
export default class CoursesController {
  constructor(public repository: CourseRepository) {}
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
    const payload = await request.validateUsing(create_update_course);
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
