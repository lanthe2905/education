import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { UserRepository } from '#repositories/users_repository'
import { createSinhVien } from '#validators/sinh_vien'

@inject()
export default class UsersController {
  constructor(public repo: UserRepository) { }
  /**
   * Display a list of resource
   */
  async index({ request, response }: HttpContext) {
    return response.send(await this.repo.getData(request.all()))
  }

  /**
   * Display form to create a new record
   */
  async create({ }: HttpContext) { }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createSinhVien)
    return response.status(201).send(await this.repo.store(payload))
  }

  async storeGiaoVien({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createSinhVien)
    return response.status(201).send(await this.repo.store(payload))
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const { id } = params
    return response.send(await this.repo.showGiaoVien(id))
  }

  async showGiaoVien({ params, response }: HttpContext) {
    const { id } = params
    return response.send(await this.repo.showGiaoVien(id))

  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) { }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) { }

  /**
   * Delete record
   */
  async destroy({ request, params }: HttpContext) {
    await this.repo.remove(request.param('id'))
    return "Xoá tài khoản thành công"
  }
}
