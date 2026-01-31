// Jogos previamente cadastrados
const participantes = [
    "Sara Aguiar",
    "Rafaella Nascimento",
    "Lelis Aguiar",
    "Lelis Aguiar",
    "Ronaldo Souza",
    "Ronaldo Souza",
    "Reginaldo Sales",
    "Wanderson Brito",
    "Paulo Victor",
    "Kelly Gomes",
    "Claudia Albuquerque",
    "Wanderson Pamplona",
    "Reginaldo Souza",
    "Marcia Santos",
    "Mayco Dias",
    "Romero Santana",
    "Romero Santana",
    "Marcus Né",
    "Edriel Chagas",
    "Leandro Freitas",
    "Gilson Clê",
    "Wander Melo",
    "Thiago Melo",
    "André Melo",
    "Renato Souza",
    "Pedro Souza",
    "Naldo Souza",
    "Naldo Souza",
    "Kleber Cruz",
    "Waldiney Barros",
    "Suely Aguiar",
    "Raimundo Aguiar",
    "Roberto Mendes",
    "Carolina Costa",
    "Marcos Almeida",
    "Tenten Souza",
    "Tenten Souza",
    "Tenten Souza",
    "Rennan Brito",
    "Ilailson Rocha",
    "Elder Moreira",
    "Elder Moreira",
    "Romulo Kleber",
    "Romulo Kleber",
    "Jean Souza",
    "Hary Daniel",
    "Hary Daniel",
    "Jedson Cardoso",
    "Jedson Cardoso",
    "Claudio Padilha",
    "Saulo Aguiar",
    "Saulo Aguiar",
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
    [02,13,15,31,37,58],
    [10,16,18,47,56,59],
    [11,13,21,35,36,49],
    [17,22,31,40,53,55],
    [11,12,20,24,33,48],
    [23,35,53,57,59,60],
    [05,17,35,42,52,55],
    [03,16,25,36,49,57],
    [11,16,19,35,38,45],
    [07,21,25,38,51,58],
    [01,02,40,50,52,53],
    [09,12,34,44,47,48],
    [08,12,29,33,44,54],
    [05,19,21,23,44,51],
    [10,15,25,35,39,46],
    [01,05,06,45,58,60],
    [15,18,33,35,55,58],
    [02,05,10,13,22,27],
    [03,06,15,39,40,44],
    [04,15,35,38,50,54],
    [04,06,08,18,21,22],
    [10,12,20,23,25,33],
    [05,15,32,48,49,56],
    [05,13,21,31,45,58],
    [04,28,32,35,53,56],
    [09,11,15,35,40,49],
    [02,04,05,13,14,33],
    [13,16,23,41,52,53],
    [07,27,28,46,55,60],
    [04,18,32,36,43,45],
    [03,18,23,52,57,59],
    [03,11,14,39,47,52],
    [03,12,27,42,58,59],
    [01,17,20,34,41,59],
    [05,13,21,31,42,51],
    [06,11,35,38,41,54],
    [03,22,35,46,49,53],
    [04,25,33,39,48,54],
    [16,19,25,27,28,60],
    [04,14,23,41,53,60],
    [03,13,30,40,43,49],
    [04,07,21,34,36,59],
    [03,12,34,37,46,52],
    [02,05,23,48,57,60],
    [02,10,33,47,53,56],
    [04,11,23,36,42,58],
    [03,13,24,38,40,51],
    [07,19,21,32,42,46],
    [06,10,33,40,44,45],
    [16,34,35,39,41,49],
    [13,16,26,37,40,53],
    [02,05,08,20,21,33],
    [16,19,25,38,50,57],
    [02,24,25,39,47,53],
    [18,22,37,40,45,58],
    [09,12,27,30,33,58],
    [03,04,07,36,45,51],
    [02,18,31,42,51,56],
    [04,14,21,28,42,52],
    [02,10,19,29,33,37],
    [11,13,17,22,47,52],
    [03,15,24,50,56,57],
    [04,08,21,23,38,40],
    [13,14,29,39,55,60],
    [01,05,14,21,53,57],
    [09,12,26,27,50,53],
    [07,14,19,28,41,53],
    [09,13,25,38,53,60],
    [06,18,21,23,46,56],
    [12,14,35,39,40,51],
    [05,18,45,47,52,53],
    [08,14,20,49,51,53],
    [08,17,27,39,50,58],
    [06,08,39,48,49,58],
    [09,10,12,46,47,56],
    [05,10,29,39,48,51],
    [22,26,28,35,53,57],
    [02,09,26,41,47,49],
    [01,16,30,38,49,52],
    [07,26,35,36,51,54],
    [09,15,23,30,38,59],
    [05,09,27,36,51,55],
    [02,21,22,33,44,45],
    [08,18,23,24,27,58],
    [03,13,22,27,36,50],
    [05,06,20,25,28,59],
    [11,26,30,33,38,42],
    [16,20,23,45,50,55],
    [08,17,18,36,45,58],
    [11,12,15,19,37,54],
    [13,32,35,43,48,50],
    [03,04,06,40,41,50],
    [03,09,12,41,54,57],
    [06,12,34,39,41,49],
    [05,16,27,42,48,52],
    [02,26,27,30,33,57],
    [10,13,29,34,35,48],
    [05,07,18,26,36,55],
    [16,27,38,51,52,59],
    [03,05,20,40,44,53],
    [05,17,22,33,50,51],
    [11,15,19,22,26,55],
    [02,23,31,39,49,60],
    [16,17,27,36,43,46],
  ];
  
  function calculateTotal() {
    const participantsList = document.querySelectorAll('ol.list-group li');
    const amountPerPerson = 12;
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
