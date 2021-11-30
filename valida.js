const validaCampos = require("./validators/validaCampos")

let stdin = process.stdin,
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
    let inputJSON = inputChunks.join("");
    parsedDataArray = JSON.parse(inputJSON);

    let outputJson = []

    parsedDataArray.map(parsedData => {
        outputJson.push(validaCampos(parsedData))
    })

    //let output = validaCampos(parsedData)
    outputJson = JSON.stringify(outputJson, null, '    ')
    stdout.write(outputJson)
});



