const nfeValidator = require("./nfeValidator");
const idUnidadeSaaSValidador = require("./idUnidadeSaaSValidator");
const axios = require("axios")

const url = "http://worldclockapi.com/api/json/est/now"

const validaCampos = async (parsedData) => {
    parsedData = idUnidadeSaaSValidador(parsedData);
    parsedData = nfeValidator.nfeValidator(parsedData);

    if (parsedData.violations.length == 0) {

        let response = await axios.get(url)

        parsedData.payloadOutput = {
            documento: parsedData.payloadInput.chaveDocumento,
            currentDateTime: response.data.currentDateTime
        }

    } else {
        parsedData.payloadOutput = {}
    }

    if (parsedData.payloadInput.tipo == 'ATUALIZACAO') {

    }

    return parsedData

}

module.exports = validaCampos