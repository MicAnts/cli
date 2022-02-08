```js
const inquirer = require("inquirer");

/**
 * 命令行问题交互
 *
 * 调用内部api返回一个promise
 */
const questionList = [
  {
    type: "input",
    name: "username", // 接收输入结果
    message: "请输入名字",
    // default: 'default value',
    validate(val) {
      // 校验规则
      if (val) {
        return true;
      } else {
        return "必填项";
      }
    },
  },
];

inquirer.prompt(questionList).then((res) => {
  console.log(res);
});
```
