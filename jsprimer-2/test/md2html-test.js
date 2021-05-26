const assert = require("assert");
const fs = require("fs");
const path = require("path");
const md2html = require("../md2html");

it("without gfm", () =>{
  const test_file = fs.readFileSync(path.resolve(__dirname, "./fixtures/sample.md"), { encoding: "utf8" });
  const expected_file = fs.readFileSync(path.resolve(__dirname, "./fixtures/expected-nogfm.html"), { encoding: "utf8" });
  assert.strictEqual(md2html(test_file, { gfm: false }).trimEnd(), expected_file.trimEnd());
});

it("with gfm", () =>{
  const test_file = fs.readFileSync(path.resolve(__dirname, "./fixtures/sample.md"), { encoding: "utf8" });
  const expected_file = fs.readFileSync(path.resolve(__dirname, "./fixtures/expected.html"), { encoding: "utf8" });
  assert.strictEqual(md2html(test_file, { gfm: true }).trimEnd(), expected_file.trimEnd());
});
