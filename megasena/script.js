// Jogos previamente cadastrados
const participantes = [
  { nome: "Hilton Pinheiro" }, // MegaSena
  { nome: "Saulo Aguiar" }, // MegaSena
  { nome: "Kelly Gomes" }, // MegaSena
  { nome: "Thiago Melo" }, // MegaSena
  { nome: "Frank Sampaio" }, // MegaSena
  { nome: "Hary Daniel" }, // MegaSena
  { nome: "Manoel Neto" }, // MegaSena
  { nome: "Marcia Santos" }, // MegaSena
  { nome: "Antonio Oliveira" }, // MegaSena
  { nome: "Wander Melo" }, // MegaSena
  { nome: "Suely Aguiar" }, // MegaSena
  { nome: "Raimundo Aguiar" }, // MegaSena
  { nome: "Rennan Brito" }, // MegaSena
  { nome: "Ilailson Rocha", }, // Pagamento_Parcial_R$50
  { nome: "Sara Aguiar" }, // Pagamento_Completo_R$95_20
  { nome: "Humberto Almeida" }, // Pagamento_Completo_R$95_20
  { nome: "Humberto Almeida", meiaCota: true }, // Pagamento_Parcial_R$47_60
  { nome: "Jedson Cardoso" }, // Pagamento_Parcial_R$95_20
  { nome: "Jedson Cardoso", meiaCota: true }, // Pagamento_Parcial_R$47_60
  { nome: "Rafaella Nascimento" }, // Pagamento_Completo_R$95_20
  { nome: "Sergio Bittencourt" }, // Pagamento_Completo_R$95_20
  { nome: "Lelis Aguiar" }, // Pagamento_Completo_R$95_20
  { nome: "Carolina Costa" }, // Pagamento_Completo_R$95_20
  { nome: "Claudio Padilha" }, // Pagamento_Completo_R$95_20
  { nome: "Diego Felix" }, // Pagamento_Completo_R$95_20
  { nome: "Ronaldo Souza" }, // Pagamento_Completo_R$95_20
  { nome: "Ronaldo Souza" }, // Pagamento_Completo_R$95_20
  { nome: "Reginaldo Sales" }, // Pagamento_Completo_R$95_20
  { nome: "Ney Barros" }, // Pagamento_Completo_R$95_20
  { nome: "EdBruno Silva" }, // Pagamento_Completo_R$95_20
  { nome: "Jorzinaldo Correa" }, // Pagamento_Completo_R$95_20
  { nome: "Brenda Moraes" }, // Pagamento_Completo_R$95_20
  { nome: "Maia Batista" }, // Pagamento_Completo_R$95_20
  { nome: "Romero Santana" }, // Pagamento_Completo_R$95_20
  { nome: "José Pinage" }, // Pagamento_Completo_R$95_20
  { nome: "Ledson Aguiar" }, // Pagamento_Completo_R$95_20
  { nome: "Everton Luiz" }, // Pagamento_Completo_R$95_20
  { nome: "Marcus Né" }, // Pagamento_Completo_R$95_20
  { nome: "Marcus Né" }, // Pagamento_Completo_R$95_20
  { nome: "Marcus Né" }, // Pagamento_Completo_R$95_20
  { nome: "Marcus Né" }, // Pagamento_Completo_R$95_20
  { nome: "Wanderson Brito" }, // Pagamento_Completo_R$95_20
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
  [23,35,39,40,52,60],
  [22,29,36,54,55,58],
  [15,16,24,37,46,56],
  [04,12,33,39,41,44],
  [25,34,35,38,45,59],
  [03,19,31,35,38,46],
  [03,05,13,25,40,51],
  [01,05,39,47,50,57],
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
