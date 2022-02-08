var shell = require('shelljs');

module.exports = async (args) => {
  // console.log('create ========', ...args);
  shell.exec('vue create fuck');
  console.log('shell end');
}