const nfeValidator = require("./nfeValidator");
const idUnidadeSaaSValidador = require("./idUnidadeSaaSValidator");
const axios = require("axios")

const url = "http://worldclockapi.com/api/json/est/now"


const validaCampos = async (parsedData, fornecedores_proibido) => {
    parsedData = idUnidadeSaaSValidador(parsedData);
    parsedData = nfeValidator.nfeValidator(parsedData, fornecedores_proibido);

    if (parsedData.violations.length == 0) {

        let response = await axios.get(url)

        parsedData.payloadOutput = {
            documento: parsedData.payloadInput.chaveDocumento,
            dateTime: response.data.currentDateTime
        }

    } else {
        parsedData.payloadOutput = {}
    }

    return parsedData

}

module.exports = validaCampos