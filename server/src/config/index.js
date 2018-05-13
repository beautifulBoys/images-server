
import path from 'path'

const rootPath = __dirname.replace('\\src\\config', '')

export default {
    project_port: 5000,
    rootPath,
    tempDir: path.join(rootPath, '/image_cash'), // 保存图片的临时文件夹
    resourceDir: path.join(rootPath, '/resource') // 资源保存根目录
};
