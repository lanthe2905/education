
import User from "#models/user";

export default class SinhVienRepository {

  async getData(params: any) {
    const { search, lop } = params

    return await User.query()
      .where('type', 'sinh_vien')
      .if(search, (qu) => {
        qu.where('hoVaTen', 'like', `%${search}%`)
          .orWhere('maDinhDanh', 'like', `%${search}%`)
          .orWhere('email', 'like', `%${search}%`)
      })
      .if(lop, (qu) => {
        qu.where('lop', lop)
      })
      .paginate(params.page, params.limit);
  }

  async update(payload: any, id: number) {
    return await User.query().where('id', id).update(payload)
  }

  async store(payload: any) {
    return await User.create(payload)
  }

  async remove(id: number) {
    return await User.query().where('id', id).delete()
  }

}
