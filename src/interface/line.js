import chalk from "chalk";

const line = () => {
  return console.log(
    chalk.redBright(`
    ================================$$ domain checker status code $$================================
    `)
  );
};

export default line;
