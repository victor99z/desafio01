let nfe_repetida = new Set()

const nfeValidator = (parsedData) => {

    if (typeof (parsedData.payloadInput.chaveDocumento.chaveNfe) !== 'string') {
        parsedData.violations.push("chaveNfe não informado")
        return parsedData
    }
    if (parsedData.payloadInput.chaveDocumento.chaveNfe == null) {
        parsedData.violations.push("chaveNfe não informado")
        return parsedData
    }
    if (parsedData.payloadInput.chaveDocumento.chaveNfe === '') {
        parsedData.violations.push("chaveNfe não informado")
        return parsedData
    }


    if (!nfe_repetida.has(parsedData.payloadInput.chaveDocumento.chaveNfe)) {
        nfe_repetida.add(parsedData.payloadInput.chaveDocumento.chaveNfe)
    } else {
        parsedData.violations.push("Erro ao processar evento: ChaveNfe duplicada")
    }

    return parsedData

}

module.exports = { nfeValidator, nfe_repetida };