// Jogos previamente cadastrados
const participantes = [
  { nome: "Jorzinaldo Correa" },
  { nome: "Jorzinaldo Correa" },
  { nome: "Ivanildo Tavares" },
  { nome: "Mayco Dias" },
  { nome: "Claudio Padilha" },
  { nome: "Antonio Oliveira" }, 
  { nome: "Antonio Oliveira" }, 
  { nome: "Ney Barros" },
  { nome: "Wanderson Brito" },
  { nome: "Wanderson Brito" },
  { nome: "Fabricio Pereira" }, 
  { nome: "Elder Thiago" },
  { nome: "Elder Thiago" },
  { nome: "Diego Felix" },
  { nome: "Ilailson Rocha" },
  { nome: "Ilailson Rocha" },
  { nome: "Lelis Aguiar" },
  { nome: "Thiago Melo" }, 
  { nome: "Marcus Né" }, 
  { nome: "Jedson Cardoso" },
  { nome: "Jedson Cardoso" },
  { nome: "Cicero Lopes" },
  { nome: "Benaldo Lima" },
  { nome: "Wanderson Pamplona" }, 
  { nome: "Rafaella Nascimento" },
  { nome: "Rafaella Nascimento" },
  { nome: "Rennan Brito" },
  { nome: "Wander Melo" },
  { nome: "Romero Santana" },
  { nome: "Edriel Chagas" }, 
  { nome: "Claudia Albuquerque" }, 
  { nome: "Paulo Victor" }, 
  { nome: "Marcus Né" },
  { nome: "Saulo Aguiar" }, 
  { nome: "Saulo Aguiar" }, 
  { nome: "Ronaldo Souza" },
  { nome: "Ronaldo Souza" },
  { nome: "Ronaldo Souza" },
  { nome: "Ronaldo Souza" },
  { nome: "Hary Daniel" }, 
  { nome: "Hary Daniel" }, 
  { nome: "Suely Aguiar" }, 
  { nome: "Raimundo Aguiar" }, 
  { nome: "Sara Aguiar" },
  { nome: "Reginaldo Sales" },  
  { nome: "Maia Batista" },
  
  // { nome: "Wesley Souza" },
  // { nome: "João Ricardo" }, 
  // { nome: "Marcia Santos" }, 
  // { nome: "Gilson Clê"},
  // { nome: "Roberto Mendes" },
  // { nome: "Yasmim Pantoja" },
  // { nome: "Gustavo Christino" },
  // { nome: "Carolina Costa" },
  // { nome: "Carolina Costa" },
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
// [06,16,30,37,39,43],
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
