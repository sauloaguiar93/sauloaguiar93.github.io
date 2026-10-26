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
    // { nome: "Yasmim Pantoja" },
    // { nome: "Romulo Rocha" },
    // { nome: "Romulo Rocha" },
    // { nome: "Gilson Clê"},
    // { nome: "Wanderson Brito" },
    // { nome: "Wanderson Brito" },
    // { nome: "Gustavo Christino" },
    // { nome: "Diego Felix" },
    // { nome: "Hary Daniel" }, 
    // { nome: "Hary Daniel" }, 
    // { nome: "Hary Daniel" }, 
    // { nome: "Frank Sampaio" }, 
    // { nome: "Frank Sampaio" }, 
    // { nome: "Frank Sampaio" }, 
    // { nome: "Frank Sampaio" }, 
    // { nome: "Frank Sampaio" }, 
    // { nome: "Tania Maria" },
    // { nome: "Tania Maria" },
    // { nome: "Marcus Né" },
    // { nome: "Sara Aguiar" },
  // { nome: "Ivanildo Tavares" },
  // { nome: "Benaldo Lima" },
  // { nome: "Wander Melo" },
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
[20, 23, 28, 32, 41, 59],
[03, 20, 34, 41, 56, 59],
[04, 09, 23, 32, 41, 56],
[14, 18, 25, 35, 42, 55],
[03, 09, 13, 20, 23, 32],
[11, 14, 24, 36, 49, 55],
[09, 13, 32, 41, 46, 59],
[04, 13, 23, 34, 41, 59],
[03, 04, 20, 32, 34, 41],
[03, 04, 09, 13, 20, 41],
[16, 30, 31, 38, 48, 60],
[11, 14, 21, 42, 49, 55],
[18, 24, 25, 36, 49, 55],
[03, 04, 09, 20, 28, 34],
[18, 21, 24, 36, 42, 49],
[04, 09, 20, 28, 32, 46],
[03, 04, 09, 13, 23, 59],
[11, 14, 18, 21, 25, 36],
[04, 09, 20, 23, 41, 46],
[09, 23, 32, 34, 41, 46],
[20, 23, 34, 41, 46, 56],
[11, 18, 21, 24, 25, 55],
[04, 09, 13, 20, 23, 34],
[09, 13, 20, 23, 28, 46],
[04, 13, 20, 34, 46, 59],
[04, 13, 20, 28, 41, 56],
[04, 09, 34, 46, 56, 59],
[14, 18, 24, 25, 35, 36],
[11, 24, 35, 36, 42, 55],
[18, 21, 24, 25, 35, 42],
[03, 04, 09, 13, 34, 56],
[14, 21, 35, 36, 42, 49],
[14, 18, 25, 36, 42, 55],
[03, 13, 28, 32, 56, 59],
[03, 20, 23, 28, 41, 46],
[03, 04, 23, 28, 32, 56],
[03, 04, 09, 20, 46, 56],
[03, 04, 13, 34, 41, 46],
[14, 18, 21, 24, 35, 55],
[03, 28, 32, 34, 41, 46],
[04, 13, 28, 32, 41, 46],
[04, 32, 34, 41, 46, 56],
[03, 13, 23, 28, 32, 41],
[03, 13, 41, 46, 56, 59],
[03, 04, 23, 32, 46, 59],
[11, 14, 18, 24, 36, 42],
[03, 09, 13, 23, 34, 46],
[09, 13, 28, 34, 41, 56],
[03, 09, 23, 28, 34, 41],
[04, 09, 23, 28, 41, 59],
[04, 20, 23, 28, 34, 56],
[04, 13, 20, 32, 56, 59],
[03, 09, 23, 28, 56, 59],
[20, 23, 32, 46, 56, 59],
[14, 18, 24, 35, 49, 55],
[14, 18, 21, 25, 42, 49],
[09, 13, 23, 41, 46, 56],
[09, 20, 32, 41, 56, 59],
[11, 18, 24, 25, 35, 42],
[09, 13, 23, 34, 56, 59],
[03, 13, 20, 28, 34, 59],
[11, 18, 21, 36, 49, 55],
[14, 21, 24, 36, 49, 55],
[21, 25, 35, 36, 49, 55],
[03, 09, 32, 41, 46, 56],
[03, 04, 20, 23, 34, 59],
[13, 20, 28, 32, 41, 59],
[03, 09, 23, 28, 46, 59],
[11, 21, 24, 25, 36, 42],
[03, 04, 28, 34, 41, 46],
[05, 07, 10, 15, 26, 37],
[11, 25, 36, 42, 49, 55],
[11, 18, 25, 35, 49, 55],
[09, 13, 20, 32, 34, 56],
[11, 14, 21, 24, 25, 49],
[04, 09, 32, 34, 41, 59],
[03, 04, 23, 41, 56, 59],
[03, 13, 23, 32, 34, 56],
[11, 14, 25, 35, 36, 42],
[13, 20, 23, 28, 34, 41],
[03, 13, 28, 34, 46, 56],
[13, 20, 32, 34, 41, 46],
[03, 20, 28, 32, 46, 56],
[03, 09, 32, 34, 41, 59],
[04, 13, 28, 32, 34, 59],
[11, 21, 24, 35, 36, 49],
[11, 14, 18, 35, 36, 49],
[13, 23, 28, 32, 46, 59],
[13, 23, 28, 32, 41, 56],
[11, 14, 18, 24, 42, 55],
[04, 09, 20, 28, 56, 59],
[14, 21, 24, 25, 42, 55],
[11, 18, 21, 35, 42, 49],
[03, 20, 28, 32, 34, 59],
[04, 09, 13, 28, 46, 59],
[04, 13, 23, 32, 41, 59],
[28, 32, 34, 46, 56, 59],
[04, 13, 23, 28, 46, 56],
[04, 20, 23, 32, 34, 46],
[11, 14, 24, 35, 42, 49],
[03, 04, 09, 13, 28, 32],
[24, 25, 35, 42, 49, 55],
[09, 23, 28, 32, 34, 59],
[03, 13, 20, 32, 46, 56],
[03, 04, 28, 41, 56, 59],
[03, 20, 23, 41, 46, 56],
[04, 20, 28, 41, 46, 59],
[23, 28, 34, 41, 46, 59],
[11, 18, 24, 42, 49, 55],
[03, 09, 20, 34, 46, 59],
[14, 25, 35, 36, 49, 55],
[09, 28, 32, 41, 46, 56],
[09, 13, 20, 23, 56, 59],
[18, 21, 35, 36, 42, 55],
[11, 14, 21, 25, 35, 55],
[09, 20, 28, 34, 41, 46],
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
