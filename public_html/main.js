async function consultarCEP() {
      const cep = document.getElementById('cep').value.replace(/\D/g, '');
      const url = `https://viacep.com.br/ws/${cep}/json/`;
      
      try {
        const response = await fetch(url);
        const data = await response.json();
        
        document.getElementById('logradouro').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('localidade').value = data.localidade;
        document.getElementById('uf').value = data.uf;
      } catch (error) {
        console.error('Erro ao consultar CEP:', error);
        alert('Erro ao consultar CEP. Verifique o CEP digitado.');
      }
    }

    document.getElementById('cep').addEventListener('blur', consultarCEP);
    document.getElementById('cep').addEventListener('keydown', function(event) {
      if (event.key === 'Tab') {
        consultarCEP();
      }
    });