// Jogos previamente cadastrados
const participantes = [
  "Ronaldo Souza",
  "Ronaldo Souza",
  "Sara Aguiar",
  "Thiago Melo",
  "Edriel Chagas",
  "Wanderson Pamplona",
  "Paulo Victor",
  "Lelis Aguiar",
  "Jedson Cardoso",
  "Nonata Souza",
  "Pedro Souza",
  "Carolina Costa",
  "Ilailson Rocha",
  "Rennan Brito",
  "Waldiney Barros",
  "Mayco Dias",
  "Marcus Né",
  "Kleber Cruz",
  "Wanderson Brito",
  "Edbruno Silva",
  "Romero Santana",
  "Tenten Souza",
  "Diene Silva",
  "Rafaella Nascimento",
  "Gilson Clê",
  "Claudia Albuquerque",
  "Claudio Padilha",
  "Reginaldo Sales",
  "Elder Moreira",
  "Suely Aguiar",
  "Raimundo Aguiar",
  "Saulo Aguiar",
  "Saulo Aguiar",
  
  // "Renato Souza",
  // "Maia Carla",
  // "Hary Daniel",
  // "Hary Daniel",
  // "Roberto Mendes",
  // "Roberto Mendes",
  // "Pedro Souza",
  // "Marcos Almeida",
  // "Naldo Souza",
  // "André Melo",
  // "Marcia Santos",
  // "Wander Melo",
  // "EdBruno Silva",
  // "Romulo Kleber",
  // "Romulo Kleber",
  // "Fabricio Pereira",
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
  [04,11,19,25,41,53],
  [17,48,50,51,52,59],
  [02,41,49,52,55,56],
  [12,15,28,32,36,50],
  [27,30,34,43,53,60],
  [11,13,19,41,43,44],
  [04,05,30,33,34,57],
  [14,35,38,50,54,55],
  [08,23,39,50,52,59],
  [06,19,34,43,46,54],
  [10,11,14,27,30,51],
  [06,47,49,54,55,56],
  [04,20,21,43,50,53],
  [17,37,38,45,51,56],
  [25,31,33,48,50,56],
  [16,26,50,51,53,55],
  [15,42,43,50,51,54],
  [31,34,40,42,44,51],
  [26,37,41,54,55,57],
  [05,20,26,30,39,40],
  [17,31,41,48,55,58],
  [13,33,36,40,47,52],
  [13,43,45,46,52,57],
  [26,31,50,53,54,58],
  [04,32,47,54,55,59],
  [16,38,51,53,54,56],
  [01,10,22,34,43,51],
  [03,40,49,53,56,60],
  [03,12,19,22,30,37],
  [06,07,11,18,44,52],
  [28,43,44,45,49,58],
  [06,21,35,45,46,56],
  [03,34,43,50,55,56],
  [34,35,36,40,41,60],
  [29,38,39,49,52,56],
  [25,39,43,54,56,59],
  [09,36,37,41,55,56],
  [09,28,44,50,54,55],
  [01,13,16,29,31,50],
  [13,16,30,43,52,54],
  [30,39,45,48,52,60],
  [26,38,40,51,52,59],
  [12,14,21,23,39,48],
  [03,09,24,38,50,59],
  [08,23,28,31,48,50],
  [06,18,20,32,39,46],
  [31,41,45,46,50,54],
  [35,41,43,46,49,52],
  [33,38,39,40,51,54],
  [25,30,42,53,58,60],
  [03,10,50,52,54,57],
  [15,30,51,52,53,57],
  [24,33,42,43,52,57],
  [16,30,47,51,53,54],
  [30,39,41,50,52,59],
  [14,43,45,52,55,57],
  [02,05,06,10,13,14],
  [02,14,51,52,55,57],
  [06,14,19,41,44,54],
  [10,20,30,42,51,57],
  [19,24,32,42,45,55],
  [17,20,28,39,44,53],
  [01,07,17,24,33,35],
  [05,06,14,18,28,33],
  [07,08,38,41,42,56],
  [27,30,36,37,42,55],
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
