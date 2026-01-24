// Jogos previamente cadastrados
const participantes = [
    "Romulo Rocha",
    "Romulo Rocha",
    "Leandro Pedro",
    "Romero Santana",
    "Waldiney Barros",
    "Rafaella Nascimento",
    "Ilailson Rocha",
    "Thiago Melo",
    "Paulo Victor",
    "Noaman Miranda",
    "Roberto Mendes",
    "Edriel Chagas",
    "Claudia Albuquerque",
    "Marcus Né",
    "Carolina Costa",
    "Hary Daniel",
    "Hary Daniel",
    "Wanderson Brito",
    "Mayco Dias",
    "Suely Aguiar",
    "Raimundo Aguiar",
    "Lelis Aguiar",
    "Lelis Aguiar",
    "Jedson Cardoso",
    "Wanderson Pamplona",
    "Marcia Santos",
    "Tenten Souza",
    "Tenten Souza",
    "Tenten Souza",
    "Ronaldo Souza",
    "Ronaldo Souza",
    "Ronaldo Souza",
    "Kleber Cruz",
    "Wanderson Brito",
    "Jean Souza",
    "Wander Melo",
    "Naldo Souza",
    "Levi Chagas",
    "Levi Chagas",
    "Edbruno Silva",
    "Reginaldo Sales",
    "Reginaldo Sales",
    "Gilson Clê",
    "Claudio Padilha",
    "Rennan Brito",
    "Sara Aguiar",
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
    [01,11,18,26,39,52],
    [04,11,19,23,44,52],
    [04,05,33,34,35,54],
    [14,17,36,54,55,58],
    [06,21,41,44,50,58],
    [10,31,36,48,53,56],
    [12,27,28,40,52,55],
    [10,21,26,38,39,55],
    [02,14,31,49,56,59],
    [05,27,34,38,52,57],
    [04,23,24,27,52,60],
    [01,04,33,40,50,52],
    [05,11,13,32,42,54],
    [05,18,32,51,58,60],
    [10,13,22,24,53,60],
    [04,08,39,40,53,56],
    [06,20,21,32,53,56],
    [05,16,19,49,54,60],
    [05,11,30,44,46,53],
    [02,14,29,39,54,55],
    [11,12,18,37,50,54],
    [14,17,32,35,47,54],
    [17,20,27,33,44,45],
    [01,02,28,36,57,58],
    [06,23,44,45,52,53],
    [14,26,36,49,52,53],
    [11,21,35,46,53,58],
    [05,10,17,30,51,60],
    [17,20,27,35,42,52],
    [01,26,30,38,50,59],
    [03,22,32,36,41,55],
    [12,16,21,23,50,59],
    [05,06,34,53,54,56],
    [06,20,37,45,53,58],
    [26,27,32,42,50,53],
    [13,14,44,48,55,56],
    [05,10,20,43,56,57],
    [11,23,27,54,56,57],
    [11,17,27,34,46,54],
    [04,15,22,46,54,57],
    [18,28,34,44,55,59],
    [10,33,42,44,45,52],
    [20,30,34,35,42,57],
    [06,17,20,33,52,53],
    [15,20,36,45,50,56],
    [05,27,30,33,34,53],
    [13,15,28,35,42,50],
    [17,21,38,42,45,54],
    [07,10,17,30,53,54],
    [10,24,33,48,51,52],
    [02,05,26,31,37,40],
    [08,21,25,33,48,54],
    [04,15,28,35,54,56],
    [01,32,34,46,54,57],
    [08,13,42,46,50,57],
    [12,27,36,37,46,55],
    [06,11,33,37,46,54],
    [09,28,30,46,51,58],
    [05,28,30,46,50,55],
    [01,05,21,32,54,56],
    [01,16,21,28,35,46],
    [04,09,22,42,52,55],
    [07,11,17,53,56,58],
    [02,03,33,42,47,52],
    [11,19,21,30,34,44],
    [06,10,37,52,57,58],
    [14,15,28,46,58,59],
    [02,25,32,45,47,52],
    [07,12,26,33,39,56],
    [19,20,21,54,56,58],
    [07,10,35,42,52,57],
    [01,16,23,38,43,56],
    [07,30,34,43,52,54],
    [02,13,23,28,37,54],
    [10,19,21,25,32,46],
    [06,23,34,42,45,57],
    [08,28,29,30,43,47],
    [20,27,35,37,46,56],
    [09,18,23,30,35,60],
    [07,15,16,35,56,58],
    [10,17,30,33,43,44],
    [18,27,28,33,42,59],
    [06,20,37,43,53,54],
    [08,11,14,48,56,59],
    [06,10,53,54,57,58],
    [10,26,27,31,38,45],
    [17,18,19,30,50,54],
    [16,21,26,34,50,57],
    [13,22,25,30,35,50],
    [05,10,21,38,53,57],
    [03,09,28,38,41,42],
    [06,20,21,37,43,52],
    [04,12,15,33,42,49],
    [06,26,34,39,52,59],
    [09,18,21,22,35,52],
    [11,20,37,38,56,60],
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
