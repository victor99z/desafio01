const validaCampos = require("./validators/validaCampos")

var stdin = process.stdin,
    stdout = process.stdout,
    inputChunks = [],
    parsedData = {};

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function (chunk) {
    inputChunks.push(chunk);
});

stdin.on('end', function () {
    stdout.write("\n====================================\n")
    var inputJSON = inputChunks.join("");
    parsedData = JSON.parse(inputJSON);
    let output = validaCampos(parsedData)
    output = JSON.stringify(output, null, '    ')
    stdout.write(output)
});



