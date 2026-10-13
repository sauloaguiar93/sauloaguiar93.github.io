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
  // { nome: "Claudio Padilha" },
  // { nome: "Nonata Souza" }, 
  // { nome: "Saulo Aguiar" }, 
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
  [00,00,00,14,46,55],
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
