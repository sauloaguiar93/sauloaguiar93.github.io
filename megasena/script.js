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
  { nome: "Saulo Aguiar" }, 
  { nome: "Saulo Aguiar" }, 
  { nome: "Thiago Melo" }, 
  { nome: "Marcus Né" },
  { nome: "Wanderson Pamplona" }, 
  { nome: "Ronaldo Souza" },
  { nome: "Ronaldo Souza" },
  { nome: "Ronaldo Souza" },
  { nome: "Ronaldo Souza" },
  { nome: "Wesley Souza" },
  { nome: "Wesley Souza" },
  { nome: "Romero Santana" },
  { nome: "João Ricardo" }, 
  { nome: "Diego Felix" },
  { nome: "Marcia Santos" }, 
  { nome: "Lelis Aguiar" },
  { nome: "Suely Aguiar" }, 
  { nome: "Raimundo Aguiar" }, 
  { nome: "Gilson Clê"},
  { nome: "Edriel Chagas" }, 
  { nome: "Marcus Né" },
  { nome: "Ilailson Rocha" },
  { nome: "Ilailson Rocha" },
  { nome: "Roberto Mendes" },
  { nome: "Yasmim Pantoja" },
  { nome: "Gustavo Christino" },
  { nome: "Wanderson Brito" },
  { nome: "Hary Daniel" }, 
  { nome: "Hary Daniel" }, 
  { nome: "Hary Daniel" }, 
  { nome: "Carolina Costa" },
  { nome: "Carolina Costa" },
  { nome: "Marcos Almeida" },
  //  { nome: "Frank Sampaio" }, 
  //  { nome: "Frank Sampaio" }, 
  //  { nome: "Frank Sampaio" }, 
  //  { nome: "Frank Sampaio" }, 
  //  { nome: "Rennan Brito" }, 
  //  { nome: "Mayco Dias" },
  // { nome: "Fabiano Paz" },
  // { nome: "Maia Batista" },
  // { nome: "Ivanildo Tavares" },
  // { nome: "Wander Melo" },
  // { nome: "Kelly Gomes" }, 
  // { nome: "Sara Aguiar" },
  // { nome: "Antonio Oliveira" }, 
  // { nome: "Paulo Victor" }, 
  // { nome: "Roberto Mendes" },
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
[06,16,30,37,39,43],
[27,33,36,38,42,49],
[05,10,35,36,38,42],
[10,24,27,36,38,49],
[05,17,24,35,36,38],
[01,12,19,21,44,46],
[11,16,23,30,39,56],
[05,17,32,36,38,49],
[16,30,37,39,53,56],
[05,24,32,33,35,36],
[10,32,33,36,42,49],
[10,27,32,36,38,49],
[06,11,23,39,43,53],
[10,27,32,33,35,36],
[10,17,24,36,38,42],
[10,17,24,27,32,49],
[10,24,27,32,35,38],
[05,10,17,24,35,42],
[10,17,24,27,38,42],
[06,11,16,23,30,43],
[10,17,33,35,38,49],
[06,11,16,23,37,39],
[06,16,23,37,53,56],
[05,32,33,35,36,49],
[24,27,33,35,42,49],
[05,24,32,33,42,49],
[05,17,32,33,35,38],
[17,24,32,35,42,49],
[04,09,25,28,34,40],
[06,16,30,43,53,56],
[02,08,34,45,54,59],
[03,14,20,47,50,57],
[05,24,27,32,36,42],
[10,27,32,35,42,49],
[24,33,35,36,38,42],
[05,10,32,33,35,42],
[05,10,24,38,42,49],
[05,24,32,33,38,49],
[11,16,23,43,53,56],
[10,24,32,33,38,42],
[05,10,27,32,33,49],
[25,31,40,41,52,55],
[05,27,32,35,36,49],
[04,13,18,22,48,60],
[17,24,32,36,42,49],
[03,07,15,20,48,55],
[06,11,16,39,53,56],
[06,11,30,37,39,53],
[24,27,32,33,36,38],
[05,10,17,24,36,49],
[02,08,14,28,50,58],
[06,23,30,37,43,53],
[10,17,27,32,33,42],
[13,45,51,52,54,57],
[10,17,35,38,42,49],
[07,09,15,26,29,51],
[11,16,23,30,37,53],
[17,24,27,35,36,38],
[06,11,30,39,43,56],
[10,17,27,35,36,42],
[10,17,24,33,36,38],
[05,24,27,35,38,49],
[17,27,32,33,35,36],
[23,30,39,43,53,56],
[05,10,17,32,35,38],
[16,23,37,39,43,53],
[32,35,36,38,42,49],
[06,23,30,37,39,56],
[05,17,27,35,36,49],
[10,24,33,35,36,49],
[11,16,37,39,43,56],
[18,26,41,45,46,51],
[12,21,22,29,44,47],
[05,17,33,36,42,49],
[05,17,27,32,38,42],
[05,27,33,35,38,42],
[05,10,17,24,27,33],
[17,24,32,33,38,49],
[17,27,33,38,42,49],
[11,30,37,43,53,56],
[06,11,23,37,43,56],
[17,24,32,33,35,42],
[05,10,27,35,42,49],
[01,19,31,58,59,60],
[05,10,17,24,32,36],
[05,10,27,33,36,38],
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
