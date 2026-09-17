// Jogos previamente cadastrados
const participantes = [
  { nome: "Hilton Pinheiro" }, 
  { nome: "Saulo Aguiar" }, 
  { nome: "Rafaella Nasciment" },
  { nome: "Kelly Gomes" }, 
  { nome: "Thiago Melo" }, 
  { nome: "Frank Sampaio" }, 
  { nome: "Hary Daniel" }, 
  { nome: "Manoel Neto" }, 
  { nome: "Marcia Santos" }, 
  { nome: "Antonio Oliveira" }, 
  { nome: "Wander Melo" }, 
  { nome: "Suely Aguiar" }, 
  { nome: "Raimundo Aguiar" }, 
  { nome: "Rennan Brito" }, 
  { nome: "Ilailson Rocha", },
  { nome: "Ney Barros" },
  { nome: "EdBruno Silva" },
  { nome: "Marcus Né" },
  { nome: "Marcus Né" },
  { nome: "Marcus Né" },
  { nome: "Marcus Né" },
  { nome: "Sara Aguiar" },
  { nome: "Humberto Almeida" },
  { nome: "Humberto Almeida", meiaCota: true },
  { nome: "Jorzinaldo Correa" },
  { nome: "Wanderson Brito" },
  { nome: "Reginaldo Sales" },
  { nome: "Sergio Bittencourt" },
  { nome: "Lelis Aguiar" },
  { nome: "Carolina Costa" },
  { nome: "Claudio Padilha" },
  { nome: "Diego Felix" },
  { nome: "Ronaldo Souza" },
  { nome: "Ronaldo Souza" },
  { nome: "Brenda Moraes" },
  { nome: "Maia Batista" },
  { nome: "Romero Santana" },
  { nome: "José Pinage" },
  { nome: "Ledson Aguiar" },
  { nome: "Everton Luiz" },
  { nome: "Jedson Cardoso" },
  { nome: "Jedson Cardoso", meiaCota: true },
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
  [01,04,12,14,46,55],
  [17,24,28,38,44,53],
  [05,06,28,44,53,56],
  [05,06,34,38,41,56],
  [13,16,23,30,35,37],
  [06,27,28,38,44,56],
  [05,06,17,24,27,44],
  [10,23,30,35,36,37],
  [10,30,32,33,35,36],
  [13,23,32,33,37,42],
  [16,23,29,32,35,42],
  [05,17,24,28,38,56],
  [06,24,27,28,34,38],
  [13,16,33,35,36,37],
  [10,13,16,23,29,36],
  [10,23,29,33,35,37],
  [17,27,34,38,44,53],
  [10,13,23,32,35,36],
  [23,29,33,35,36,42],
  [06,17,24,34,38,44],
  [05,17,24,34,41,53],
  [17,24,27,28,38,41],
  [16,23,32,35,36,42],
  [05,06,17,38,41,56],
  [17,27,28,41,53,56],
  [23,29,30,32,36,37],
  [12,19,22,26,46,52],
  [06,17,27,28,34,41],
  [09,11,14,18,54,57],
  [05,06,24,28,44,53],
  [05,27,34,38,41,53],
  [24,27,38,41,44,56],
  [05,06,24,34,41,44],
  [10,29,32,33,35,37],
  [06,17,24,28,41,53],
  [07,08,20,21,40,51],
  [03,43,45,50,55,58],
  [05,24,38,44,53,56],
  [02,11,21,40,43,57],
  [13,29,32,35,36,37],
  [10,13,23,29,35,42],
  [23,30,35,36,37,42],
  [13,16,23,29,37,42],
  [13,23,30,35,36,42],
  [01,04,39,47,49,59],
  [13,29,30,33,36,42],
  [06,27,34,41,44,53],
  [07,08,20,22,39,60],
  [03,09,15,31,49,52],
  [05,17,41,44,53,56],
  [05,27,34,44,53,56],
  [06,17,38,41,44,53],
  [05,24,28,41,44,53],
  [10,23,29,30,32,42],
  [10,29,33,36,37,42],
  [06,17,27,28,38,41],
  [05,06,24,27,41,56],
  [05,17,27,28,41,44],
  [05,28,34,38,41,44],
  [18,26,45,47,48,58],
  [17,27,34,38,44,56],
  [16,23,30,32,33,35],
  [10,13,16,29,32,42],
  [13,16,29,30,32,35],
  [24,28,41,44,53,56],
  [16,30,32,33,37,42],
  [05,06,27,28,38,53],
  [10,13,16,30,32,37],
  [16,23,29,30,33,35],
  [06,17,24,27,53,56],
  [06,17,28,34,44,56],
  [17,24,34,41,44,56],
  [05,17,27,34,38,53],
  [05,06,28,41,53,56],
  [06,24,28,41,44,56],
  [10,29,32,36,37,42],
  [16,29,32,33,36,37],
  [10,23,33,36,37,42],
  [05,06,17,27,34,56],
  [10,16,29,30,35,36],
  [19,25,50,51,54,59],
  [10,16,23,30,33,42],
  [13,23,29,30,32,33],
  [10,13,30,35,37,42],
  [10,16,35,36,37,42],
  [16,29,32,33,36,42],
  [24,27,28,34,44,53],
  [28,34,38,41,53,56],
  [05,24,27,38,41,53],
  [10,13,29,30,33,37],
  [10,16,23,32,35,37],
  [10,13,30,36,37,42],
  [05,06,17,28,34,53],
  [05,24,27,28,34,56],
  [05,06,24,38,41,44],
  [30,32,33,35,37,42],
  [10,13,16,33,35,42],
  [06,24,34,38,53,56],
  [16,23,30,33,36,37],
  [17,24,28,34,38,41],
  [17,28,34,38,53,56],
  [13,16,23,32,33,36],
  [16,29,30,35,37,42],
  [02,15,25,31,48,60],
  [10,13,32,33,35,42],
  [10,13,23,33,35,36],
  [10,16,29,32,33,37],
  [10,13,23,30,36,37],
  [03,08,43,49,50,51],
  [17,24,27,34,41,56],
  [13,16,30,32,36,42],
  [10,16,23,32,33,36],
  [05,27,38,44,53,56],
  [05,17,24,34,38,44],
  [13,16,29,30,33,35],
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
