import { CourseRepository } from "#repositories/course_repository";
import { inject } from "@adonisjs/core";
import { responseHelper } from "../helpers/index.js";
import type { HttpContext } from "@adonisjs/core/http";
import { create_update_validator } from "#validators/course";

@inject()
export default class CoursesController {
  constructor(public repo: CourseRepository) {}
  /**
   * Display a list of resource
   */
  async index({ request, response }: HttpContext) {
    const data = await this.repo.getData(request.all());
    return response.send(data);
  }

  /**
   * Display form to create a new record
   */
  async create({ request, response }: HttpContext) {
    try {
      const payload = responseHelper.success({
        data: await this.repo.store(request.all()),
        message: "Thêm thành công",
      });

      return response.status(payload.status).json(payload);
    } catch (error) {
    }
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const payload = request.validateUsing(create_update_validator)
    return this.repo.store(payload)
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
