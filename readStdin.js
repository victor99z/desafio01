
function read() {
    var stdin = process.stdin,
        inputChunks = [],
        parsedData = {};

    stdin.resume();
    stdin.setEncoding('utf8');

    stdin.on('data', function (chunk) {
        inputChunks.push(chunk);
    });

    stdin.on('end', function () {
        var inputJSON = inputChunks.join("");
        parsedData = JSON.parse(inputJSON);
        return parsedData;
    });
}

const readStdin = () => {
    return new Promise((resolve, reject) => {
        resolve(read())
    })
}

module.exports = readStdin