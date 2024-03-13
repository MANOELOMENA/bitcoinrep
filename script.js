 document.getElementById('cepForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const cep = document.getElementById('cep').value;
    fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then(response => response.json())
    .then(data => {
    if (!data.erro) {
     document.getElementById('endereco').textContent = `Endereço: ${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
   } else {
      document.getElementById('endereco').textContent = 'CEP não encontrado.';
   }
     })
    .catch(error => console.error('Erro:', error));
});
