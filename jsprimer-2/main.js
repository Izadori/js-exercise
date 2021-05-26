const program = require("commander");
const fs = require("fs");
const md2html = require("./md2html");

program.option("--gfm", "gfm拡張を有効にする");
program.parse(process.argv);

const filePath = program.args[0];
const options = program.opts();

const cliOptions = {
  gfm: options.gfm ?? false,
  ...program.opts(),
};

// 非同期形式
fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
  if(err) {
    console.log(err.message);
    process.exit(1);
    return;
  }
  else {
    const html = md2html(file, cliOptions);
    console.log(html);
  }
});

// 同期形式
// try {
//   const file = fs.readFileSync(filePath, { encoding: "utf8" });
//   const html = md2html(file, cliOptions);
//   console.log(html);
// }
// catch(err) {
//   console.log(err.message);
//   process.exit(1);
// }
