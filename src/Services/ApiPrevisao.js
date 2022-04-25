import axios from 'axios'

export const getPrevisao = (geocode) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(`https://apiprevmet3.inmet.gov.br/previsao/${geocode}`)
            resolve(response)
        } catch (error) {
            reject("Ops, algo deu errado!")
        }
    })
}