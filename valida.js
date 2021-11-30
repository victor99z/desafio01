const validaCampos = require("./validators/validaCampos")


let stdin = process.stdin,
    stdout = process.stdout,
    inputChunks = [];

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function (chunk) {
    inputChunks.push(chunk);
});

stdin.on('end', async function () {
    stdout.write("\n====================================\n")
    let inputJSON = inputChunks.join("");
    parsedDataArray = JSON.parse(inputJSON);

    let outputJson = []

    /**
     * Solução = usar o Promise.all para esperar todos os request's
     */

    let output = await Promise.all(parsedDataArray.map(async (item) => {
        let value = await validaCampos(item)
        outputJson.push(value)
    }))

    /**
     * Esse não funciona :<
     */
    // parsedDataArray.map(async (item) => {
    //     let value = await validaCampos(item)
    //     outputJson.push(value)
    // })

    output = JSON.stringify(outputJson, null, '    ')
    stdout.write(output)
});



