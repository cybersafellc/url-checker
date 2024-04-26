import chalk from "chalk";

const logo = () => {
  return console.log(
    chalk.greenBright(`
    ┓       •     ┓    ┓     
    ┏┫┏┓┏┳┓┏┓┓┏┓  ┏┣┓┏┓┏┃┏┏┓┏┓
    ┗┻┗┛┛┗┗┗┻┗┛┗  ┗┛┗┗ ┗┛┗┗ ┛ 
                              
    `)
  );
};
export default logo;
