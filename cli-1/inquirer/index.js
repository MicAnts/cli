const inquirer = require('inquirer');

/**
 * 命令行问题交互
 * 调用内部api返回一个promise
*/
const questionList = [
  {
    type: 'confirm', 
    name: 'isLoad', // 接收输入结果
    message: '是否执行下载',
  },
  {
    type: 'list', 
    name: 'method',
    message: '选择下载方式',
    choices: ['npm', 'cnpm', 'yarn'],
    when(preAnswer){ // 判断上一个问题的结果
      return preAnswer.isLoad;
    }
  },
  {
    type: 'checkbox', 
    name: 'plugin',
    message: '选择下载插件(多选 )',
    choices: ['eslint', 'router', 'vuex'],
    when(preAnswer){ // 判断上一个问题的结果
      return preAnswer.isLoad;
    }
  },
];

inquirer.prompt(questionList).then(res =>{
  console.log(res);
})