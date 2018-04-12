import fs from 'fs'
import path from 'path'

// 修改名称
const rename = (oldpath, newpath) => {
  return new Promise((resolve, reject) => {
    fs.rename(oldpath, newpath, (err) => {
      if (err) reject(err)
      else resolve()
    })
  })
}

// 保存图片
const saveImgList = (files, npath) => {
  return new Promise((resolve, reject) => {
    let result = []
    for (let key in files) {
      let file = files[key]
      try {
        rename(file.path, npath + file.name)
      } catch (err) {
        result.push(file)
      }
    }
    if (result.length) reject(result)
    else resolve()
  })
}

export {
  rename,
  saveImgList
}