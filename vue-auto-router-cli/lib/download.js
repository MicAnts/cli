const { promisify } = require('util');
const log = require('../util/log');



module.exports.clone = async (repo, desc) => {
  const download = promisify(require('download-git-repo'));
  const ora = require('ora');
  const process = ora(`下载...${repo}`);
  process.start();
  await download(repo, desc);
  process.succeed();
  log('templete 👌');
}