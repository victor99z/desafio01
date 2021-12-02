

const readCli = () => {
    return new Promise(resolve => {
        let stdin = process.stdin,
            inputChunks = [],
            parsedData = {};

        stdin.resume();
        stdin.setEncoding('utf8');

        stdin.on('data', function (chunk) {
            inputChunks.push(chunk);
        });

        stdin.on('end', function () {
            let inputJSON = inputChunks.join("");
            parsedData = JSON.parse(inputJSON);
            resolve(parsedData)
        });
    })
}

const writeCli = (data) => {
    let stdout = process.stdout
    stdout.write("\n========================== Output ================================\n")
    outputJson = JSON.stringify(data, null, '    ')
    stdout.write(outputJson)
}

module.exports = { readCli, writeCli }