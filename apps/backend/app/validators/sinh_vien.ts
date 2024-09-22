import vine from '@vinejs/vine'

/**
 * Validates the post's creation action
 */
export const create_sinh_vien = vine.compile(
  vine.object({
    identifier: vine.string().trim().minLength(6),
    class_id: vine.string().trim().nullable().optional(),
    full_name: vine.string().trim().escape(),
    sex: vine.boolean().nullable().optional(),
    date: vine.date({ formats: "YYYY-MM-DD" }).nullable().optional(),
    address: vine.string().trim().escape().nullable().optional(),
    email: vine.string().unique(async (db, value, field) => {
      const user = await db
        .from('users')
        // .whereNot('id', field.meta.id)
        .if(field.meta.id, q => {
          q.whereNot('id', field.meta.id)
        })
        .where('email', value)
        .first()
      return !user
    }),
    phone: vine.string().trim().escape().nullable().optional(),
    file: vine.file({
      size: '2mb',
      extnames: ['jpg', 'png', 'pdf', 'jpeg']
    }).optional().nullable()
  })
)
