
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

    return parsedData

}

module.exports = nfeValidator;