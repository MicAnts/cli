const ora = require('ora');

const spinner = ora('下载中....');
spinner.start();
setTimeout(()=>{
  spinner.succeed(`下载成功`);
}, 2000)
