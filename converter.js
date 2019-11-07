const path = require("path");
const fs = require("fs");
const yaml = require("js-yaml");

function convertHex(hexstring) {
  return hexstring.replace("0x", "#");
}

function converter(options) {
  const { directory, name } = options;
  const filename = `${name}.yml`;
  const filepath = path.join(__dirname, directory, filename);
  const src = fs.readFileSync(filepath, "utf8");
  const doc = yaml.safeLoad(src);
  const result = {
    background: convertHex(doc.colors.primary.background),
    black: convertHex(doc.colors.normal.black),
    blue: convertHex(doc.colors.normal.blue),
    brightBlack: convertHex(doc.colors.bright.black),
    brightBlue: convertHex(doc.colors.bright.blue),
    brightCyan: convertHex(doc.colors.bright.cyan),
    brightGreen: convertHex(doc.colors.bright.green),
    brightPurple: convertHex(doc.colors.bright.magenta),
    brightRed: convertHex(doc.colors.bright.red),
    brightWhite: convertHex(doc.colors.bright.white),
    brightYellow: convertHex(doc.colors.bright.yellow),
    cyan: convertHex(doc.colors.normal.cyan),
    foreground: convertHex(doc.colors.primary.foreground),
    green: convertHex(doc.colors.normal.green),
    name,
    purple: convertHex(doc.colors.normal.magenta),
    red: convertHex(doc.colors.normal.red),
    white: convertHex(doc.colors.normal.white),
    yellow: convertHex(doc.colors.normal.yellow)
  };
  return result;
}

module.exports = { converter };