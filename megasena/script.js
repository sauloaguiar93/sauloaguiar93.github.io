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
  // "Leandro Pedro",
  // "Paulo Victor",
  // "Marcus Né",
  // "Wanderson Pamplona",
  // "Carolina Costa",
  // "Mayco Dias",
  // "Lelis Aguiar",
  // "Saulo Aguiar",
  // "Ilailson Rocha",
  // "Wander Melo",
  // "Fabiano Paz",
  // "Thiago Melo",
  // "Claudio Padilha",
  // "Marcos Almeida",
  // "Claudia Albuquerque",
  // "Marcia Santos",
  // "Gilson Clê",
  // "Kleber Cruz",
  // "Sara Aguiar",
  // "Roberto Mendes",
  // "Elder Moreira",
  // "Romulo Kleber",
  // "Suely Aguiar",
  // "Raimundo Aguiar",
  // "Edriel Chagas",
  // "Wanderson Brito",
  // "Romero Santana",
  // "Maia Carla",
  // "Renato Souza",
  // "Tenten Souza",
  // "Nonata Souza",
  // "André Melo",
  // "Waldiney Barros",
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
[02,13,21,38,46,54],
[07,11,28,45,57,59],
[06,17,29,32,43,59],
[04,14,21,28,45,52],
[04,15,27,36,49,52],
[03,16,25,33,44,58],
[05,14,23,39,44,51],
[02,04,06,08,10,12],
[40,42,46,49,53,57],
[04,17,24,32,37,57],
[09,22,33,40,50,60],
[05,12,23,34,47,56],
[08,16,18,19,27,30],
[02,05,11,25,38,44],
[07,14,26,31,48,55],
[14,28,29,30,37,38],
[02,05,11,17,25,38],
[03,06,28,46,48,59],
[05,40,45,50,55,60],
[01,05,10,17,28,44],
[11,12,13,44,45,46],
[02,19,28,36,47,55],
[11,24,31,40,50,55],
[31,39,42,43,46,57],
[01,02,05,06,10,23],
[03,12,34,37,46,52],
[05,10,15,25,30,35],
[05,15,25,35,45,55],
[05,15,27,28,38,40],
[05,17,25,38,44,56],
[01,12,25,37,48,56],
[03,13,16,35,37,51],
[10,24,26,40,42,43],
[10,21,32,38,47,53],
[03,15,22,36,45,57],
[11,15,20,22,39,40],
[05,06,13,18,28,33],
[02,05,11,17,44,56],
[23,32,39,48,57,58],
[07,19,28,34,49,60],
[07,23,39,49,50,58],
[06,18,21,23,46,56],
[09,17,28,37,47,60],
[07,12,25,34,43,51],
[10,17,27,28,34,58],
[01,04,11,29,38,40],
[01,05,06,45,58,60],
[09,20,28,37,42,60],
[13,16,23,41,50,52],
[09,11,15,35,40,49],
[34,39,41,48,55,60],
[01,18,22,39,45,53],
[02,17,25,38,44,56],
[02,11,25,38,44,56],
[10,12,20,23,46,59],
[06,09,19,23,33,42],
[08,12,16,23,25,46],
[09,17,23,24,45,49],
[04,10,17,20,30,55],
[01,34,38,45,46,59],
[32,37,45,50,54,58],
[08,20,27,33,46,58],
[08,19,30,35,41,57],
[02,10,18,30,44,50],
[05,16,25,29,34,46],
[11,20,25,40,49,60],
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
