// Jogos previamente cadastrados
const participantes = [
    "Paulo Victor",
    "Thiago Melo",
    "Claudio Padilha",
    "Wanderson Barbosa",
    "Harysonn Daniel",
    "Sergio Bitencourt",
    "Lélis Aguiar",
    "Rafaella Nascimento",
    "Waldiney Barros",
    "Romero Santana",
    "Wanderson Brito",
    "Wanderson Brito",
    "Elder Moreira / Gilson Clê",
    "Romero Santana",
    "Romero Santana",
    "Kleber Cruz",
    "Wander Silva / Max Araujo",
    "Roberto Mendes / Noaman",
    "Carolina Costa",
    "Mayco Dias",
    "Claudia Albuquerque",
    "Saulo Aguiar",
    "Saulo Aguiar",
    "Rennan Brito",
    "Ilailson Rocha",
    "Andre Melo",
    "Fabricio Pereira",
    "Galiza / Luciano",
    "Jedson Cardoso",
    "Jedson Cardoso",
    "Romulo Rocha",
    "Romulo Rocha",
    "Reginaldo Sales",
    "Marcia Santos",
    "Edriel Chagas",
    "Levi Chagas",
    "Suely Aguiar",
    "Raimundo Aguiar",
    "Maia Garcia",
    "EdBruno Silva",
    "Ronaldo Souza",
    "Ronaldo Souza",
    "Lilian Souza",
    "Nonata Souza",
    "Renato Souza",
    "Ronie da Farinha",
    "Reginaldo Souza",
    "Leandro Freitas",
    "Wesley Souza",
    "Wesley Souza",
    "Jean Souza",
    "Sara Aguiar",
    "Frank Sampaio",
    "Frank Sampaio",
    "Gilvandro Ferreira",
    "Diene Silva",
    "Diene Silva",
    "Kelly Gomes",
    "Israel Figueiredo",
    "Risaldo Souza",
    "Risaldo Souza",
    "Leandro Pedro",
    "Diego Felix",
    "Marcus Né",
  ];

  function displayParticipants() {
    const participantsList = document.getElementById('participantsList');
    participantsList.innerHTML = '';
    
    participantes.forEach(participante => {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.textContent = participante;
      participantsList.appendChild(li);
    });
  }

const jogos = [
    [02,10,20,33,51,57],
    [10,14,20,36,53,59],
    [05,10,13,27,34,55],
    [03,19,25,42,51,57],
    [05,09,41,49,53,60],
    [16,19,20,23,25,34],
    [02,12,24,33,38,45],
    [10,36,45,48,54,59],
    [04,19,25,38,41,56],
    [06,16,31,45,50,54],
    [10,33,42,47,55,58],
    [06,15,21,34,43,50],
    [05,12,22,28,31,37],
    [05,22,24,32,36,59],
    [04,22,33,34,39,42],
    [05,10,23,27,36,39],
    [05,24,29,31,35,39],
    [07,20,26,33,42,51],
    [05,26,30,36,37,56],
    [31,33,35,37,45,55],
    [01,15,21,28,36,47],
    [06,11,33,42,48,58],
    [08,13,20,33,47,55],
    [01,16,23,35,45,58],
    [07,16,29,34,36,48],
    [12,27,44,50,58,60],
    [10,23,31,45,53,60],
    [01,10,17,27,31,38],
    [02,11,20,38,44,49],
    [10,16,27,34,45,58],
    [10,15,27,34,36,40],
    [15,35,46,51,52,59],
    [02,09,16,21,31,37,43,49,53],
    [05,33,42,53,57,60],
    [10,17,23,25,32,34],
    [07,14,22,41,49,53],
    [05,15,24,34,50,55],
    [01,10,28,36,50,57],
    [03,13,30,36,41,59],
    [09,18,29,36,51,57],
    [01,06,17,22,24,35],
    [02,10,25,33,51,59],
    [02,12,19,23,30,44],
    [08,15,23,28,36,45,50,59],
    [10,22,25,33,38,40],
    [10,21,27,34,52,58],
    [04,10,29,38,46,55],
    [10,19,26,30,38,46,52,60],
    [13,36,45,49,52,56],
    [15,36,48,52,54,57],
    [10,17,25,26,28,34],
    [06,25,31,34,38,58],
    [05,11,17,34,48,57],
    [04,15,32,36,53,57],
    [05,14,28,39,47,55],
    [05,41,45,53,56,59],
    [03,10,33,35,41,50],
    [04,16,23,48,51,56],
    [02,12,23,36,47,51],
    [03,16,25,29,30,39],
    [10,33,47,55,56,57],
    [09,18,22,35,41,46],
    [33,45,49,51,53,56],
    [05,17,28,35,43,59],
    [01,11,27,40,45,53],
    [04,08,15,21,32,37],
    [21,27,29,36,42,59],
    [15,33,41,42,46,51],
    [05,14,17,23,26,44],
    [05,10,17,24,33,38,41,46,56,58],
    [06,11,23,37,44,51],
    [10,14,30,39,46,52],
    [05,21,30,37,49,52],
    [04,12,23,27,34,36],
    [16,23,33,35,40,57],
    [09,18,30,41,52,60],
    [09,21,32,36,46,60],
    [05,14,27,33,40,52],
    [05,16,33,41,48,53],
    [04,25,28,33,39,58],
    [02,11,36,49,54,58],
    [06,14,24,33,41,56],
    [06,27,33,34,36,48],
    [10,29,31,38,39,41],
    [05,10,18,29,46,50],
    [08,16,24,35,57,59],
    [01,17,19,29,50,57],
    [10,32,35,36,39,58],
    [04,13,29,37,41,48],
    [14,26,28,33,37,42],
    [14,22,44,53,54,57],
    [04,18,25,31,39,58],
    [08,17,26,33,54,57],
    [03,04,29,42,45,59],
    [08,19,26,32,40,54],
    [01,07,21,32,38,49],
    [05,26,28,29,32,33],
    [06,15,23,35,46,57],
    [02,11,30,37,44,52],
    [06,13,39,48,54,55],
    [04,10,20,39,47,56],
    [01,10,33,40,54,57],
    [03,08,19,22,29,35],
    [03,22,31,38,42,55],
    [05,18,24,36,47,58],
    [05,10,23,33,42,58],
    [02,10,22,31,49,60],
    [03,10,17,34,41,60],
    [05,10,20,33,41,58],
    [06,22,24,28,35,39],
    [05,12,24,38,40,43],
    [01,14,27,39,50,58],
    [03,12,24,25,34,38],
    [04,08,15,16,23,42],
    [03,15,25,34,40,52],
    [10,34,42,45,52,55],
    [06,13,20,27,34,44,48,55],
    [05,13,24,37,48,53],
    [03,10,24,36,42,56],
    [03,09,18,25,32,36],
    [02,21,30,34,36,45],
    [05,10,50,55,57,58],
    [05,33,41,46,50,56],
    [20,42,44,50,58,60],
    [05,12,33,36,42,59],
    [04,11,18,25,32,39,47,54],
    [02,07,17,24,38,59],
    [03,10,20,32,46,53],
    [04,13,18,26,35,42],
    [05,21,28,34,44,53],
    [01,12,20,35,40,58],
    [02,17,21,22,26,49],
    [09,20,33,42,48,56],
    [04,12,25,43,56,58],
  ];
  
  function calculateTotal() {
    const participantsList = document.querySelectorAll('ol.list-group li');
    const amountPerPerson = 50;
    const totalAmount = participantsList.length * amountPerPerson;
  
    document.getElementById('totalValue').textContent = `R$ ${totalAmount.toFixed(2)}`;
  }
  
  const participantsModal = document.getElementById('participantsModal');
  participantsModal.addEventListener('shown.bs.modal', calculateTotal);
  
  function displayGames() {
    let gamesHTML = "<h3 class='mb-4'>Jogos Cadastrados:</h3>";
  
    jogos.forEach((jogo, index) => {
      let jogoHTML = jogo.map(num => 
        `<span class="number">${num}</span>`
      ).join('');
  
      gamesHTML += `
        <div class="mb-3" id="jogo-${index}">
          <strong>Jogo ${index + 1}:</strong> ${jogoHTML} 
          <span class="badge bg-success" id="acertos-${index}">Acertos: 0</span>
        </div>
      `;
    });
  
    document.getElementById('gamesList').innerHTML = gamesHTML;
  }
  
  function checkNumbers() {
    const drawnNumbers = document.getElementById('drawnNumbers').value.split(',').map(Number);
    const validDrawnNumbers = drawnNumbers.filter(num => !isNaN(num) && num > 0 && num <= 60);
  
    // Contadores para cada quantidade de acertos
    let acertos6 = 0;
    let acertos5 = 0;
    let acertos4 = 0;
    let acertos3 = 0;
    let acertos2 = 0;
    jogos.forEach((jogo, index) => {
      const matchedNumbers = jogo.filter(num => validDrawnNumbers.includes(num));
  
      // Atualizar o HTML para destacar os números acertados
      let jogoHTML = jogo.map(num => 
        validDrawnNumbers.includes(num) 
        ? `<span class="number matched">${num}</span>` 
        : `<span class="number">${num}</span>`
      ).join('');
  
      // Atualizar o conteúdo do jogo e o número de acertos
      document.getElementById(`jogo-${index}`).innerHTML = `
        <strong>Jogo ${index + 1}:</strong> ${jogoHTML} 
        <span class="badge bg-success">Acertos: ${matchedNumbers.length}</span>
      `;
  
      // Contar os jogos com 11, 12, 13, 14, e 15 acertos
      switch (matchedNumbers.length) {
        case 6:
          acertos6++;
          break;
        case 5:
          acertos5++;
          break;
        case 4:
          acertos4++;
          break;
        case 3:
          acertos3++;
          break;
        case 2:
          acertos2++;
          break;
      }
    });
  
    // Limpar resultados anteriores antes de adicionar novos
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
      <div class="mt-3">
        <strong>Quantidade de jogos com 6 acertos:</strong> ${acertos6}<br>
        <strong>Quantidade de jogos com 5 acertos:</strong> ${acertos5}<br>
        <strong>Quantidade de jogos com 4 acertos:</strong> ${acertos4}<br>
        <strong>Quantidade de jogos com 3 acertos:</strong> ${acertos3}<br>
        <strong>Quantidade de jogos com 2 acertos:</strong> ${acertos2}
      </div>
    `;
  }
  
  
  document.getElementById("drawnNumbers").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();  // Impede o comportamento padrão de submit do formulário
      checkNumbers();  // Chama a função de conferência
    }
  });

  // Evita cache do script
// Desabilita cache do próprio script
(function() {
  const url = new URL(window.location.href);
  url.searchParams.set('_', Date.now());
  window.history.replaceState(null, '', url.toString());
})();
  
// Exibir os jogos e participantes ao carregar a página
window.onload = function() {
    displayGames();
    displayParticipants();
  };
