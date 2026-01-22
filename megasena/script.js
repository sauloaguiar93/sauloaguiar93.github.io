// Jogos previamente cadastrados
const participantes = [
    "Rafaella Nascimento",
    "Ilailson Rocha",
    "Jean Souza",
    "Suely Aguiar",
    "Raimundo Aguiar",
    "Lelis Aguiar",
    "Lelis Aguiar",
    "Paulo Victor",
    "Waldiney Barros",
    "Wanderson Brito",
    "Tenten Souza",
    "Tenten Souza",
    "Marcus Né",
    "Marcia Santos",
    "Roberto Mendes",
    "Claudia Albuquerque",
    "Romulo Rocha",
    "Romulo Rocha",
    "Sara Aguiar",
    "Gilson Clê",
    "Edbruno Silva",
    "Romero Santana",
    "Carolina Costa",
    "Wander Melo",
    "Claudio Padilha",
    "Wanderson Pamplona",
    "Jonathan Diego",
    "Ronaldo Souza",
    "Ronaldo Souza",
    "Levi Chagas",
    "Levi Chagas",
    "Levi Chagas",
    "Levi Chagas",
    "Edriel Chagas",
    "Jedson Cardoso",
    "Thiago Melo",
    "Mayco Dias",
    "Rennan Brito",
    "Renato Souza",
    "Naldo Souza",
    "Hary Daniel",
    "Hary Daniel",
    "Saulo Aguiar",
    "Saulo Aguiar",
    "Reginaldo Sales",
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
    [06,23,35,39,40,51],
    [25,30,41,42,49,53],
    [09,18,23,28,37,48],
    [04,06,33,39,44,59],
    [05,17,20,27,32,48],
    [15,16,24,38,54,59],
    [07,14,20,33,49,54],
    [01,11,25,37,43,44],
    [08,14,20,21,32,57],
    [01,03,32,54,58,59],
    [24,31,35,42,53,59],
    [10,16,17,34,40,43],
    [05,06,23,43,50,60],
    [01,10,11,21,42,58],
    [15,23,37,41,44,46],
    [04,19,20,38,45,52],
    [14,18,23,36,53,58],
    [06,07,09,38,43,46],
    [27,29,30,46,56,58],
    [28,33,47,48,54,59],
    [02,24,35,36,39,57],
    [07,26,30,34,47,55],
    [15,26,34,37,45,58],
    [02,05,17,20,49,51],
    [34,43,48,49,52,58],
    [26,29,45,47,54,56],
    [23,27,44,47,50,58],
    [22,32,40,43,47,53],
    [09,15,17,30,55,60],
    [06,34,35,37,42,57],
    [21,25,27,45,54,58],
    [23,38,49,54,57,58],
    [02,27,30,32,34,47],
    [08,29,39,43,46,54],
    [24,34,38,39,49,51],
    [24,29,37,44,45,49],
    [29,31,36,39,42,59],
    [09,11,24,39,42,57],
    [08,13,22,32,38,47],
    [04,10,23,37,44,57],
    [02,11,17,39,57,58],
    [11,17,28,38,54,57],
    [11,17,26,45,49,60],
    [11,16,19,32,34,40],
    [06,12,20,33,38,51],
    [01,06,20,24,54,55],
    [31,42,46,50,51,52],
    [13,16,20,37,39,57],
    [03,08,27,31,42,55],
    [09,17,22,33,49,50],
    [06,11,27,29,30,43],
    [05,12,17,20,37,41],
    [14,19,30,39,46,53],
    [17,20,28,35,38,57],
    [05,06,08,17,49,51],
    [05,32,53,56,57,60],
    [06,10,37,39,47,54],
    [05,24,27,29,32,51],
    [04,13,19,20,25,33],
    [14,15,20,40,43,45],
    [05,07,22,43,44,47],
    [15,17,32,34,48,56],
    [12,30,31,35,44,48],
    [04,08,22,28,39,44],
    [02,19,27,29,50,59],
    [10,11,23,24,34,35],
    [04,06,19,49,57,58],
    [01,26,27,32,50,52],
    [24,36,40,41,58,59],
    [29,32,37,46,49,60],
    [10,19,33,42,49,56],
    [27,28,30,33,38,48],
    [02,11,25,42,51,58],
    [22,28,37,47,53,57],
    [05,18,27,29,48,49],
    [05,10,31,39,40,52],
    [01,05,12,47,49,60],
    [05,22,29,36,59,60],
    [21,23,36,50,51,60],
    [06,15,33,34,49,54],
    [24,27,38,47,50,53],
    [22,24,27,52,53,59],
    [05,15,17,30,48,50],
    [21,28,30,43,56,58],
    [07,31,34,36,55,57],
    [10,12,38,49,53,56],
    [11,14,30,39,46,53],
    [01,23,27,55,56,58],
    [08,16,24,25,50,55],
    [07,16,21,40,53,56],
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
