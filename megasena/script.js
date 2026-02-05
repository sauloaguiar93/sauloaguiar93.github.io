// Jogos previamente cadastrados
const participantes = [
  "Renato Souza",
  "Wanderson Pamplona",
  "Ilailson Rocha",
  "Edriel Chagas",
  "Lelis Aguiar",
  "Elder Moreira",
  "Sara Aguiar",
  "Kleber Cruz",
  "Thiago Melo",
  "Rennan Brito",
  "Maia Carla",
  "Hary Daniel",
  "Hary Daniel",
  "Wanderson Brito",
  "Roberto Mendes",
  "Roberto Mendes",
  "Ronaldo Souza",
  "Ronaldo Souza",
  "Ronaldo Souza",
  "Jedson Cardoso",
  "Jedson Cardoso",
  "Pedro Souza",
  "Suely Aguiar",
  "Raimundo Aguiar",
  "Marcos Almeida",
  "Marcus Né",
  "Naldo Souza",
  "André Melo",
  "Marcia Santos",
  "Tenten Souza",
  "Tenten Souza",
  "Rafaella Nascimento",
  "Romero Santana",
  "Claudia Albuquerque",
  "Claudio Padilha",
  "Carolina Costa",
  "Wander Melo",
  "EdBruno Silva",
  "Reginaldo Sales",
  "Romulo Kleber",
  "Romulo Kleber",
  "Saulo Aguiar",
  "Saulo Aguiar",
  
  // "Fabricio Pereira",
  // "Gilson Clê",
  // "Mayco Dias",
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
[02,29,42,44,49,56],
[03,20,21,29,42,56],
[03,11,19,28,42,60],
[02,10,13,24,33,48],
[02,04,05,06,13,14],
[06,10,32,38,48,49],
[07,12,25,26,38,56],
[03,06,26,30,42,45],
[06,28,33,39,46,52],
[05,20,22,26,37,45],
[17,28,29,32,33,47],
[15,20,21,27,35,38],
[11,21,30,39,48,60],
[07,18,30,38,53,55],
[02,05,17,21,37,53],
[01,05,06,45,58,60],
[07,14,23,36,45,58],
[20,28,32,37,52,53],
[07,10,25,33,49,54],
[11,25,29,32,38,45],
[08,10,18,44,57,60],
[04,16,20,34,41,55],
[09,23,25,42,46,51],
[16,24,25,34,47,50],
[06,15,18,34,42,59],
[13,16,28,33,56,57],
[08,11,16,34,45,49],
[04,14,21,28,45,52],
[09,27,28,29,51,54],
[12,14,25,34,46,60],
[15,30,31,34,45,48],
[08,29,33,43,45,55],
[10,11,16,22,58,60],
[02,20,26,33,55,60],
[05,09,26,32,38,52],
[03,11,26,46,47,58],
[19,28,30,32,52,53],
[04,19,23,30,38,53],
[07,11,28,45,57,59],
[05,09,29,40,43,51],
[13,14,24,30,37,41],
[10,23,26,27,39,56],
[11,24,26,28,59,60],
[04,14,25,30,39,53],
[09,12,19,37,42,48],
[04,27,28,36,42,45],
[02,04,16,20,34,35],
[02,09,10,30,35,57],
[12,22,30,33,38,45],
[03,12,34,37,46,52],
[01,15,24,28,39,47],
[05,10,20,34,44,53],
[03,05,24,33,44,54],
[06,09,33,49,56,59],
[10,14,27,41,50,56],
[01,03,10,18,33,54],
[05,19,26,30,43,46],
[16,23,25,44,51,56],
[02,14,23,35,54,56],
[09,16,17,24,25,55],
[07,14,21,28,45,52],
[07,27,36,41,42,43],
[18,29,33,38,44,48],
[19,28,34,36,41,51],
[02,12,26,27,48,49],
[07,12,23,36,44,50],
[04,25,27,30,41,57],
[04,24,27,38,48,51],
[03,10,25,44,46,55],
[18,19,25,41,54,58],
[04,19,25,43,48,54],
[01,20,23,35,43,48],
[05,09,15,17,46,50],
[25,32,33,39,44,48],
[21,26,27,36,47,57],
[18,22,29,35,37,60],
[16,25,27,32,36,58],
[11,15,18,22,54,58],
[08,13,17,18,59,60],
[12,15,21,35,38,41],
[03,09,13,23,43,57],
[07,15,38,44,47,58],
[04,07,15,27,38,55],
[03,15,24,32,52,59],
[06,08,19,21,42,50],
[01,05,10,21,31,53],
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
