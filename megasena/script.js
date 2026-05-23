// Jogos previamente cadastrados
const participantes = [
  "Rafaella Nascimento",
  "Hary Daniel",
  "Hary Daniel",
  "Lelis Aguiar",
  "Rennan Brito",
  "Thiago Melo",
  "Waldiney Barros",
  "Romero Santana",
  "Fabricio Pereira",
  "Reginaldo Sales",
  "Suely Aguiar",
  "Raimundo Aguiar",
  "Diene Silva",
  "Carolina Costa",
  "Carolina Costa",
  "Tenten Souza",
  "Ronaldo Souza",
  "Ronaldo Souza",
  "Kelly Gomes",
  "Elder Moreira",
  "Saulo Aguiar",
  "Wander Melo",
  "Wander Melo",
  "Claudia Albuquerque",
  "Roberto Mendes",
  "Wanderson Brito",
  "Diego Felix",
  "Wanderson Pamplona",
  "Ilailson Rocha",
  "Ilailson Rocha",
  "Ilailson Rocha",
  "Ilailson Rocha",
  "Gilson Clê",
  "Jedson Cardoso",
  "Jedson Cardoso",
  "Claudio Padilha",
  "Marcos Almeida",
  "Edriel Chagas",
  "Mayco Dias",
  "Marcia Santos",
  "Fabiano Paz",
  "Rafaella Nascimento",
  "Rafaella Nascimento",
  "Marcus Né",
  "Marcus Né",
  "Marcus Né",
  "Sara Aguiar",
  "Romulo Kleber",
  "Romulo Kleber",
  "Sergio Bittencourt",
  "Saulo Aguiar",
  "Reginaldo Souza",
  "Jean Souza",
  "Renato Souza",
  "Naldo Souza",
  "Leandro Pedro",
  
  // "Mayco Dias",
  // "Kleber Cruz",
  // "Roberto Mendes",
  // "Nonata Souza",
  // "Pedro Souza",
  // "Maia Carla",
  // "Edbruno Silva",
  // "Paulo Victor",
  // "Renato Souza",
  // "André Melo",
  // "EdBruno Silva",
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
  [09,19,23,39,58,60],
[09,14,19,34,39,48],
[21,23,31,34,44,56],
[07,11,23,27,28,36],
[20,25,28,34,37,45],
[06,14,31,34,41,51],
[05,15,22,37,55,60],
[09,19,31,36,45,52],
[01,11,40,41,58,60],
[03,15,16,29,36,60],
[05,12,29,32,35,56],
[10,14,29,35,55,59],
[03,11,27,33,38,42],
[09,34,46,47,52,59],
[03,07,19,26,44,57],
[04,20,23,26,33,40],
[01,10,25,50,51,59],
[02,24,41,43,52,60],
[03,12,15,32,37,52],
[09,15,18,23,35,50],
[06,16,28,48,49,53],
[30,33,37,43,46,58],
[13,22,45,48,51,53],
[01,13,16,21,36,56],
[11,25,35,41,46,56],
[05,06,08,17,49,59],
[01,05,26,41,50,56],
[02,03,10,30,49,58],
[04,17,28,43,48,60],
[10,21,37,40,45,53],
[08,14,32,47,49,52],
[21,27,37,40,46,51],
[10,19,20,24,28,49],
[01,10,20,36,58,59],
[09,10,25,34,37,60],
[08,11,24,30,35,58],
[03,04,11,15,35,56],
[18,21,28,31,32,59],
[16,23,37,39,58,59],
[03,12,15,17,35,54],
[09,13,22,23,27,40],
[16,18,37,41,52,58],
[08,14,17,26,37,39],
[02,06,25,33,36,58],
[10,13,28,40,48,55],
[15,19,30,47,50,60],
[10,15,39,40,43,46],
[01,25,35,38,43,60],
[03,20,24,37,47,51],
[04,19,24,33,34,49],
[27,28,35,43,50,57],
[05,10,16,41,53,56],
[12,15,28,29,38,44],
[11,24,31,32,37,58],
[11,16,26,40,57,60],
[04,07,17,18,46,55],
[07,08,12,23,43,48],
[04,15,47,51,57,60],
[13,21,26,44,45,53],
[05,09,30,40,47,56],
[11,22,31,44,46,54],
[01,06,17,38,45,48],
[01,11,25,28,34,50],
[04,08,11,17,37,48],
[04,11,20,47,51,55],
[02,23,49,50,52,56],
[11,16,25,27,46,53],
[02,23,31,32,48,55],
[02,12,15,16,45,60],
[09,13,25,29,38,52],
[05,10,15,49,55,60],
[23,34,40,43,52,54],
[07,13,18,28,40,41],
[04,09,37,43,48,53],
[07,10,14,20,24,49],
[03,15,18,21,33,44],
[04,08,12,27,36,47],
[04,29,31,34,52,60],
[17,19,30,39,54,59],
[02,27,28,40,47,54],
[23,26,34,45,53,57],
[02,06,15,44,45,57],
[09,14,19,41,43,56],
[03,05,21,50,53,54],
[24,26,30,31,43,51],
[02,25,38,42,43,55],
[04,16,37,39,54,56],
[07,32,36,39,45,56],
[01,17,27,40,45,60],
[08,19,25,31,36,56],
[15,16,29,35,45,56],
[01,38,40,43,51,57],
[04,07,23,33,34,55],
[09,10,18,35,40,47],
[09,13,24,34,35,57],
[04,06,19,49,56,58],
[07,24,27,37,42,44],
[03,11,16,24,42,43],
[01,07,08,19,42,51],
[04,07,30,41,49,59],
[01,04,13,28,41,44],
[02,03,31,39,42,58],
[14,17,20,24,43,57],
[17,24,32,52,58,59],
[03,10,24,28,39,44],
[02,06,20,21,32,47],
[01,09,26,40,41,50],
[04,17,21,30,34,59],
[03,18,27,31,36,38],
[10,26,30,37,40,51],
[16,33,36,47,48,57],
[06,09,11,21,45,58],
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
