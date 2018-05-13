import Id from '../model/id.js'

export default async () => {
    // 初始化时 创建id表
    let obj_user = await Id.findOne({
        type: 'filesId'
    })
    if (!obj_user) {
        await Id.create({
            type: 'filesId'
        })
    }

}
