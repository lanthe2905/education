import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class StandardResponseMiddleware {
  async handle({ response }: HttpContext, next: NextFn) {
    await next()
    if (response.hasContent && response.getStatus() <= 300) {
      response.send({
        data: response.getBody(),
        status: 'ok',
      })
    }
  }
}
