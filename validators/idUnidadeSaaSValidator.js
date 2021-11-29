
const idUnidadeSaaS = (parsedData) => {

    if (typeof (parsedData.payloadInput.chaveDocumento.idUnidadeSaas) !== 'string') {
        parsedData.violations.push("idUnidadeSaas não informado")
        return parsedData
    }
    if (parsedData.payloadInput.chaveDocumento.idUnidadeSaas == null) {
        parsedData.violations.push("idUnidadeSaas não informado")
        return parsedData
    }
    if (parsedData.payloadInput.chaveDocumento.idUnidadeSaas === '') {
        parsedData.violations.push("idUnidadeSaas não informado")
        return parsedData
    }

    return parsedData
}

module.exports = idUnidadeSaaS;