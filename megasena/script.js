// Jogos previamente cadastrados
const participantes = [
  "Rennan Brito",
  "Ronaldo Souza",
  "Ronaldo Souza",
  "Hary Daniel",
  "Hary Daniel",
  "Reginaldo Sales",
  "Jedson Cardoso",
  "Pedro Souza",
  "Rafaella Nascimento",
  "Tenten Souza",
  "Nonata Souza",
  "Suely Aguiar",
  "Raimundo Aguiar",
  "Lelis Aguiar",
  "Wanderson Pamplona",
  "Marcus Né",
  "Diene Silva",
  "Wanderson Brito",
  "Fabiano Paz",
  "Mayco Dias",
  "Carolina Costa",
  "Wander Melo",
  "Claudia Albuquerque",
  "Thiago Melo",
  "Edriel Chagas",
  "Marcos Almeida",
  "Romero Santana",
  "Claudio Padilha",
  "Roberto Mendes",
  "Roberto Mendes",
  "Ilailson Rocha",
  "Elder Moreira",
  "Marcia Santos",
  "Edbruno Silva",
  "Gilson Clê",
  "Sara Aguiar",
  "Saulo Aguiar",
  // "Paulo Victor",
  // "Leandro Pedro",
  // "Kleber Cruz",
  // "Romulo Kleber",
  // "Maia Carla",
  // "Renato Souza",
  // "André Melo",
  // "Waldiney Barros",
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
[01,34,38,45,46,59],
[05,40,45,50,55,60],
[03,08,09,37,50,57],
[03,18,32,40,47,57],
[10,18,33,42,50,58],
[11,22,33,44,55,60],
[03,05,08,37,50,58],
[18,33,37,42,50,58],
[05,10,17,20,30,48],
[06,19,22,37,48,53],
[06,13,20,34,42,53],
[05,10,15,25,30,35],
[10,15,20,26,31,60],
[07,20,26,31,43,60],
[04,15,19,28,36,37],
[03,12,34,37,46,52],
[02,17,25,33,41,50],
[02,10,25,30,34,43],
[01,02,03,04,05,06],
[23,32,39,48,57,58],
[10,24,33,37,42,50],
[10,20,30,32,50,54],
[01,07,10,46,49,60],
[01,13,27,32,49,55],
[05,10,18,42,50,58],
[02,21,31,40,43,57],
[05,18,24,37,50,58],
[09,21,30,36,44,58],
[05,18,24,37,42,58],
[24,32,33,49,51,53],
[04,14,27,39,48,60],
[05,06,13,18,28,33],
[14,28,29,30,37,38],
[03,05,15,26,30,48],
[04,14,21,28,45,52],
[10,16,24,38,45,52],
[04,18,25,38,44,51],
[08,16,18,19,27,30],
[01,11,23,32,47,58],
[12,17,24,31,44,54],
[03,14,28,35,42,51],
[12,25,36,44,51,58],
[05,10,24,33,37,50],
[07,10,17,18,46,60],
[04,17,24,32,37,57],
[04,14,25,38,42,53],
[08,17,29,35,46,54],
[41,42,47,51,56,58],
[07,15,26,37,49,55],
[02,04,06,10,13,14],
[05,11,28,39,46,54],
[04,15,23,38,47,59],
[08,22,36,45,47,53],
[09,19,30,45,52,56],
[55,56,57,58,59,60],
[35,40,44,50,53,60],
[02,10,27,30,50,59],
[05,10,18,24,33,37],
[11,20,35,45,55,60],
[11,15,20,22,39,40],
[06,09,13,29,39,48],
[11,20,33,40,44,60],
[33,39,46,49,55,57],
[08,10,19,24,31,45],
[01,10,24,36,41,59],
[12,23,35,40,50,60],
[07,17,27,37,47,57],
[01,07,17,24,33,35],
[08,12,29,34,45,56],
[06,07,21,23,33,47],
[31,39,42,43,46,57],
[05,22,33,41,50,59],
[05,10,18,33,42,58],
[32,38,41,45,52,59],
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
