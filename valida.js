const validaCampos = require("./validators/validaCampos")
const atualizaNfe = require("./validators/atualizaNfe")
const { readCli, writeCli } = require("./utils/readStdin")

async function valida() {
    let parsedDataArray = await readCli();

    let outputJson = []
    let outputAtualiza = []
    let fornecedores_proibido = parsedDataArray.pop()

    /**
     * Solução = usar o Promise.all para esperar todos os request's
     */

    await Promise.all(parsedDataArray.map(async (item) => {

        switch (item.payloadInput.tipo.acao) {
            case 'ATUALIZACAO': outputAtualiza.push(item); break;
            case 'FORNECEDORES_PROIBIDOS': break;
            default: {
                let value = await validaCampos(item, fornecedores_proibido)
                outputJson.push(value)
            }
        }

    }))

    outputAtualiza.map(async item => {
        atualizaNfe(item, outputJson, fornecedores_proibido)
    })

    writeCli(outputJson)

}

valida()


// stdin.on('end', async function () {
//     stdout.write("\n====================================\n")
//     let inputJSON = inputChunks.join("");
//     parsedDataArray = JSON.parse(inputJSON);
//     /**
//      * Esse não funciona :<
//      */
// // parsedDataArray.map(async (item) => {
// //     let value = await validaCampos(item)
// //     outputJson.push(value)
// // })
// output = JSON.stringify(outputJson, null, '    ')
// stdout.write(output)
// });
