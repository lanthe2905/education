import db from '@adonisjs/lucid/services/db'
import User from '#models/user'
import { test } from '@japa/runner'

test.group('Users create update delete', async () => {
  test('example test', async ({ assert }) => {
    const trx = await db.transaction({ isolationLevel: 'read committed' })
    try {
      const user = new User()
      user.$trx = trx
      user.ngay_sinh = "29/05/1997"
      user.ma_dinh_danh = "gvkhkt202401" //Giảng viên khoa học kỹ thuật năm 2024 mã số 01
      user.gioi_tinh = "nam"
      user.email = "nguyenthelandev@gmail.com"
      user.phone = '0935443210'
      user.ho_va_ten = 'nguyen the lan'
      user.password = '123123'
      user.type = 'giao_vien'
      await user.save()
      assert.isOk('ok')
    } catch (error) {
      console.log(error)
      assert.fail("test failed")
    } finally {
      await trx.rollback()
    }
  })
})
