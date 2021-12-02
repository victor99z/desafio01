const moment = require("moment")

const atualizaNfe = (parsedData, guarda_nfe, fornecedores_proibido) => {

    let chave = parsedData.payloadInput.chaveDocumento.chaveNfe;
    let codigo_filial = parsedData.payloadInput.chaveDocumento.codigoFilial
    let unidade_saas = parsedData.payloadInput.chaveDocumento.idUnidadeSaas
    let fornecedor = parsedData.payloadInput.chaveDocumento.codigoFornecedor

    if (unidade_saas == null || unidade_saas === '' || typeof (unidade_saas) !== 'string') {
        return false
    }

    let filtro_registros = fornecedores_proibido.payloadInput.registros.find(item => item == fornecedor)

    if (filtro_registros) {
        return false
    }

    guarda_nfe.map(item => {
        let temp = item.payloadInput.chaveDocumento
        let hr_atual = moment()
        let hr_att = item.payloadOutput.dateTime
        let diff = moment.duration(hr_atual.diff(hr_att))

        console.log("\n => ", diff.minutes())

        if (temp.chaveNfe == chave && temp.codigoFilial == codigo_filial && diff.minutes() > 3) {

            item.payloadInput.chaveDocumento = parsedData.payloadInput.chaveDocumento
            item.payloadOutput = {
                documento: parsedData.payloadInput.chaveDocumento,
                dateTime: parsedData.payloadOutput.dateTime,

            }
        }
    })

}
module.exports = atualizaNfe