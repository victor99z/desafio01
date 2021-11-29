const nfeValidator = require("./nfeValidator");
const idUnidadeSaaSValidador = require("./idUnidadeSaaSValidator");

const validaCampos = (parsedData) => {
    parsedData = idUnidadeSaaSValidador(parsedData);
    parsedData = nfeValidator(parsedData);

    if (parsedData.violations.length == 0) {

        parsedData.payloadOutput = {
            documento: parsedData.payloadInput.chaveDocumento
        }

    } else {
        parsedData.payloadOutput = {}
    }


    return parsedData;
}

module.exports = validaCampos