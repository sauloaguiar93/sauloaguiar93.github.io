// Jogos previamente cadastrados
const participantes = [
  { nome: "Elder Thiago" },
  { nome: "Elder Thiago" },
  { nome: "Rafaella Nascimento" },
  { nome: "Rafaella Nascimento" },
  { nome: "Fabricio Pereira" }, 
  { nome: "Jedson Cardoso" },
  { nome: "Jedson Cardoso" },
  { nome: "Claudia Albuquerque" }, 
  { nome: "Antonio Oliveira" }, 
  { nome: "Antonio Oliveira" }, 
  { nome: "Ney Barros" },
  { nome: "Jorzinaldo Correa" },
  { nome: "Jorzinaldo Correa" },
  //  { nome: "Frank Sampaio" }, 
  //  { nome: "Frank Sampaio" }, 
  //  { nome: "Frank Sampaio" }, 
  //  { nome: "Frank Sampaio" }, 
  //  { nome: "Frank Sampaio" }, 
  //  { nome: "Rennan Brito" }, 
  //  { nome: "Mayco Dias" },
  //  { nome: "Thiago Melo" }, 
  // { nome: "Fabiano Paz" },
  // { nome: "Wanderson Brito" },
  // { nome: "Romero Santana" },
  // { nome: "Ilailson Rocha" },
  // { nome: "Ilailson Rocha" },
  // { nome: "Marcos Almeida" },
  // { nome: "Carolina Costa" },
  // { nome: "Yasmim Pantoja" },
  // { nome: "Diego Felix" },
  // { nome: "Wanderson Pamplona" }, 
  // { nome: "Suely Aguiar" }, 
  // { nome: "Raimundo Aguiar" }, 
  // { nome: "Maia Batista" },
  // { nome: "Ivanildo Tavares" },
  // { nome: "Edriel Chagas" }, 
  // { nome: "Gilson Clê"},
  // { nome: "Wander Melo" },
  // { nome: "Hary Daniel" }, 
  // { nome: "Hary Daniel" }, 
  // { nome: "Hary Daniel" }, 
  // { nome: "Saulo Aguiar" }, 
  // { nome: "Saulo Aguiar" }, 
  // { nome: "Marcia Santos" }, 
  // { nome: "Marcus Né" },
  // { nome: "Kelly Gomes" }, 
  // { nome: "Ronaldo Souza" },
  // { nome: "Ronaldo Souza" },
  // { nome: "Ronaldo Souza" },
  // { nome: "Ronaldo Souza" },
  // { nome: "Sara Aguiar" },
  // { nome: "Lelis Aguiar" },
  // { nome: "Antonio Oliveira" }, 
  // { nome: "Paulo Victor" }, 
  // { nome: "Roberto Mendes" },
  // { nome: "Gustavo Christino" },
  // { nome: "Reginaldo Sales" },
  // { nome: "Claudio Padilha" },
  // { nome: "Naldo Souza" }, 
  // { nome: "Romulo Kleber" }, 
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
   // [01, 03, 09, 31, 46, 51],
   // [01, 09, 18, 24, 31, 46],
   // [02, 13, 15, 16, 34, 41],
   // [02, 17, 25, 26, 34, 38],
   // [03, 26, 29, 44, 57, 59],
   // [04, 06, 08, 19, 23, 32],
   // [04, 06, 08, 19, 30, 35],
   // [04, 06, 08, 19, 33, 49],
   // [04, 06, 08, 19, 35, 53],
   // [04, 06, 08, 30, 33, 42],
   // [04, 06, 19, 42, 49, 53],
   // [04, 06, 23, 30, 32, 53],
   // [04, 06, 23, 32, 35, 42],
   // [04, 06, 23, 33, 49, 53],
   // [04, 06, 30, 32, 33, 49],
   // [04, 06, 33, 35, 42, 49],
   // [04, 08, 19, 33, 35, 42],
   // [04, 08, 23, 30, 42, 49],
   // [04, 08, 23, 33, 35, 53],
   // [04, 08, 30, 32, 33, 42],
   // [04, 08, 30, 35, 42, 53],
   // [04, 08, 32, 35, 49, 53],
   // [04, 19, 23, 30, 35, 49],
   // [04, 19, 23, 33, 42, 53],
   // [04, 19, 30, 32, 33, 35],
   // [04, 19, 30, 32, 42, 53],
   // [04, 19, 30, 32, 49, 53],
   // [04, 23, 30, 33, 35, 53],
   // [04, 23, 32, 33, 42, 49],
   // [04, 30, 32, 33, 35, 53],
   // [05, 10, 11, 27, 36, 39],
   // [05, 10, 11, 28, 39, 40],
   // [05, 10, 11, 28, 40, 56],
   // [05, 10, 11, 37, 39, 43],
   // [05, 10, 27, 28, 36, 43],
   // [05, 10, 27, 36, 37, 56],
   // [05, 10, 27, 40, 43, 56],
   // [05, 10, 28, 37, 40, 43],
   // [05, 10, 28, 39, 43, 56],
   // [05, 10, 36, 37, 39, 40],
   // [05, 11, 27, 28, 36, 56],
   // [05, 11, 27, 37, 40, 43],
   // [05, 11, 27, 39, 43, 56],
   // [05, 11, 28, 36, 37, 40],
   // [05, 11, 28, 40, 43, 56],
   // [05, 11, 36, 37, 43, 56],
   // [05, 27, 28, 36, 39, 40],
   // [05, 27, 28, 37, 39, 43],
   // [05, 28, 37, 39, 40, 56],
   // [05, 36, 39, 40, 43, 56],
   // [06, 08, 19, 23, 30, 53],
   // [06, 08, 19, 23, 42, 49],
   // [06, 08, 19, 32, 35, 42],
   // [06, 08, 19, 35, 42, 49],
   // [06, 08, 23, 30, 32, 49],
   // [06, 08, 23, 33, 35, 49],
   // [06, 08, 32, 33, 42, 53],
   // [06, 08, 33, 42, 49, 53],
   // [06, 19, 23, 30, 33, 42],
   // [06, 19, 23, 35, 42, 53],
   // [06, 19, 30, 32, 42, 49],
   // [06, 19, 32, 33, 35, 53],
   // [06, 23, 30, 32, 33, 35],
   // [06, 23, 30, 33, 49, 53],
   // [06, 23, 30, 35, 42, 53],
   // [06, 30, 32, 35, 49, 53],
   // [07, 14, 41, 45, 52, 54],
   // [07, 22, 45, 50, 52, 54],
   // [08, 19, 23, 33, 35, 42],
   // [08, 19, 30, 32, 33, 49],
   // [08, 19, 30, 32, 42, 53],
   // [08, 19, 30, 33, 49, 53],
   // [08, 19, 30, 35, 49, 53],
   // [08, 23, 30, 32, 33, 35],
   // [08, 23, 32, 42, 49, 53],
   // [10, 11, 27, 28, 37, 56],
   // [10, 11, 27, 36, 40, 43],
   // [10, 11, 28, 36, 37, 39],
   // [10, 11, 28, 37, 43, 56],
   // [10, 11, 36, 37, 40, 56],
   // [10, 11, 36, 39, 40, 56],
   // [10, 27, 28, 36, 40, 56],
   // [10, 27, 28, 39, 43, 56],
   // [10, 27, 37, 39, 40, 43],
   // [10, 36, 37, 39, 43, 56],
   // [11, 27, 28, 36, 37, 40],
   // [11, 27, 28, 39, 40, 43],
   // [11, 27, 37, 39, 40, 56],
   // [11, 28, 36, 39, 43, 56],
   // [12, 14, 21, 51, 55, 60],
   // [12, 18, 44, 47, 50, 57],
   // [13, 15, 20, 29, 48, 60],
   // [16, 21, 22, 24, 55, 58],
   // [19, 23, 30, 32, 35, 42],
   // [19, 23, 32, 33, 49, 53],
   // [19, 32, 33, 35, 42, 49],
   // [23, 32, 35, 42, 49, 53],
   // [27, 36, 37, 39, 43, 56],
   // [28, 36, 37, 40, 43, 56],
   // [30, 33, 35, 42, 49, 53],
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
