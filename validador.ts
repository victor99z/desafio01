
interface Tipo {
    acao: string,
    idSaaS: number
}

interface ChaveDocumento {
    numeroNota: number,
    numeroSerie: number,
    codigoFilial: string,
    codigoFornecedor: number,
    chaveNfe: string,
    idUnidadeSaas: string
}

interface PayloadInput {
    payload: Tipo,
    chaveDocumento: ChaveDocumento,
}

interface Input {
    payloadInput: PayloadInput,
    payloadOutput: {},
    violations: [String]
}
