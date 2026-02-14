// Jogos previamente cadastrados
const participantes = [
  "Wanderson Pamplona",
  "Lelis Aguiar",
  "Rafaella Nascimento",
  "Gilson Clê",
  "Claudio Padilha",
  "Rennan Brito",
  "Carolina Costa",
  "Romero Santana",
  "Maia Carla",
  "Thiago Melo",
  "Wanderson Brito",
  "Romulo Kleber",
  "Romulo Kleber",
  "Marcia Santos",
  "Marcus Né",
  "Mayco Dias",
  "Fabiano Paz",
  "Roberto Mendes",
  "Edriel Chagas",
  "Hary Daniel",
  "Hary Daniel",
  "Claudia Albuquerque",
  "Ronaldo Souza",
  "Ronaldo Souza",
  "Saulo Aguiar",
  "Suely Aguiar",
  "Raimundo Aguiar",
  "Reginaldo Sales",
  "Elder Moreira",
  "Ilailson Rocha",
  "Jedson Cardoso",
  "Pedro Souza",
  "Maria Do Carmo",
  "Wander Melo",
  // "Nonata Souza",
  // "Waldiney Barros",
  // "Leandro Pedro",
  // "Kleber Cruz",
  // "Roberto Mendes",
  // "Sara Aguiar",
  // "Tenten Souza",
  // "Tenten Souza",

  // "Paulo Victor",
  // "Edbruno Silva",
  // "Marcos Almeida",
  // "Naldo Souza",
  // "André Melo",
  // "EdBruno Silva",
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
  [34,38,42,48,51,60],
  [06,15,24,37,48,53],
  [01,10,23,38,41,59],
  [30,39,45,50,54,59],
  [01,12,27,38,43,58],
  [04,19,22,35,42,53],
  [04,10,16,23,37,51],
  [27,34,44,47,52,56],
  [04,14,26,35,42,45],
  [04,21,24,38,41,50],
  [08,13,26,33,48,59],
  [03,20,29,34,41,56],
  [04,15,26,37,48,59],
  [01,18,29,30,43,54],
  [02,14,18,34,38,48],
  [33,40,45,50,55,57],
  [07,16,27,35,44,59],
  [11,22,31,42,53,58],
  [02,11,28,35,46,59],
  [03,12,34,37,46,52],
  [32,41,44,48,55,60],
  [32,39,42,51,58,60],
  [07,08,13,44,47,49],
  [02,15,24,39,46,57],
  [08,19,22,33,44,51],
  [09,14,23,32,45,60],
  [01,05,10,18,23,59],
  [29,36,41,48,53,58],
  [08,11,24,39,42,55],
  [02,04,06,10,13,14],
  [01,05,10,27,28,60],
  [07,12,23,34,41,56],
  [31,36,45,47,56,59],
  [28,35,42,49,54,59],
  [10,17,31,40,50,55],
  [03,12,25,36,47,58],
  [05,14,25,38,43,52],
  [01,02,04,13,55,58],
  [29,44,49,53,55,58],
  [07,14,21,32,49,60],
  [03,18,27,32,49,60],
  [03,12,15,20,40,45],
  [02,19,28,33,46,51],
  [08,12,27,38,41,50],
  [09,16,21,30,47,58],
  [06,18,21,31,36,45],
  [33,37,41,46,52,57],
  [12,13,15,33,37,42],
  [05,16,27,38,41,56],
  [31,38,43,46,51,60],
  [04,17,26,39,42,55],
  [06,11,28,37,44,51],
  [01,20,29,36,45,54],
  [26,41,48,52,55,57],
  [30,37,46,49,53,59],
  [07,16,25,30,47,54],
  [04,14,21,28,45,52],
  [05,18,21,36,49,52],
  [06,13,15,26,29,30],
  [35,40,43,50,54,58],
  [06,17,22,35,44,53],
  [10,13,31,40,50,57],
  [08,11,21,24,42,43],
  [06,18,21,23,46,56],
  [11,12,17,48,51,53],
  [28,40,43,47,51,56],
  [09,11,15,35,40,49],
  [09,20,23,34,45,52],
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
