const chalk = require('chalk')
// 定义一个log函数
const log = (content, key = 'green') => console.log(chalk[key](content))
module.exports = log;