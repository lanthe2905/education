
import User from "#models/user";
import { inject } from "@adonisjs/core";

@inject()
export class UserRepository {
  async getData(params: any) {
    const { search, email, sdt, ma_lop, type = 'sinh_vien' } = params
    return await User.query()
      .where('type', type)
      .if(search, (qu) => {
      qu.where('ho_va_ten', 'like', `%${ search }%`)
          .orWhere('maDinhDanh', 'like', `%${search}%`)
      })
      .if(sdt, q => {
        q.where('sdt', sdt)
      })
      .if(email, (q) => {
        q.where('email', email)
      })
      .if(ma_lop, (qu) => {
        qu.where('ma_lop', ma_lop)
      })
      .paginate(params.page, params.limit);
  }

  async show(id: number) {
    return await User.query().where('type', 'sinh_vien').where('id', id).firstOrFail()
  }

  async showGiaoVien(id: number) {
    return await User.query().where('type', 'giao_vien').where('id', id).firstOrFail()
  }

  async update(payload: any, id: number) {
    const user = await User.findOrFail(id)
    user.merge(payload)
    await user.save()
  }

  async store(payload: any) {
    await User.create({
      ...payload,
      type: 'sinh_vien'
    })
    return "Tạo học sinh thành công"
  }

  async storeGiaoVien(payload: any) {
    await User.create({
      ...payload,
      type: 'giao_vien'
    })
    return "Tạo giáo viên thành công"
  }

  async remove(id: number) {
    return await User.query().where('id', id).delete()
  }

}
