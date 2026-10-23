// Jogos previamente cadastrados
const participantes = [
  { nome: "Elder Thiago" },
  { nome: "Elder Thiago" },
  { nome: "Yasmim Pantoja" },
  { nome: "Romulo Rocha" },
  { nome: "Romulo Rocha" },
  { nome: "Mayco Dias" },
  { nome: "Cicero Lopes" },
  { nome: "Saulo Aguiar" }, 
  { nome: "Saulo Aguiar" }, 
  { nome: "Ney Barros" },
  { nome: "Lelis Aguiar" },
  { nome: "Antonio Oliveira" }, 
  { nome: "Antonio Oliveira" }, 
  { nome: "Antonio Oliveira" }, 
  { nome: "Marcus Né" }, 
  { nome: "Jorzinaldo Correa" },
  { nome: "Jorzinaldo Correa" },
  { nome: "Claudia Albuquerque" }, 
  { nome: "Rafaella Nascimento" },
  { nome: "Rafaella Nascimento" },
  { nome: "Ronaldo Souza" },
  { nome: "Ronaldo Souza" },
  { nome: "Ronaldo Souza" },
  { nome: "Ronaldo Souza" },
  { nome: "Carolina Costa" },
  { nome: "Edriel Chagas" }, 
  { nome: "Wanderson Pamplona" }, 
  { nome: "Fabricio Pereira" }, 
  { nome: "Jedson Cardoso" },
  { nome: "Jedson Cardoso" },
  { nome: "Gilson Clê"},
  { nome: "Wanderson Brito" },
  { nome: "Wanderson Brito" },
  { nome: "Roberto Mendes" },
  { nome: "Gustavo Christino" },
  { nome: "André Melo" },
  { nome: "Thiago Melo" }, 
  { nome: "Diego Felix" },
  { nome: "Ilailson Rocha" },
  { nome: "Ilailson Rocha" },
  { nome: "Hary Daniel" }, 
  { nome: "Hary Daniel" }, 
  { nome: "Hary Daniel" }, 
  { nome: "Maria Sousa" }, 
  { nome: "Rennan Brito" },
  // { nome: "Ivanildo Tavares" },
  // { nome: "Claudio Padilha" },
  // { nome: "Benaldo Lima" },
  // { nome: "Wander Melo" },
  // { nome: "Romero Santana" },
  // { nome: "Paulo Victor" }, 
  // { nome: "Marcus Né" },
  // { nome: "Suely Aguiar" }, 
  // { nome: "Raimundo Aguiar" }, 
  // { nome: "Sara Aguiar" },
  // { nome: "Reginaldo Sales" },  
  // { nome: "Maia Batista" },
  // { nome: "Marcia Santos" }, 
  // { nome: "Wesley Souza" },
  // { nome: "João Ricardo" }, 
  // { nome: "Marcos Almeida" },
  //  { nome: "Frank Sampaio" }, 
  // { nome: "Fabiano Paz" },
  // { nome: "Kelly Gomes" }, 
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
// [01, 05, 09, 17, 31, 35],
// [01, 11, 45, 50, 54, 56],
// [01, 13, 16, 19, 35, 38],
// [01, 25, 35, 43, 50, 54],
// [02, 04, 17, 25, 31, 38],
// [02, 04, 33, 37, 39, 53],
// [02, 10, 25, 38, 50, 51],
// [02, 17, 30, 36, 51, 56],
// [03, 14, 15, 21, 23, 26],
// [03, 14, 15, 21, 24, 34],
// [03, 14, 15, 21, 32, 46],
// [03, 14, 15, 21, 34, 49],
// [03, 14, 15, 24, 32, 42],
// [03, 14, 21, 42, 46, 49],
// [03, 14, 23, 24, 26, 49],
// [03, 14, 23, 26, 34, 42],
// [03, 14, 23, 32, 46, 49],
// [03, 14, 24, 26, 32, 46],
// [03, 14, 32, 34, 42, 46],
// [03, 15, 21, 32, 34, 42],
// [03, 15, 23, 24, 42, 46],
// [03, 15, 23, 32, 34, 49],
// [03, 15, 24, 26, 32, 42],
// [03, 15, 24, 34, 42, 49],
// [03, 15, 26, 34, 46, 49],
// [03, 21, 23, 24, 34, 46],
// [03, 21, 23, 32, 42, 49],
// [03, 21, 24, 26, 32, 34],
// [03, 21, 24, 26, 42, 49],
// [03, 21, 24, 26, 46, 49],
// [03, 23, 24, 32, 34, 49],
// [03, 23, 26, 32, 42, 46],
// [03, 24, 26, 32, 34, 49],
// [04, 06, 25, 33, 45, 60],
// [04, 19, 43, 54, 55, 58],
// [05, 10, 13, 22, 33, 55],
// [05, 10, 37, 50, 55, 57],
// [06, 22, 39, 40, 53, 60],
// [06, 27, 36, 39, 58, 60],
// [07, 12, 18, 20, 28, 44],
// [07, 12, 18, 20, 29, 41],
// [07, 12, 18, 41, 47, 59],
// [07, 12, 20, 29, 44, 59],
// [07, 12, 20, 41, 44, 47],
// [07, 12, 28, 29, 41, 47],
// [07, 12, 28, 41, 44, 59],
// [07, 18, 20, 29, 47, 59],
// [07, 18, 28, 29, 41, 44],
// [07, 18, 28, 44, 47, 59],
// [07, 20, 28, 29, 41, 59],
// [07, 20, 28, 29, 44, 47],
// [08, 09, 16, 19, 35, 57],
// [08, 11, 27, 48, 52, 54],
// [08, 22, 33, 37, 39, 53],
// [09, 31, 43, 51, 52, 58],
// [11, 16, 27, 40, 45, 56],
// [12, 18, 20, 28, 29, 47],
// [12, 18, 20, 28, 41, 59],
// [12, 18, 20, 44, 47, 59],
// [12, 18, 29, 41, 44, 59],
// [12, 28, 29, 44, 47, 59],
// [13, 30, 36, 48, 52, 57],
// [14, 15, 21, 23, 24, 49],
// [14, 15, 21, 23, 42, 46],
// [14, 15, 21, 26, 34, 42],
// [14, 15, 21, 34, 42, 46],
// [14, 15, 23, 24, 26, 46],
// [14, 15, 23, 32, 34, 46],
// [14, 15, 26, 32, 42, 49],
// [14, 15, 32, 42, 46, 49],
// [14, 21, 23, 24, 32, 42],
// [14, 21, 23, 34, 42, 49],
// [14, 21, 24, 26, 42, 46],
// [14, 21, 26, 32, 34, 49],
// [14, 23, 24, 26, 32, 34],
// [14, 23, 24, 32, 46, 49],
// [14, 23, 24, 34, 42, 49],
// [14, 24, 26, 34, 46, 49],
// [15, 21, 23, 32, 34, 42],
// [15, 21, 24, 26, 32, 46],
// [15, 21, 24, 26, 42, 49],
// [15, 21, 24, 32, 46, 49],
// [15, 21, 24, 34, 46, 49],
// [15, 23, 24, 26, 32, 34],
// [15, 23, 26, 42, 46, 49],
// [18, 20, 29, 41, 44, 47],
// [18, 28, 29, 41, 47, 59],
// [20, 28, 41, 44, 47, 59],
// [21, 23, 24, 26, 34, 42],
// [21, 23, 26, 32, 46, 49],
// [21, 26, 32, 34, 42, 46],
// [23, 26, 34, 42, 46, 49],
// [24, 32, 34, 42, 46, 49],
// [30, 37, 40, 43, 48, 53],
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
