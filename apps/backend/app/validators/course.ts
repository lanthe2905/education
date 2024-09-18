import vine from '@vinejs/vine'

export const create_update_course = vine.compile(
  vine.object({
    name: vine.string().maxLength(255),
    description: vine.string().optional().nullable(),
    credits: vine.number().decimal(0),
    lecture_id: vine.number(),
  })
)
