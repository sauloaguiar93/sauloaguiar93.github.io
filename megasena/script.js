// Jogos previamente cadastrados
const participantes = [
  { nome: "Wanderson Pamplona" }, 
  { nome: "Ney Barros" },
  { nome: "Jedson Cardoso" },
  { nome: "Jedson Cardoso" },
  { nome: "Thiago Melo" }, 
  { nome: "Antonio Oliveira" }, 
  { nome: "Antonio Oliveira" }, 
  { nome: "Antonio Oliveira" }, 
  { nome: "Marcus Né" },
  { nome: "Jorzinaldo Correa" },
  { nome: "Diego Felix" },
  { nome: "Fabricio Pereira" }, 
  { nome: "Paulo Victor" }, 
  { nome: "Lelis Aguiar" },
  { nome: "Roberto Mendes" },
  { nome: "Gustavo Christino" },
  { nome: "Ilailson Rocha" },
  { nome: "Ilailson Rocha" },
  { nome: "Ilailson Rocha" },
  { nome: "Fabiano Paz" },
  { nome: "Yasmim Pantoja" },
  { nome: "Mayco Dias" },
  { nome: "Rafaella Nascimento" },
  { nome: "Rafaella Nascimento" },
  { nome: "Gilson Clê"},
  { nome: "Claudia Albuquerque" }, 
  { nome: "Carolina Costa" },
  { nome: "Ronaldo Souza" },
  { nome: "Ronaldo Souza" },
  { nome: "Kelly Gomes" }, 
  { nome: "Kelly Gomes" }, 
  { nome: "Romero Santana" },
  { nome: "Suely Aguiar" }, 
  { nome: "Raimundo Aguiar" }, 
  { nome: "Wanderson Brito" },
  { nome: "Reginaldo Sales" },
  { nome: "Edriel Chagas" }, 
  { nome: "Marcia Santos" }, 
  { nome: "Sara Aguiar" },
  { nome: "Hary Daniel" }, 
  { nome: "Hary Daniel" }, 
  { nome: "Claudio Padilha" },
  { nome: "Naldo Souza" }, 
  { nome: "Romulo Kleber" }, 
  { nome: "Romulo Kleber" }, 
  { nome: "Nonata Souza" },
  { nome: "Saulo Aguiar" }, 
  { nome: "Saulo Aguiar" }, 
  // { nome: "Saulo Aguiar" }, 
  // { nome: "Saulo Aguiar" }, 
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
  [10,13,17,27,42,43],
[08,11,30,33,38,53],
[13,17,32,35,37,43],
[09,18,19,21,34,59],
[03,28,34,46,52,55],
[10,27,32,37,43,56],
[06,32,35,37,40,56],
[10,17,27,40,42,56],
[10,13,17,27,32,56],
[06,10,13,17,37,43],
[12,19,29,48,57,58],
[04,08,23,36,39,53],
[10,13,17,35,40,42],
[10,32,35,40,43,56],
[02,25,41,47,49,55],
[06,10,32,35,37,43],
[10,17,27,32,37,42],
[13,17,27,37,40,42],
[20,21,24,25,45,47],
[04,11,16,23,30,53],
[27,35,40,42,43,56],
[02,09,26,31,59,60],
[07,14,15,18,41,44],
[04,08,11,16,30,36],
[06,27,35,37,42,43],
[06,17,32,35,43,56],
[08,16,33,36,38,39],
[10,13,27,37,40,43],
[04,11,23,30,33,38],
[08,16,23,36,39,53],
[13,27,32,35,37,40],
[06,17,32,35,42,56],
[08,11,23,33,39,53],
[06,10,13,17,40,56],
[17,35,37,40,42,43],
[04,08,11,23,36,38],
[06,17,27,37,42,56],
[23,30,33,38,39,53],
[10,13,35,37,42,56],
[11,16,33,36,38,53],
[04,11,30,33,39,53],
[08,11,16,23,33,53],
[06,10,27,35,40,42],
[04,08,11,33,36,39],
[13,17,32,37,43,56],
[04,11,16,33,38,39],
[11,16,23,30,33,38],
[04,16,23,33,36,39],
[04,08,23,33,38,39],
[06,10,27,32,35,56],
[06,09,11,19,25,35],
[01,05,22,50,51,54],
[08,16,23,30,38,53],
[04,08,16,38,39,53],
[10,17,32,35,42,43],
[03,12,26,44,46,51],
[08,30,33,36,39,53],
[04,08,16,23,30,39],
[06,17,27,32,40,43],
[04,08,11,23,38,53],
[11,16,23,36,38,39],
[04,11,16,36,39,53],
[13,27,35,42,43,56],
[06,27,32,37,40,56],
[04,30,36,38,39,53],
[08,11,30,36,38,53],
[11,23,30,36,39,53],
[08,11,16,30,38,39],
[04,23,33,36,38,53],
[08,11,23,30,33,36],
[04,08,16,30,33,53],
[10,13,27,32,35,43],
[10,27,32,40,42,56],
[06,10,37,40,42,43],
[06,10,13,17,27,35],
[20,28,45,48,50,58],
[06,13,32,35,37,42],
[17,27,32,35,40,42],
[06,13,27,32,42,43],
[06,13,17,37,40,42],
[06,10,13,17,32,40],
[13,17,32,40,43,56],
[04,16,23,30,36,38],
[06,13,35,40,43,56],
[10,13,17,40,42,43],
[06,10,27,37,43,56],
[04,08,30,33,36,38],
[06,13,32,40,42,56],
[17,27,35,37,43,56],
[06,17,32,35,37,40],
[13,17,32,35,42,56],
[16,30,33,36,39,53],
[32,37,40,42,43,56],
[10,13,37,42,43,56],
[04,11,23,38,39,53],
[06,13,27,37,40,56],
[10,27,32,35,37,40],
[10,17,35,37,40,56],
[06,10,13,32,37,42],
[06,10,17,42,43,56],
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
