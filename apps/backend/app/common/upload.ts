import { base64 } from '@adonisjs/core/helpers'
import app from '@adonisjs/core/services/app'
import { DateTime } from 'luxon'


async function uploadImage(file: any) {
  try {
    const url = app.makePath('public/uploads')
    file.clientName = base64.encode(file.clientName + DateTime.now().toJSDate()) + "." + file.extname

    if (!file) {
      return
    }

    await file.move(url)
    return file.clientName
  } catch (error) {
    new Error('Upload failed')
  }
}

export {
  uploadImage
}

