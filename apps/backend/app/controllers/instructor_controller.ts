import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { UserRepository } from '#repositories/users_repository'
import { create_sinh_vien } from '#validators/sinh_vien'

@inject()
export default class InstructorController {
  constructor(public repo: UserRepository) { }
  /**
   * Display a list of resource
   */
  async index({ request, response }: HttpContext) {
    return response.send(await this.repo.getData(request.all()))
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    request.updateBody({
      type: "instructor"
    })
    const payload = await request.validateUsing(create_sinh_vien)
    return response.status(201).send(await this.repo.storeGiaoVien(payload))
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const { id } = params
    return response.send(await this.repo.showGiaoVien(id))
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const payload = await request.validateUsing(create_sinh_vien)
    const data = await this.repo.update(payload, params['id'])

    return response.send(data)
   }

  /**
   * Delete record
   */
  async destroy({ request }: HttpContext) {
    await this.repo.remove(request.param('id'))
    return "Xoá tài khoản thành công"
  }
}
