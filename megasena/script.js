// Jogos previamente cadastrados
const participantes = [
    { nome: "Wanderson Pamplona" }, 
    { nome: "Marcos Almeida" },
    { nome: "Jorzinaldo Correa" },
    { nome: "Rafaella Nascimento" },
    { nome: "Rafaella Nascimento" },
    { nome: "Ilailson Rocha" },
    { nome: "Ilailson Rocha" },
    { nome: "Romero Santana" },
    { nome: "Mayco Dias" },
    { nome: "Frank Sampaio" }, 
    { nome: "Frank Sampaio" },
    { nome: "Romulo Rocha" },
    { nome: "Romulo Rocha" },
    { nome: "Suely Aguiar" }, 
    { nome: "Raimundo Aguiar" }, 
    { nome: "Antonio Oliveira" }, 
    { nome: "Antonio Oliveira" }, 
    { nome: "Ney Barros" },
    { nome: "Ronaldo Souza" },
    { nome: "Ronaldo Souza" },
    { nome: "Lelis Aguiar" },
    { nome: "Fabiano Paz" },
    { nome: "Jedson Cardoso" },
    { nome: "Jedson Cardoso" },
    { nome: "Edriel Chagas" }, 
    { nome: "Marcia Santos" }, 
    { nome: "Claudia Albuquerque" }, 
    { nome: "Marcus Né" }, 
    { nome: "Marcus Né" }, 
    { nome: "Marcus Né" }, 
    { nome: "Thiago Melo" }, 
    { nome: "Gilson Clê"},
    { nome: "Elder Thiago" },
    { nome: "Wanderson Brito" },
    { nome: "Wanderson Brito" },
    { nome: "Diego Felix" },
    { nome: "Nélio Dias" },
    { nome: "Saulo Aguiar" }, 
    { nome: "Saulo Aguiar" },
    { nome: "Hary Daniel" }, 
    { nome: "Hary Daniel" }, 
    { nome: "Hary Daniel" }, 
    { nome: "Samuel Cordeiro" }, 
    { nome: "Fabricio Pereira" }, 
    { nome: "Roberto Mendes" },
    { nome: "Rennan Brito" },
    { nome: "Claudio Padilha" },
    { nome: "Cicero Lopes" },
    { nome: "Edbruno Silva" }, 
    { nome: "Naldo Souza" }, 
    { nome: "Carolina Costa" }, 
    { nome: "Sara Aguiar" },
    { nome: "Reginaldo Sales" },  
    { nome: "Saulo Aguiar" }, 
    // { nome: "Wander Melo" },
    // { nome: "Maria Sousa" }, 
    // { nome: "Paulo Victor" }, 
    // { nome: "Kelly Gomes" }, 
    // { nome: "Carolina Costa" },
    // { nome: "André Melo" },
    // { nome: "Emerson Marcelo" },
    // { nome: "Claudia Albuquerque" },
    // { nome: "Antonio Freitas" }, 
    // { nome: "Yasmim Pantoja" },
    // { nome: "Gustavo Christino" },
    // { nome: "Tania Maria" },
    // { nome: "Tania Maria" },
  // { nome: "Ivanildo Tavares" },
  // { nome: "Benaldo Lima" },
  // { nome: "Maia Batista" },
  // { nome: "Wesley Souza" },
  // { nome: "João Ricardo" }, 
  // { nome: "Romulo Kleber" }, 
  // { nome: "Nonata Souza" },
  ];


  function displayParticipants() {
    const participantsList = document.getElementById('participantsList');
    participantsList.innerHTML = '';

    participantes.forEach(participante => {
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex align-items-center gap-2';

      const nameSpan = document.createElement('span');
      nameSpan.textContent = participante.nome;
      li.appendChild(nameSpan);

      if (participante.meiaCota) {
        const badge = document.createElement('span');
        badge.className = 'badge bg-light text-secondary border';
        badge.textContent = 'meia';
        li.appendChild(badge);
      }

      participantsList.appendChild(li);
    });
  }

const jogos = [
    [06, 11, 23, 24, 30, 37],
    [11, 23, 24, 37, 56, 60],
    [01, 18, 33, 40, 50, 53],
    [02, 06, 23, 30, 43, 56],
    [03, 12, 25, 38, 45, 51],
    [18, 35, 40, 48, 50, 53],
    [14, 17, 27, 42, 46, 59],
    [05, 14, 21, 26, 27, 58],
    [02, 23, 30, 37, 43, 60],
    [02, 06, 24, 30, 37, 43],
    [17, 21, 34, 42, 46, 59],
    [05, 17, 21, 26, 27, 59],
    [05, 17, 21, 34, 46, 58],
    [06, 15, 23, 37, 56, 60],
    [08, 18, 33, 35, 40, 50],
    [04, 07, 16, 22, 32, 36],
    [06, 15, 30, 37, 43, 56],
    [02, 06, 11, 23, 37, 43],
    [02, 06, 11, 30, 37, 56],
    [20, 28, 32, 39, 44, 45],
    [05, 14, 26, 34, 46, 58],
    [03, 07, 13, 25, 45, 47],
    [21, 27, 34, 42, 58, 59],
    [17, 21, 26, 42, 46, 58],
    [14, 21, 26, 42, 58, 59],
    [05, 21, 26, 27, 42, 46],
    [02, 11, 15, 37, 56, 60],
    [10, 39, 52, 54, 55, 57],
    [05, 14, 26, 42, 58, 59],
    [10, 22, 31, 38, 52, 55],
    [06, 11, 24, 30, 43, 56],
    [26, 27, 34, 46, 58, 59],
    [17, 26, 27, 42, 58, 59],
    [14, 21, 26, 34, 42, 59],
    [01, 08, 35, 40, 48, 50],
    [14, 17, 27, 34, 46, 59],
    [05, 14, 17, 21, 27, 42],
    [14, 17, 26, 34, 58, 59],
    [14, 17, 26, 27, 34, 42],
    [11, 15, 30, 37, 43, 60],
    [08, 18, 33, 49, 50, 53],
    [02, 06, 11, 23, 43, 60],
    [14, 21, 34, 42, 46, 58],
    [02, 15, 23, 30, 37, 56],
    [04, 09, 20, 31, 41, 51],
    [02, 11, 24, 30, 56, 60],
    [06, 15, 23, 24, 43, 60],
    [02, 06, 15, 43, 56, 60],
    [09, 16, 29, 41, 51, 57],
    [02, 24, 37, 43, 56, 60],
    [17, 21, 26, 27, 34, 46],
    [05, 14, 17, 26, 46, 59],
    [23, 24, 30, 43, 56, 60],
    [06, 11, 24, 30, 43, 60],
    [01, 18, 35, 49, 50, 53],
    [06, 11, 15, 23, 30, 60],
    [05, 17, 21, 42, 58, 59],
    [05, 17, 27, 34, 58, 59],
    [05, 21, 26, 34, 42, 58],
    [12, 19, 28, 29, 38, 44],
    [01, 08, 33, 40, 49, 53],
    [02, 15, 23, 24, 37, 43],
    [05, 14, 17, 34, 42, 58],
    [01, 33, 35, 40, 49, 50],
    [05, 14, 17, 26, 42, 46],
    [02, 11, 23, 43, 56, 60],
    [05, 14, 21, 46, 58, 59],
    [11, 15, 23, 37, 43, 56],
    [06, 11, 15, 24, 43, 56],
    [01, 08, 18, 48, 50, 53],
    [11, 15, 23, 24, 30, 43],
    [05, 17, 26, 27, 34, 46],
    [01, 08, 18, 35, 49, 53],
    [01, 08, 18, 33, 35, 49],
    [02, 11, 23, 24, 30, 43],
    [02, 06, 11, 15, 24, 37],
    [02, 11, 15, 23, 24, 60],
    [02, 06, 23, 37, 56, 60],
    [05, 27, 42, 46, 58, 59],
    [14, 27, 34, 42, 58, 59],
    [01, 33, 35, 40, 48, 53],
    [02, 11, 15, 23, 37, 60],
    [06, 11, 24, 37, 43, 60],
    [14, 17, 21, 26, 34, 59],
    [05, 17, 21, 27, 46, 58],
    [33, 35, 48, 49, 50, 53],
    [08, 18, 33, 35, 48, 53],
    [05, 26, 34, 42, 46, 59],
    [04, 10, 20, 39, 52, 57],
    [01, 18, 35, 40, 48, 49],
    [02, 06, 15, 24, 30, 60],
    [05, 14, 21, 27, 34, 59],
    [08, 18, 40, 48, 49, 53],
    [01, 08, 18, 33, 40, 48],
    [06, 24, 30, 37, 56, 60],
    [14, 21, 26, 27, 46, 59],
    [14, 17, 21, 27, 46, 58],
    [08, 18, 33, 40, 50, 53],
    [01, 08, 35, 48, 49, 53],
    [08, 35, 40, 49, 50, 53],
    [05, 17, 26, 46, 58, 59],
    [02, 11, 15, 30, 43, 56],
    [18, 33, 40, 48, 49, 50],
    [15, 24, 30, 37, 56, 60],
    [06, 11, 23, 30, 56, 60],
    [01, 08, 33, 48, 49, 50],
    [05, 14, 27, 34, 42, 46],
    [02, 06, 15, 23, 24, 56],
];

  function calculateTotal() {
    const amountPerPerson = 12;
    const totalCotas = participantes.reduce((s, p) => s + (p.meiaCota ? 0.5 : 1), 0);
    const totalAmount = totalCotas * amountPerPerson;

    document.getElementById('totalValue').textContent = `R$ ${totalAmount.toFixed(2)}`;
  }

  const participantsModal = document.getElementById('participantsModal');
  participantsModal.addEventListener('shown.bs.modal', calculateTotal);

  function displayGames() {
    let gamesHTML = "<h3 class='mb-4'>Jogos Cadastrados</h3>";

    jogos.forEach((jogo, index) => {
      let jogoHTML = jogo.map(num =>
        `<span class="number">${num}</span>`
      ).join('');

      gamesHTML += `
        <div class="game-card" id="jogo-${index}">
          <div class="game-header">
            <span class="game-title">Jogo ${index + 1}</span>
            <span class="badge bg-success" id="acertos-${index}">Acertos: 0</span>
          </div>
          <div class="game-numbers">${jogoHTML}</div>
        </div>
      `;
    });

    document.getElementById('gamesList').innerHTML = gamesHTML;
  }

  function checkNumbers() {
    const drawnNumbers = document.getElementById('drawnNumbers').value.split(',').map(Number);
    const validDrawnNumbers = drawnNumbers.filter(num => !isNaN(num) && num > 0 && num <= 60);

    let acertos6 = 0;
    let acertos5 = 0;
    let acertos4 = 0;
    let acertos3 = 0;
    let acertos2 = 0;
    jogos.forEach((jogo, index) => {
      const matchedNumbers = jogo.filter(num => validDrawnNumbers.includes(num));

      let jogoHTML = jogo.map(num =>
        validDrawnNumbers.includes(num)
        ? `<span class="number matched">${num}</span>`
        : `<span class="number">${num}</span>`
      ).join('');

      document.getElementById(`jogo-${index}`).innerHTML = `
        <div class="game-header">
          <span class="game-title">Jogo ${index + 1}</span>
          <span class="badge bg-success">Acertos: ${matchedNumbers.length}</span>
        </div>
        <div class="game-numbers">${jogoHTML}</div>
      `;

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

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
      <div class="results-card">
        <div class="results-title">Resultado da Conferência</div>
        <div class="result-row">
          <span class="result-label">6 acertos</span>
          <span class="result-value ${acertos6 > 0 ? 'highlight' : ''}">${acertos6}</span>
        </div>
        <div class="result-row">
          <span class="result-label">5 acertos</span>
          <span class="result-value ${acertos5 > 0 ? 'highlight' : ''}">${acertos5}</span>
        </div>
        <div class="result-row">
          <span class="result-label">4 acertos</span>
          <span class="result-value ${acertos4 > 0 ? 'highlight' : ''}">${acertos4}</span>
        </div>
        <div class="result-row">
          <span class="result-label">3 acertos</span>
          <span class="result-value ${acertos3 > 0 ? 'highlight' : ''}">${acertos3}</span>
        </div>
        <div class="result-row">
          <span class="result-label">2 acertos</span>
          <span class="result-value ${acertos2 > 0 ? 'highlight' : ''}">${acertos2}</span>
        </div>
      </div>
    `;
  }


  document.getElementById("drawnNumbers").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      checkNumbers();
    }
  });

  (function() {
  const url = new URL(window.location.href);
  url.searchParams.set('_', Date.now());
  window.history.replaceState(null, '', url.toString());
})();

window.onload = function() {
    displayGames();
    displayParticipants();
  };
