/**
 * @typedef {object} Cep
 * @property {string} erro
 * @property {string} cep
 * @property {string} logradouro
 * @property {string} complemento
 * @property {string} bairro
 * @property {string} localidade
 * @property {string} uf
 * @property {string} ibge
 * @property {string} gia
 * @property {string} ddd
 * @property {string} siafi
 * @param {string} zipcode
 * @returns {Promise<Cep>}
 */
export const getCEPInformation = async zipcode => {
    try {
      const url = `https://viacep.com.br/ws/${zipcode}/json/`;
      const preResult = await fetch(url, { method: "GET" });
      const result = await preResult.json();
  
      return result;
    } catch (e) {
      return {
          erro: e?.message ?? "cep inválido"
      }
    }
  };