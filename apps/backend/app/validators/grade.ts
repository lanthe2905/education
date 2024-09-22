import vine from '@vinejs/vine'
/**
 * Validates the post's creation action
 */
export const grade_create = vine.compile(
  vine.object({
    semester: vine.enum(["I", "II", "SUMMER"]),
    student_id: vine.number(),
    course_id: vine.number(),
    grade: vine.number().decimal(0),
  })
)

export const grade_update = vine.compile(
  vine.object({
    id: vine.number(),
    semester: vine.enum(["I", "II", "SUMMER"]),
    student_id: vine.number(),
    course_id: vine.number(),
    grade: vine.number().decimal(0),
  })
)
