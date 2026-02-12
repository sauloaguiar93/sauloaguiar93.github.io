// Jogos previamente cadastrados
const participantes = [
  "Jedson Cardoso",
  "Nonata Souza",
  "Pedro Souza",
  "Thiago Melo",
  "Mayco Dias",
  "Waldiney Barros",
  "Wanderson Pamplona",
  "Claudia Albuquerque",
  "Wanderson Brito",
  "Lelis Aguiar",
  "Edriel Chagas",
  "Rafaella Nascimento",
  "Leandro Pedro",
  "Kleber Cruz",
  "Reginaldo Sales",
  "Marcus Né",
  "Carolina Costa",
  "Ronaldo Souza",
  "Ronaldo Souza",
  "Suely Aguiar",
  "Raimundo Aguiar",
  "Rennan Brito",
  "Roberto Mendes",
  "Maia Carla",
  "Ilailson Rocha",
  "Roberto Mendes",
  "Hary Daniel",
  "Hary Daniel",
  "Sara Aguiar",
  "Tenten Souza",
  "Tenten Souza",
  "Elder Moreira",
  "Marcia Santos",
  "Paulo Victor",
  "Saulo Aguiar",
  "Saulo Aguiar",
  
  // "Edbruno Silva",
  // "Romero Santana",
  // "Gilson Clê",
  // "Claudio Padilha",
  // "Marcos Almeida",
  // "Naldo Souza",
  // "André Melo",
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
[04,21,29,38,47,59],
[05,15,30,34,51,55],
[06,20,24,33,42,57],
[10,20,28,36,49,56],
[06,14,23,37,44,59],
[01,14,25,33,49,58],
[03,12,34,37,46,52],
[01,14,26,39,46,53],
[01,06,13,24,35,56],
[06,17,24,37,43,56],
[03,16,28,35,48,52],
[17,26,36,39,51,54],
[13,22,28,36,44,56],
[09,20,31,40,46,54],
[06,14,22,29,44,56],
[08,16,26,34,45,48],
[10,18,21,35,49,60],
[09,18,24,33,53,57],
[13,22,29,38,46,59],
[04,08,18,24,31,59],
[01,10,24,29,36,40],
[06,09,25,31,42,60],
[09,11,27,31,47,52],
[21,23,34,37,38,53],
[35,44,51,55,57,59],
[09,13,27,34,53,56],
[04,12,27,33,45,58],
[01,11,23,35,47,53],
[09,17,25,27,42,45],
[01,06,27,34,44,52],
[06,13,23,32,45,53],
[02,15,23,34,44,59],
[09,15,23,36,42,53],
[04,13,14,18,59,60],
[06,20,22,32,41,60],
[07,13,22,30,41,53],
[03,11,19,28,42,60],
[01,22,29,38,44,56],
[01,07,17,24,33,35],
[38,42,49,53,58,60],
[01,18,26,35,41,60],
[03,10,20,33,47,59],
[03,15,26,31,39,53],
[03,09,25,34,41,60],
[01,10,28,39,47,55],
[01,10,24,25,51,60],
[09,10,22,35,46,60],
[07,11,28,45,57,59],
[06,13,25,34,46,59],
[16,27,37,41,52,55],
[01,09,25,38,42,53],
[15,26,30,34,38,51],
[06,15,22,39,46,57],
[11,21,25,36,38,45],
[01,05,06,45,58,60],
[07,09,13,44,47,57],
[10,18,26,39,45,60],
[04,10,11,33,55,60],
[07,15,17,35,44,59],
[02,05,06,10,13,14],
[03,07,17,23,30,58],
[08,13,28,39,43,47],
[04,14,21,28,45,52],
[05,11,29,36,47,51],
[01,05,10,34,37,53],
[01,02,21,32,44,55],
[08,19,21,38,42,55],
[10,13,26,36,44,52],
[12,27,32,44,50,57],
[05,06,13,14,18,28],
[08,16,20,30,40,41],
[03,14,26,35,49,56],
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
