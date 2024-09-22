import vine from '@vinejs/vine'

/**
 * Validates the post's creation action
 */
export const create_sinh_vien = vine.compile(
  vine.object({
    ma_dinh_danh: vine.string().trim().minLength(6),
    lop: vine.string().trim().nullable().optional(),
    ho_va_ten: vine.string().trim().escape(),
    gioi_tinh: vine.enum(['nam', 'nu']).nullable().optional(),
    ngay_sinh: vine.date({ formats: "YYYY-MM-DD" }).nullable().optional(),
    dia_chi: vine.string().trim().escape().nullable().optional(),
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
