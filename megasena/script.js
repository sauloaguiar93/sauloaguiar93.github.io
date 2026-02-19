// Jogos previamente cadastrados
const participantes = [
  "Ronaldo Souza",
  "Ronaldo Souza",
  "Hary Daniel",
  "Hary Daniel",
  "Edriel Chagas",
  "Lelis Aguiar",
  "Elder Moreira",
  "Thiago Melo",
  "Jedson Cardoso",
  "Raimundo Aguiar",
  "Carolina Costa",
  "Ilailson Rocha",
  "Sara Aguiar",
  "Wanderson Pamplona",
  "Claudia Albuquerque",
  "Romero Santana",
  "Gilson Clê",
  "Paulo Victor",
  "Marcus Né",
  "Rennan Brito",
  "Marcia Santos",
  "Suely Aguiar",
  "Rafaella Nascimento",
  "Pedro Souza",
  "Claudio Padilha",
  "Saulo Aguiar",
  "Reginaldo Sales",
  "Marcos Almeida",
  "Romulo Kleber",
  "Romulo Kleber",
  "Wander Melo",
  // "Maia Carla",
  // "Wanderson Brito",
  // "Mayco Dias",
  // "Fabiano Paz",
  // "Roberto Mendes",
  // "Maria Do Carmo",
  // "Nonata Souza",
  // "Waldiney Barros",
  // "Leandro Pedro",
  // "Kleber Cruz",
  // "Roberto Mendes",
  // "Tenten Souza",
  // "Tenten Souza",

  // "Edbruno Silva",
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
  [05,10,33,34,37,58],
[08,12,29,36,43,55],
[06,11,22,33,44,55],
[11,22,31,45,48,60],
[04,06,14,36,55,58],
[04,15,27,38,49,54],
[02,18,25,39,41,54],
[01,28,44,50,57,59],
[04,15,26,28,30,45],
[01,17,20,31,45,57],
[34,39,43,52,56,59],
[08,10,27,30,49,50],
[11,13,21,23,43,46],
[03,21,28,34,45,52],
[02,19,26,31,47,58],
[01,08,29,40,51,58],
[05,14,23,40,50,60],
[01,17,29,36,49,57],
[31,35,42,49,53,58],
[04,05,14,18,28,33],
[01,19,22,35,46,58],
[11,23,35,47,51,59],
[15,27,28,43,46,58],
[05,13,27,34,42,51],
[05,13,33,42,51,56],
[09,15,20,37,40,60],
[06,13,22,30,37,52],
[05,24,33,42,53,58],
[10,16,24,32,43,57],
[06,18,21,23,46,56],
[01,02,03,04,05,06],
[07,11,26,38,42,59],
[05,17,30,33,44,60],
[01,05,10,33,44,53],
[02,04,06,10,13,14],
[02,12,22,32,42,52],
[09,11,15,35,40,49],
[06,20,34,39,47,52],
[03,13,26,37,50,56],
[09,13,20,37,49,56],
[04,15,23,32,47,51],
[55,56,57,58,59,60],
[08,12,25,44,48,53],
[05,10,13,24,33,37],
[33,37,46,51,54,57],
[40,45,47,52,55,59],
[13,24,33,44,53,58],
[09,20,24,25,48,51],
[13,17,33,50,53,59],
[09,12,25,34,42,56],
[06,15,23,38,41,54],
[38,41,44,50,56,60],
[15,27,35,44,55,59],
[06,14,27,31,48,50],
[05,07,16,26,30,49],
[42,44,51,53,56,58],
[10,20,30,45,52,58],
[07,19,30,35,42,53],
[02,14,25,41,53,55],
[10,24,37,44,53,58],
[12,23,36,44,55,59],
[05,10,13,37,51,56],
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
