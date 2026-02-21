// Jogos previamente cadastrados
const participantes = [
  "Kleber Cruz",
  "Claudio Padilha",
  "Lelis Aguiar",
  "Edriel Chagas",
  "Wanderson Brito",
  "Marcia Santos",
  "Reginaldo Sales",
  "Romero Santana",
  "Thiago Melo",
  "Romulo Kleber",
  "Ronaldo Souza",
  "Ronaldo Souza",
  "Carolina Costa",
  "Claudio Padilha",
  "Rafaella Nascimento",
  "Claudia Albuquerque",
  "Wanderson Pamplona",
  "Elder Moreira",
  "Jedson Cardoso",
  "Pedro Souza",
  "Marcus Né",
  "Suely Aguiar",
  "Raimundo Aguiar",
  "Rennan Brito",
  "Hary Daniel",
  "Hary Daniel",
  "Maia Carla",
  "Renato Souza",
  "Mayco Dias",
  "Marcos Almeida",
  "Tenten Souza",
  "Roberto Mendes",
  "Nonata Souza",
  "Sara Aguiar",
  "André Melo",
  "Ilailson Rocha",
  "Saulo Aguiar",
  
  // "Gilson Clê",
  // "Paulo Victor",
  // "Wander Melo",
  // "Fabiano Paz",
  // "Waldiney Barros",
  // "Leandro Pedro",

  // "Edbruno Silva",
  // "Naldo Souza",
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
[04,05,10,42,53,58],
[05,28,33,42,45,56],
[03,07,11,13,22,33],
[17,25,30,33,47,52],
[10,16,32,41,50,59],
[08,21,30,43,51,58],
[09,26,31,32,48,60],
[09,22,34,40,53,56],
[11,20,33,44,48,57],
[31,36,45,49,53,56],
[04,13,25,38,49,54],
[05,10,23,42,53,58],
[04,16,25,37,43,60],
[04,07,15,21,43,51],
[35,38,41,46,54,60],
[05,10,15,25,30,35],
[09,12,18,31,33,54],
[06,09,13,33,47,59],
[09,11,14,24,28,50],
[06,18,27,31,47,60],
[09,11,15,35,40,49],
[07,19,23,35,44,52],
[05,13,18,37,43,48],
[03,12,34,37,46,52],
[05,10,22,38,45,55],
[23,33,37,42,53,58],
[05,12,28,37,46,55],
[16,24,26,29,32,47],
[01,05,06,45,58,60],
[04,14,21,28,45,52],
[07,23,39,49,50,58],
[01,06,17,22,24,35],
[07,11,28,45,57,59],
[04,05,10,23,33,37],
[09,17,28,37,47,60],
[01,08,12,36,44,57],
[09,14,27,36,52,59],
[01,18,19,36,57,60],
[07,11,29,34,48,55],
[02,18,31,42,51,56],
[08,12,31,42,54,58],
[02,18,26,44,52,59],
[11,21,24,32,45,47],
[06,15,30,33,44,51],
[11,20,28,30,41,44],
[01,15,29,36,45,52],
[04,17,24,32,37,57],
[02,04,06,10,13,14],
[04,14,24,34,44,54],
[03,07,11,21,42,58],
[01,20,28,40,49,56],
[40,43,47,51,57,58],
[09,19,31,43,50,57],
[01,12,21,25,52,59],
[01,07,17,24,25,35],
[02,13,24,35,46,57],
[10,23,32,41,46,55],
[02,07,26,39,50,58],
[04,14,25,30,44,53],
[01,05,10,27,28,53],
[32,39,44,50,55,59],
[02,14,17,33,47,59],
[04,05,10,23,37,58],
[04,10,33,37,42,58],
[05,23,33,37,42,53],
[03,14,24,35,42,59],
[11,15,29,37,41,59],
[03,18,22,39,45,50],
[06,18,21,23,46,56],
[05,19,21,38,47,53],
[04,05,10,33,42,53],
[18,28,38,44,52,56],
[05,40,45,50,55,60],
[05,06,13,18,28,33],
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
