import factory from '@adonisjs/lucid/factories'
import Courese from '#models/courese'

export const CoureseFactory = factory
  .define(Courese, async ({ faker }) => {
    return {}
  })
  .build()