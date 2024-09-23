import vine from '@vinejs/vine'

export const create_update_class_enrollment = vine.compile(
  vine.object({
    class_id: vine.number(),
    student_id: vine.number()
  })
)
