const chalk = require('chalk');

// 文字颜色
console.log(chalk.green('font color'));
console.log(chalk.keyword('red')('font color'));
console.log(chalk.hex('#fff')('font color'));
// 背景颜色
console.log(chalk.bgBlue('font color'));
console.log(chalk.bgBlue(chalk.green('fuck')));
// 格式化输出
console.log(chalk.green.bold`
远哥牛皮！！！！！！
{red 非常之流批}
`);
