let nfe_repetida = new Set()

const nfeValidator = (parsedData, fornecedores_proibido) => {

    let chave = parsedData.payloadInput.chaveDocumento.chaveNfe
    let fornecedor = parsedData.payloadInput.chaveDocumento.codigoFornecedor

    if (typeof (chave) !== 'string' || chave == null || chave === '') {
        parsedData.violations.push("chaveNfe não informado")
        return parsedData
    }

    let filtro_registros = fornecedores_proibido.payloadInput.registros.find(item => item == fornecedor)

    if (filtro_registros) {
        parsedData.violations.push(`Fornecedor proibido, cod = ${fornecedor}`)
    }

    if (!nfe_repetida.has(chave)) {
        nfe_repetida.add(chave)
    }
    else {
        parsedData.violations.push("Erro ao processar evento: ChaveNfe duplicada")
    }

    return parsedData

}

module.exports = { nfeValidator };