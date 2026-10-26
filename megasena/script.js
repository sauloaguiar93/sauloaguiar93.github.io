// Jogos previamente cadastrados
const participantes = [
    { nome: "Cicero Lopes" },
    { nome: "Ilailson Rocha" },
    { nome: "Ilailson Rocha" },
    { nome: "Lelis Aguiar" },
    { nome: "Thiago Melo" }, 
    { nome: "Maria Sousa" }, 
    { nome: "Antonio Oliveira" }, 
    { nome: "Antonio Oliveira" }, 
    { nome: "Paulo Victor" }, 
    { nome: "Jedson Cardoso" },
    { nome: "Jedson Cardoso" },
    { nome: "Edriel Chagas" }, 
    { nome: "Marcos Almeida" },
    { nome: "Elder Thiago" },
    { nome: "Elder Thiago" },
    { nome: "Jorzinaldo Correa" },
    { nome: "Suely Aguiar" }, 
    { nome: "Raimundo Aguiar" }, 
    { nome: "Kelly Gomes" }, 
    { nome: "Rennan Brito" },
    { nome: "Wanderson Pamplona" }, 
    { nome: "Romero Santana" },
    { nome: "Marcia Santos" }, 
    { nome: "Claudio Padilha" },
    { nome: "Mayco Dias" },
    { nome: "Carolina Costa" },
    { nome: "Ney Barros" },
    { nome: "Rafaella Nascimento" },
    { nome: "Rafaella Nascimento" },
    { nome: "Fabricio Pereira" }, 
    { nome: "Claudia Albuquerque" }, 
    { nome: "Ronaldo Souza" },
    { nome: "Ronaldo Souza" },
    { nome: "Ronaldo Souza" },
    { nome: "Ronaldo Souza" },
    { nome: "Marcus Né" }, 
    { nome: "André Melo" },
    { nome: "Roberto Mendes" },
    { nome: "Saulo Aguiar" }, 
    { nome: "Saulo Aguiar" },
    { nome: "Marcus Né" }, 
    { nome: "Marcus Né" }, 
    { nome: "Hary Daniel" }, 
    { nome: "Hary Daniel" }, 
    { nome: "Hary Daniel" }, 
    { nome: "Wander Melo" },
    { nome: "Frank Sampaio" }, 
    { nome: "Frank Sampaio" }, 
    { nome: "Frank Sampaio" }, 
    { nome: "Sara Aguiar" },
    { nome: "Saulo Aguiar" }, 
    { nome: "Saulo Aguiar" },
    { nome: "Saulo Aguiar" }, 
    { nome: "Saulo Aguiar" },
    { nome: "Saulo Aguiar" },
    { nome: "Saulo Aguiar" }, 
    { nome: "Saulo Aguiar" },
    { nome: "Saulo Aguiar" }, 
    { nome: "Saulo Aguiar" },
    { nome: "Saulo Aguiar" },
    // { nome: "Diego Felix" },
    // { nome: "Romulo Rocha" },
    // { nome: "Romulo Rocha" },
    // { nome: "Yasmim Pantoja" },
    // { nome: "Gilson Clê"},
    // { nome: "Wanderson Brito" },
    // { nome: "Wanderson Brito" },
    // { nome: "Gustavo Christino" },
    // { nome: "Tania Maria" },
    // { nome: "Tania Maria" },
    // { nome: "Marcus Né" },
  // { nome: "Ivanildo Tavares" },
  // { nome: "Benaldo Lima" },
  // { nome: "Reginaldo Sales" },  
  // { nome: "Maia Batista" },
  // { nome: "Wesley Souza" },
  // { nome: "João Ricardo" }, 
  // { nome: "Fabiano Paz" },
  // { nome: "Naldo Souza" }, 
  // { nome: "Romulo Kleber" }, 
  // { nome: "Edbruno Silva" }, 
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
[05, 06, 17, 20, 32, 34],
[24, 26, 30, 35, 37, 49],
[05, 06, 27, 32, 34, 58],
[30, 35, 37, 49, 55, 56],
[11, 26, 30, 37, 43, 55],
[24, 26, 30, 43, 49, 55],
[17, 20, 34, 42, 46, 59],
[01, 08, 14, 31, 44, 45],
[06, 17, 25, 27, 42, 46],
[11, 15, 30, 37, 49, 55],
[11, 24, 26, 30, 35, 56],
[15, 26, 30, 43, 55, 56],
[17, 25, 34, 42, 58, 59],
[25, 27, 34, 46, 58, 59],
[05, 32, 34, 39, 42, 46],
[11, 15, 26, 30, 35, 55],
[17, 32, 34, 42, 46, 58],
[17, 20, 32, 39, 42, 58],
[06, 25, 32, 42, 46, 59],
[05, 06, 17, 25, 32, 39],
[11, 24, 30, 35, 37, 49],
[20, 27, 32, 34, 42, 58],
[15, 35, 37, 43, 55, 56],
[11, 15, 35, 37, 43, 49],
[05, 20, 42, 46, 58, 59],
[05, 17, 20, 25, 27, 34],
[05, 20, 27, 32, 34, 42],
[15, 24, 26, 30, 37, 56],
[05, 06, 32, 39, 42, 46],
[05, 25, 27, 42, 46, 58],
[06, 17, 25, 32, 58, 59],
[06, 17, 20, 25, 27, 39],
[06, 20, 27, 34, 42, 59],
[25, 27, 32, 34, 42, 59],
[15, 24, 35, 43, 49, 56],
[17, 20, 27, 39, 58, 59],
[05, 06, 25, 27, 39, 59],
[05, 06, 27, 34, 46, 59],
[15, 24, 26, 35, 49, 55],
[05, 06, 17, 20, 27, 59],
[24, 26, 37, 43, 49, 56],
[17, 20, 25, 34, 39, 58],
[06, 17, 34, 39, 42, 59],
[05, 17, 27, 32, 58, 59],
[05, 20, 27, 34, 39, 58],
[05, 06, 32, 42, 58, 59],
[11, 35, 43, 49, 55, 56],
[06, 25, 27, 32, 39, 58],
[15, 24, 30, 35, 37, 43],
[11, 24, 26, 37, 49, 55],
[05, 17, 34, 42, 46, 58],
[11, 24, 26, 43, 55, 56],
[05, 25, 39, 42, 58, 59],
[05, 25, 32, 34, 46, 58],
[11, 15, 26, 49, 55, 56],
[05, 07, 10, 15, 26, 37],
[05, 17, 34, 39, 42, 59],
[05, 06, 17, 20, 25, 42],
[06, 25, 27, 34, 39, 46],
[06, 20, 25, 34, 58, 59],
[11, 24, 35, 37, 55, 56],
[15, 24, 30, 37, 55, 56],
[06, 20, 27, 32, 46, 58],
[06, 17, 39, 46, 58, 59],
[25, 27, 39, 42, 46, 58],
[24, 30, 35, 43, 55, 56],
[06, 17, 27, 32, 42, 59],
[17, 20, 25, 27, 58, 59],
[05, 06, 27, 42, 58, 59],
[05, 17, 25, 39, 46, 59],
[17, 27, 34, 39, 42, 46],
[11, 15, 30, 43, 55, 56],
[05, 17, 27, 32, 46, 59],
[05, 06, 25, 34, 39, 42],
[05, 25, 32, 34, 39, 59],
[11, 15, 24, 30, 49, 56],
[03, 12, 36, 38, 51, 53],
[15, 24, 35, 37, 49, 56],
[20, 25, 34, 39, 42, 46],
[05, 06, 20, 39, 42, 46],
[11, 15, 26, 35, 37, 56],
[17, 25, 32, 39, 42, 46],
[06, 34, 39, 42, 46, 58],
[05, 20, 32, 34, 58, 59],
[05, 17, 27, 32, 39, 42],
[20, 27, 32, 34, 46, 59],
[15, 26, 30, 35, 49, 56],
[11, 15, 24, 30, 43, 49],
[06, 20, 32, 34, 42, 46],
[06, 20, 25, 39, 46, 59],
[17, 20, 27, 42, 46, 58],
[05, 25, 27, 32, 42, 46],
[05, 20, 25, 34, 46, 58],
[11, 30, 37, 43, 49, 56],
[17, 27, 32, 34, 39, 59],
[06, 20, 25, 32, 42, 58],
[07, 16, 23, 28, 41, 60],
[05, 20, 32, 39, 46, 58],
[20, 25, 32, 34, 42, 59],
[06, 20, 32, 34, 39, 59],
[26, 35, 37, 43, 55, 56],
[06, 17, 27, 34, 42, 58],
[27, 32, 39, 42, 46, 59],
[15, 26, 37, 43, 49, 55],
[05, 20, 25, 32, 39, 59],
[11, 15, 24, 37, 43, 55],
[05, 06, 17, 20, 39, 58],
[06, 17, 25, 32, 34, 46],
[20, 25, 27, 32, 39, 42],
[06, 20, 27, 39, 42, 59],
[11, 26, 30, 35, 43, 49],
[17, 20, 25, 27, 32, 46],
[02, 13, 21, 29, 47, 48],
[05, 17, 20, 27, 39, 46],
[04, 09, 19, 33, 40, 52],
[11, 24, 30, 49, 55, 56],
[06, 17, 20, 32, 46, 59],
[05, 06, 17, 25, 46, 58],
[32, 34, 39, 46, 58, 59],
[11, 15, 24, 26, 35, 43],
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
