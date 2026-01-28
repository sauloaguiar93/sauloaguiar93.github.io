// Jogos previamente cadastrados
const participantes = [
    "Thiago Melo",
    "Paulo Victor",
    "Ilailson Rocha",
    "Edriel Chagas",
    "Romulo Kleber",
    "Romulo Kleber",
    "Wanderson Brito",
    "Romero Santana",
    "Marcia Santos",
    "Mayco Dias",
    
    // "Ronaldo Souza",
    // "Ronaldo Souza",
    // "Ronaldo Souza",
    // "Lelis Aguiar",
    // "Rennan Brito",
    // "Rafaella Nascimento",
    // "Hary Daniel",
    // "Hary Daniel",
    // "Gilson Clê",
    // "Suely Aguiar",
    // "Raimundo Aguiar",
    // "Jedson Cardoso",
    // "Jean Souza",
    // "Reginaldo Souza",
    // "Pedro Souza",
    // "Fabricio Pereira",
    // "Marcus Né",
    // "Wanderson Pamplona",
    // "Claudia Albuquerque",
    // "Waldiney Barros",
    // "Sara Aguiar",
    // "Saulo Aguiar",
    // "Saulo Aguiar",
    // "Roberto Mendes",
    // "Carolina Costa",
    // "Jonathan Diegi",
    // "André Melo",
    // "Edbruno Silva",
    // "Claudio Padilha",
    // "Elder Moreira",
    // "Renato Souza",
    // "Naldo Souza",
    // "Wander Melo",
    // "Kleber Cruz",
    // "Marcos Almeida",
    // "Kelly Gomes",
    // "Adenilson Lopes",
    // "Reginaldo Sales",
    // "Tenten Souza",
    // "Tenten Souza",
    // "Noaman Miranda",
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
    [04,19,28,46,53,56],
    [10,24,32,35,47,49],
    [19,24,27,46,51,56],
    [05,10,17,20,33,40],
    [11,20,26,48,55,58],
    [04,14,30,42,56,60],
    [18,27,29,30,33,35],
    [03,05,15,31,48,50],
    [13,14,18,35,43,54],
    [05,29,34,45,54,56],
    [06,11,33,46,52,58],
    [04,24,25,41,48,50],
    [02,14,33,37,56,60],
    [02,12,21,27,45,49],
    [07,14,21,32,35,47],
    [02,08,27,30,35,53],
    [16,21,38,40,50,51],
    [16,26,40,47,54,55],
    [06,25,27,32,46,53],
    [05,18,30,32,34,38],
    [13,20,43,46,51,58],
    [13,18,22,23,45,48],
    [03,14,16,30,32,56],
    [10,12,31,44,45,59],
    [03,09,31,32,37,59],
    [02,17,18,30,56,60],
    [06,11,19,44,49,56],
    [05,14,23,26,27,56],
    [08,15,34,35,53,60],
    [16,18,31,39,45,50],
    [07,16,17,43,44,55],
    [08,10,30,32,35,59],
    [24,26,35,36,46,59],
    [02,06,21,27,47,51],
    [02,24,29,34,55,58],
    [05,20,29,39,42,45],
    [12,27,34,42,49,53],
    [08,15,27,33,37,42],
    [07,11,24,40,50,55],
    [06,18,28,35,50,53],
    [07,11,18,38,48,59],
    [14,25,36,39,44,48],
    [09,15,16,38,42,56],
    [17,25,27,32,33,46],
    [12,15,27,36,43,50],
    [12,27,45,47,52,54],
    [03,14,15,27,29,60],
    [02,16,27,32,53,56],
    [16,23,28,31,44,56],
    [03,17,27,31,33,60],
    [18,23,37,43,48,54],
    [02,08,11,21,45,58],
    [06,27,28,31,44,53],
    [06,11,29,40,41,42],
    [02,11,14,35,37,45],
    [03,06,08,27,43,51],
    [08,19,27,32,33,41],
    [09,15,28,36,41,56],
    [06,08,27,37,47,54],
    [16,19,38,41,44,52],
    [04,30,31,33,35,42],
    [08,15,21,28,49,60],
    [03,16,29,34,37,53],
    [10,14,32,38,45,55],
    [05,11,30,34,41,60],
    [03,18,27,30,35,38],
    [13,18,34,35,42,52],
    [02,10,11,40,41,51],
    [05,09,29,37,56,59],
    [08,16,17,30,38,56],
    [07,08,15,36,43,47],
    [09,12,21,34,41,50],
    [03,14,16,35,53,59],
    [05,08,10,33,42,60],
    [08,09,17,35,56,60],
    [16,20,32,47,50,53],
    [02,03,29,30,33,56],
    [05,09,17,35,37,42],
    [16,22,25,32,50,59],
    [07,11,21,28,45,46],
    [05,09,20,37,48,51],
    [02,10,27,37,41,60],
    [02,09,17,38,53,59],
    [10,15,17,32,53,56],
    [18,25,36,48,56,57],
    [01,13,25,36,49,50],
    [04,08,29,30,37,56],
    [08,09,32,33,35,53],
    [04,18,20,25,27,33],
    [10,14,17,27,38,59],
    [03,27,30,32,35,37],
    [05,08,10,13,39,50],
    [05,37,38,44,50,51],
    [05,16,22,29,33,59],
    [02,09,15,29,30,56],
    [09,15,29,30,31,37],
    [01,10,17,18,25,56],
    [04,17,30,31,35,53],
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
