// Exemplo de Criptografia Assimétrica com CryptoJS
// Importando a biblioteca (certifique-se de que o CryptoJS está instalado ou incluído)
const CryptoJS = require("crypto-js");

// Chaves simuladas para a demonstração (não use essas em produção)
const chavePublica = "senha12345"; // Substituir por uma chave RSA real para uso sério
const chavePrivada = "@123senha"; // Substituir por uma chave RSA real para uso sério

// Função para criptografar o texto usando a chave pública
function criptografarTexto(texto, chave) {
  // Simulação de "criptografia assimétrica" usando CryptoJS AES com a chave pública
  return CryptoJS.AES.encrypt(texto, chave).toString();
}

// Função para descriptografar o texto usando a chave privada
function descriptografarTexto(textoCriptografado, chave) {
  const bytes = CryptoJS.AES.decrypt(textoCriptografado, chave);
  return bytes.toString(CryptoJS.enc.Utf8);
}

// Exemplo de uso
const textoOriginal = "Partiu TADS!";

// Criptografando com a chave pública
const textoCriptografado = criptografarTexto(textoOriginal, chavePublica);
console.log("Texto Criptografado:", textoCriptografado);

// Descriptografando com a chave privada
const textoDescriptografado = descriptografarTexto(textoCriptografado, chavePrivada);
console.log("Texto Descriptografado:", textoDescriptografado);