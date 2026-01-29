// Jogos previamente cadastrados
const participantes = [
    "Thiago Melo",
    "Paulo Victor",
    "Ilailson Rocha",
    "Edriel Chagas",
    "Romulo Kleber",
    "Romulo Kleber",
    "Wanderson Brito",
    "Romero Santana",
    "Marcia Santos",
    "Mayco Dias",
    "Marcus Né",
    "Lelis Aguiar",
    "Lelis Aguiar",
    "Gilson Clê",
    "Wanderson Pamplona",
    "Ronaldo Souza",
    "Ronaldo Souza",
    "Reginaldo Sales",
    "Rafaella Nascimento",
    "Carolina Costa",
    "Jedson Cardoso",
    "Pedro Souza",
    "Sara Aguiar",
    "José Cunha",
    "Elder Moreira",
    "Rennan Brito",
    "Waldiney Barros",
    "Claudia Albuquerque",
    "Leandro Pedro",
    "Reginaldo Souza",
    "Hary Daniel",
    "Hary Daniel",
    "Renato Souza",
    "Roberto Mendes",
    "Wander Melo",
    "Edbruno Silva",
    "André Melo",
    "Tenten Souza",
    "Tenten Souza",
    "Leandro Freitas",
    "Claudio Padilha",
    "Suely Aguiar",
    "Raimundo Aguiar",
    "Jean Souza",
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
    [01,07,28,29,31,58],
    [10,25,26,47,50,59],
    [04,29,37,42,45,59],
    [10,17,31,35,41,44],
    [07,21,25,42,54,57],
    [13,25,26,36,51,60],
    [13,15,22,34,43,54],
    [10,14,17,26,43,50],
    [03,04,26,41,43,57],
    [08,12,17,30,36,55],
    [05,06,13,33,40,57],
    [14,15,21,43,52,59],
    [04,07,21,26,47,51],
    [11,16,28,45,46,54],
    [13,22,25,29,36,38],
    [01,27,38,39,48,54],
    [12,17,24,29,34,45],
    [02,34,35,42,50,53],
    [01,03,06,40,44,51],
    [23,26,27,33,35,60],
    [15,17,22,23,39,40],
    [05,27,29,31,34,40],
    [07,14,29,37,38,42],
    [02,10,22,31,37,54],
    [07,14,17,27,42,43],
    [05,23,30,40,49,56],
    [09,18,29,34,45,50],
    [07,16,31,40,41,55],
    [02,25,42,43,48,55],
    [01,13,24,42,47,51],
    [06,14,22,29,39,44],
    [03,16,17,22,45,54],
    [09,22,33,38,43,49],
    [08,19,32,39,40,46],
    [01,10,38,47,48,51],
    [12,15,18,38,39,58],
    [06,20,21,25,28,55],
    [02,03,07,37,54,58],
    [14,15,39,41,45,48],
    [04,08,18,28,35,55],
    [03,04,07,31,48,55],
    [10,15,20,26,43,48],
    [08,10,21,27,46,48],
    [01,19,23,42,44,57],
    [10,13,25,32,33,56],
    [08,19,20,24,45,46],
    [03,07,32,44,50,60],
    [10,18,27,42,43,46],
    [06,07,13,26,40,56],
    [03,06,21,30,38,60],
    [14,17,24,38,40,49],
    [15,26,31,32,35,57],
    [06,29,33,38,41,57],
    [04,12,17,34,38,43],
    [04,09,16,38,39,48],
    [01,06,15,29,49,60],
    [09,18,36,39,49,57],
    [08,23,27,32,40,52],
    [12,20,23,27,46,55],
    [07,28,33,40,46,50],
    [05,08,29,53,59,60],
    [20,30,31,41,43,47],
    [15,27,32,43,46,59],
    [13,14,34,43,44,60],
    [04,26,35,36,38,47],
    [04,08,24,29,49,60],
    [21,24,26,31,52,53],
    [08,20,33,40,44,59],
    [12,19,27,40,52,60],
    [06,11,32,37,52,53],
    [05,16,17,34,36,54],
    [11,36,38,39,41,58],
    [03,18,20,34,54,57],
    [05,13,18,28,37,49],
    [05,09,15,42,51,54],
    [12,14,28,31,46,53],
    [03,19,27,40,50,56],
    [02,09,22,31,37,47],
    [06,13,21,40,46,55],
    [05,25,28,30,49,53],
    [10,27,29,30,38,41],
    [11,25,33,41,44,54],
    [12,13,21,32,43,46],
    [06,17,24,42,45,47],
    [07,09,13,16,56,58],
    [02,23,26,38,44,59],
    [15,29,36,37,42,49],
    [05,08,27,37,52,54],
    [01,08,14,30,46,53],
    [04,07,32,36,37,58],
    [10,17,18,36,41,43],
    [16,24,31,39,47,54],
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
