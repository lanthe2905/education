import vine from '@vinejs/vine'

export const create_update_class = vine.compile(
  vine.object({
    class_name: vine.string().maxLength(255).trim(),
    class_code: vine.string().trim(),
  })
)
