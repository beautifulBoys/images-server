import fs from 'fs'
import path from 'path'

// 修改名称
const rename = (oldpath, newpath) => {
  return new Promise((resolve, reject) => {
    fs.renameSync(oldpath, newpath, (err) => {
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
        result.push({status: true, file})
      } catch (err) {
        result.push({status: false, file, err})
      }
    }
    return result
  })
}

// 文件操作
const readFile = (path) => {
  return new Promise((resolve, reject) => {
    try {
      var data = fs.readFileSync(path)
      resolve(data)
    } catch (err) {
      reject(err)
    }
  })
}

// 递归删除文件或者文件夹及内部内容
const rm = (path) => {
  if(fs.existsSync(path)) { // 检查目录或文件是否存在
    if (fs.statSync(path).isDirectory()) { // 目录
      fs.readdirSync(path).forEach(file => {
        var curPath = path + '/' + file
        if(fs.statSync(curPath).isDirectory()) {
          rmfold(curPath)
        } else {
          fs.unlinkSync(curPath)
        }
      })
      fs.rmdirSync(path)
    } else { // 文件
      fs.unlinkSync(path)
    }
    return {status: true, desc: 'success'}
  } else {
    return  {status: false, desc: '文件或目录不存在'}
  }
}


export {
  rename,
  saveImgList,
  rm
}