import app from '@adonisjs/core/services/app'
import { HttpContext, ExceptionHandler } from '@adonisjs/core/http'
import {errors} from '@vinejs/vine'
export default class HttpExceptionHandler extends ExceptionHandler {
  /**
   * In debug mode, the exception handler will display verbose errors
   * with pretty printed stack traces.
   */
  protected debug = !app.inProduction

  /**
   * The method is used for handling errors and returning
   * response to the client
   */
  async handle(error: unknown, ctx: HttpContext) {
    console.log(error)
    if(error instanceof errors.E_VALIDATION_ERROR) {
      return ctx.response.status(500).json({
        code: 'validation_error',
        // @ts-ignore
        data: error
      })
    }
    return ctx.response.status(500).json({
      code: 'server_error',
      // @ts-ignore
      message: error?.message ?? message
    })
    // return super.handle(error, ctx)

  }

  /**
   * The method is used to report error to the logging service or
   * the third party error monitoring service.
   *
   * @note You should not attempt to send a response from this method.
   */
  async report(error: unknown, ctx: HttpContext) {
    return super.report(error, ctx)
  }
}
