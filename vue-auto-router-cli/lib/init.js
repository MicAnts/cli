const { promisify } = require('util')
// figlet 界面文字的插件 
const figlet = promisify(require('figlet'))
// 清屏
const clear = require('clear')
const { clone } = require('./download')
const log = require('../util/log');
//封装子进程
const spawn = async(...args) => {
  const { spawn } = require('child_process');
  return new Promise(resolve => {
    const proc = spawn(...args);
    proc.stdout.pipe(process.stdout);
    proc.stdout.pipe(process.stderr);
    proc.on('close', ()=>{
      resolve();
    })
  })
}

module.exports = async name => {
  // 打印欢迎界面
  clear();
  const data = await figlet('Handsome cli !!!!!!!!!!');
  log(data);
  log(`🚀创建项目:${name}`);
  await clone('github:lydxwj/utils', name);
  await spawn('npm', ['install'], {
    cwd: `./${name}`
  })
  log(`
success!!!!!!!!
==============
  cd ${name}  
  npm run serve
==============
  `, 'yellow')
}