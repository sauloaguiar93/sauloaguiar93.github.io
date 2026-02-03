// Jogos previamente cadastrados
const participantes = [
  "Lelis Aguiar",
  "Thiago Melo",
  "Wanderson Pamplona",
  "Edriel Chagas",
  "Wanderson Brito",
  "Fabricio Pereira",
  "Kleber Cruz",
  "Marcus Né",
  "Romulo Kleber",
  "Romulo Kleber",
  "Elder Moreira",
  "Gilson Clê",
  "Mayco Dias",
  "Ilailson Rocha",
  "Ronaldo Souza",
  "Ronaldo Souza",
  "Jedson Cardoso",
  "Jedson Cardoso",
  "Rennan Brito",
  "Suely Aguiar",
  "Raimundo Aguiar",
  "Hary Daniel",
  "Hary Daniel",
  "Tenten Souza",
  "Tenten Souza",
  "Sara Aguiar",
  "André Melo",
  "Carolina Costa",
  "Rafaella Nascimento",
  "Claudia Albuquerque",
  "Wander Melo",
  "Marcia Santos",
  "Roberto Mendes",
  "Marcos Almeida",
  "Romero Santana",
  "Reginaldo Sales",
  "EdBruno Silva",
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
  [09,10,42,43,46,59],
  [07,14,23,35,42,58],
  [03,10,16,25,38,59],
  [08,15,22,27,33,53],
  [05,19,26,38,42,58],
  [16,18,25,39,49,57],
  [07,08,25,40,45,50],
  [20,22,30,31,58,59],
  [04,21,39,44,55,57],
  [05,13,14,45,54,60],
  [12,23,34,46,51,59],
  [16,19,20,46,53,59],
  [06,17,22,40,41,45],
  [13,17,24,33,35,40],
  [02,23,30,33,36,51],
  [01,17,27,30,36,49],
  [08,25,29,31,33,54],
  [01,15,17,26,58,60],
  [05,14,23,26,33,44],
  [01,14,15,19,41,56],
  [05,19,21,45,54,56],
  [01,08,14,37,39,47],
  [03,23,27,43,53,60],
  [05,18,40,42,44,49],
  [01,05,06,45,58,60],
  [10,21,37,46,53,59],
  [16,27,38,39,49,53],
  [02,08,11,28,47,58],
  [04,16,33,38,45,51],
  [07,12,15,28,31,39],
  [03,11,28,38,54,59],
  [08,12,23,29,36,44],
  [17,25,29,36,38,52],
  [01,07,34,46,47,52],
  [16,29,30,33,44,59],
  [14,22,33,36,50,53],
  [19,25,27,39,44,56],
  [01,10,30,39,53,55],
  [10,16,32,42,47,57],
  [04,18,39,55,57,59],
  [03,10,36,50,53,55],
  [08,14,27,31,32,57],
  [04,17,21,32,54,60],
  [06,09,13,22,27,46],
  [10,21,23,26,46,54],
  [01,08,18,27,40,44],
  [10,11,18,34,39,42],
  [17,26,30,35,45,59],
  [19,29,34,42,49,57],
  [04,27,28,38,45,48],
  [17,23,35,43,44,50],
  [03,11,19,28,46,60],
  [19,23,32,37,49,56],
  [02,15,19,36,49,53],
  [09,11,20,23,38,52],
  [11,20,38,43,46,59],
  [06,18,21,23,46,56],
  [03,11,29,40,52,54],
  [02,04,05,06,13,14],
  [09,24,39,41,46,51],
  [17,20,25,26,34,45],
  [05,16,29,31,50,52],
  [10,33,36,44,58,60],
  [01,12,28,32,51,52],
  [07,24,35,41,45,54],
  [02,07,39,48,57,59],
  [08,16,18,19,27,30],
  [18,20,22,25,34,41],
  [12,14,29,33,37,59],
  [05,08,13,17,22,24],
  [10,18,21,23,29,48],
  [14,18,28,44,53,59],
  [01,05,10,22,44,53],
  [09,11,15,35,40,49],
  [03,13,29,36,42,48],
  [13,25,34,41,47,56],
  [01,14,20,26,43,59],
  [08,16,17,19,49,50],
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
