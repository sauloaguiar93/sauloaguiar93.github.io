// Jogos previamente cadastrados
const participantes = [
    "Saulo Aguiar"
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
    [2,4,7,8,9,12,13,15,16,17,22,24,25,26,28,29,31,32,34,38,40,42,43,46,49,53,54,56,57,58,60,63,65,67,69,71,74,75,77,78,82,84,87,88,89,92,93,95,96,99],
    [0,1,3,5,6,10,11,14,18,19,20,21,23,27,30,33,35,36,37,39,41,44,45,47,48,50,51,52,55,59,61,62,64,66,68,70,72,73,76,79,80,81,83,85,86,90,91,94,97,98]
  ];
  
  function calculateTotal() {
    const participantsList = document.querySelectorAll('ol.list-group li');
    const amountPerPerson = 35;
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
    const validDrawnNumbers = drawnNumbers.filter(num => !isNaN(num) && num > 0 && num <= 99);
  
    // Contadores para cada quantidade de acertos
    let acertos20 = 0;
    let acertos19 = 0;
    let acertos18 = 0;
    let acertos17 = 0;
    let acertos16 = 0;
    let acertos15 = 0;
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
        case 20:
          acertos20++;
          break;
        case 19:
          acertos19++;
          break;
        case 18:
          acertos18++;
          break;
        case 17:
          acertos17++;
          break;
        case 16:
          acertos16++;
          break;
        case 15:
          acertos15++;
          break;
      }
    });
  
    // Limpar resultados anteriores antes de adicionar novos
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
      <div class="mt-3">
        <strong>Quantidade de jogos com 20 acertos:</strong> ${acertos20}<br>
        <strong>Quantidade de jogos com 19 acertos:</strong> ${acertos19}<br>
        <strong>Quantidade de jogos com 18 acertos:</strong> ${acertos18}<br>
        <strong>Quantidade de jogos com 17 acertos:</strong> ${acertos17}<br>
        <strong>Quantidade de jogos com 16 acertos:</strong> ${acertos16}<br>
        <strong>Quantidade de jogos com 15 acertos:</strong> ${acertos15}
      </div>
    `;
  }
  
  
  document.getElementById("drawnNumbers").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();  // Impede o comportamento padrão de submit do formulário
      checkNumbers();  // Chama a função de conferência
    }
  });
  
// Exibir os jogos e participantes ao carregar a página
window.onload = function() {
    displayGames();
    displayParticipants();
  };