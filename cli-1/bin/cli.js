#!/Usr/bin/env node
const { program } = require('commander');
const version = require('../package.json').version;
const main = require('../lib');
// 创建命令枚举
const actionMap = {
  create: {
    alias: 'crt',
    description: '创建项目',
    examples: ['cli-1 create|crt <projectname>']
  },
  config: {
    alias: 'cfg',
    description: '配置项',
    examples: [
      'cli-1 cofig|cfg set <key> <value>',
      'cli-1 cofig|cfg get <key>',
    ]
  }
}
// 遍历枚举生成命令
for(const action in actionMap){
  program
    .command(action)
    .alias(actionMap[action].alias)
    .description(actionMap[action].description)
    .action(()=>{
      main(action, process.argv.slice(3));
    })
}
program.on('--help', ()=>{
  console.log('Examples');
  for(const action in actionMap){
    actionMap[action].examples.forEach(item => {
      console.log(' ', item);
    });
  }
})
program.version(version).parse(process.argv);