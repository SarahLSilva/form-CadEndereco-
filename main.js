'use strict'; // ativa o mode restrito
    //-->
    // Este modo faz com que o javascript opere de forma mais segura e rigorosa, ajudando a evitar erros comuns de progamação
    /* consumo de API - https://viacep.com.br/ */

// função para limpar os campos preenchidos

const limparFormulario = () => {
    document.getElementById('logradouro').value = ''; // busca o campo rua pelo id
    document.getElementById('bairro').value = ''; // busca o campo bairro pelo id
    document.getElementById('localidade').value = ''; // busca o campo cidade pelo id
    document.getElementById('uf').value = ''; // busca o campo estado pelo id
    document.getElementById('numero').value = ''; // busca o campo do número da casa pelo id
    document.getElementById('complemento').value = ''; // busca o campo complemento pelo id
}

// verifica se o cep é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero); //  faz com que o usuario possa somente digitar caracteres de 0 á 9, pegando a expressão regular e jogando dentro do argumaneto "numero"
const cepValido = (cep) => cep.lenght == 8 && eNumero(cep) // identifica a quantos caracteres tem no argumento "cep" e executa a linha anterior "eNumero"

// função para preencher formulario
const preencherFormulario=(endereco) => {
    document.getElementById('logradouro').value = endereco; // preenche o campo rua pelo id
    document.getElementById('bairro').value = endereco; // preenche o campo bairro pelo id
    document.getElementById('localidade').value = endereco; // preenche campo cidade pelo id
    document.getElementById('uf').value = endereco; // preenche o campo estado pelo id
    document.getElementById('numero').value = endereco; // preenche o campo do número da casa pelo id
}
