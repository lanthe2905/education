import vine from '@vinejs/vine'

/**
 * Validates the post's creation action
 */
export const createPostValidator = vine.compile(
  vine.object({
    maDinhDanh: vine.string().trim().minLength(6),
    lop: vine.string().trim(),
    hoVaTen: vine.string().trim().escape(),
    gioiTinh: vine.string().trim().escape().nullable().optional(),
    ngaySinh: vine.string().trim().escape(),
    diaChi: vine.string().trim().escape().nullable().optional(),
    email: vine.string().trim().escape(),
    type: vine.string().trim().escape(),
    phone: vine.string().trim().escape().nullable().optional(),
    file: vine.file({
      size: '2mb',
      extnames: ['jpg', 'png', 'pdf', 'jpeg']
    })
  })
)
