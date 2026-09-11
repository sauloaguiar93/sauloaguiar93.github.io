// Jogos previamente cadastrados
const participantes = [
  { nome: "Hilton Pinheiro" }, // Pagamento_Completo_R$95_20
  { nome: "Saulo Aguiar" }, // Pagamento_Completo_R$95_20
  { nome: "Kelly Gomes" }, // Pagamento_Completo_R$95_20
  { nome: "Thiago Melo" }, // Pagamento_Completo_R$95_20
  { nome: "Wanderson Brito" }, // Pagamento_Completo_R$95_20
  { nome: "Frank Sampaio" }, // Pagamento_Completo_R$95_20
  { nome: "Hary Daniel" }, // Pagamento_Completo_R$95_20
  { nome: "Ilailson Rocha", }, // Pagamento_Parcial_R$50
  { nome: "Sara Aguiar" }, // Pagamento_Completo_R$95_20
  { nome: "Antonio Oliveira" }, // Pagamento_Completo_R$95_20
  { nome: "Humberto Almeida" }, // Pagamento_Completo_R$95_20
  { nome: "Humberto Almeida", meiaCota: true }, // Pagamento_Parcial_R$47_60
  { nome: "Jedson Cardoso" }, // Pagamento_Parcial_R$95_20
  { nome: "Jedson Cardoso", meiaCota: true }, // Pagamento_Parcial_R$47_60
  { nome: "Rafaella Nascimento" }, // Pagamento_Completo_R$95_20
  { nome: "Sergio Bittencourt" }, // Pagamento_Completo_R$95_20
  { nome: "Lelis Aguiar" }, // Pagamento_Completo_R$95_20
  { nome: "Carolina Costa" }, // Pagamento_Completo_R$95_20
  { nome: "Claudio Padilha" }, // Pagamento_Completo_R$95_20
  { nome: "Wander Melo" }, // Pagamento_Completo_R$95_20
  { nome: "Diego Felix" }, // Pagamento_Completo_R$95_20
  { nome: "Suely Aguiar" }, // Pagamento_Completo_R$95_20
  { nome: "Raimundo Aguiar" }, // Pagamento_Completo_R$95_20
  { nome: "Marcus Né" }, // Pagamento_Completo_R$95_20
  { nome: "Marcus Né" }, // Pagamento_Completo_R$95_20
  { nome: "Marcus Né" }, // Pagamento_Completo_R$95_20
  { nome: "Ronaldo Souza" }, // Pagamento_Completo_R$95_20
  { nome: "Ronaldo Souza" }, // Pagamento_Completo_R$95_20
  { nome: "Reginaldo Sales" }, // Pagamento_Completo_R$95_20
  { nome: "Ney Barros" }, // Pagamento_Completo_R$95_20
  { nome: "EdBruno Silva" }, // Pagamento_Completo_R$95_20
  { nome: "Jorzinaldo Correa" }, // Pagamento_Completo_R$95_20
  { nome: "Brenda Moraes" }, // Pagamento_Completo_R$95_20
  { nome: "Rennan Brito" }, // Pagamento_Completo_R$95_20
  { nome: "Maia Batista" }, // Pagamento_Completo_R$95_20
  { nome: "Romero Santana" }, // Pagamento_Completo_R$95_20
  { nome: "José Pinage" }, // Pagamento_Completo_R$95_20
  // { nome: "Ivanildo Tavares" }, // Pagamento_Completo_R$95_20
  { nome: "Manoel Neto" }, // Pagamento_Completo_R$95_20
  { nome: "Marcia Santos" }, // Pagamento_Completo_R$95_20
  { nome: "Ledson Aguiar" }, // Pagamento_Completo_R$95_20
  { nome: "Everton Luiz" }, // Pagamento_Completo_R$95_20
  { nome: "Marcus Né" }, // Pagamento_Completo_R$95_20
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
  [03,04,05,06,07,08,12,14,15,16,17,18,19,22,23,24],
  [01,02,05,07,10,11,13,15,16,17,18,19,20,21,22,23],
  [01,02,03,04,06,08,09,10,12,14,16,18,21,22,24,25],
  [01,02,03,04,05,06,07,11,12,13,14,20,21,22,24,25],
  [05,06,07,09,10,11,12,14,15,16,17,18,19,22,23,24],
  [01,02,03,04,05,06,07,11,12,14,15,20,22,23,24,25],
  [01,02,04,06,08,10,12,13,16,17,18,20,21,22,24,25],
  [01,02,08,09,10,11,13,15,16,17,18,19,20,21,22,23],
  [01,02,03,04,06,08,09,10,12,14,17,18,21,22,24,25],
  [03,05,07,08,09,10,11,12,14,15,16,17,18,22,23,24],
  [02,03,06,08,09,10,12,13,14,16,17,18,20,21,22,24],
  [01,02,05,07,08,09,10,11,16,17,18,19,20,21,22,23],
  [01,02,04,06,08,09,12,13,14,16,17,20,21,22,24,25],
  [02,03,05,06,07,11,12,13,14,15,19,20,21,22,23,24],
  [01,02,03,04,06,08,09,10,12,14,16,17,18,21,24,25],
  [01,02,03,09,10,12,13,14,16,17,18,20,21,22,24,25],
  [03,04,05,06,07,08,09,10,12,15,16,18,19,22,23,24],
  [01,02,05,07,08,09,10,11,13,15,16,17,18,19,22,23],
  [05,07,08,09,10,11,13,15,16,17,18,19,20,21,22,23],
  [01,02,03,04,05,06,07,11,12,14,15,19,20,22,24,25],
  [03,04,05,07,11,12,13,14,15,19,20,21,22,23,24,25],
  [01,02,05,07,08,09,10,11,13,16,17,18,20,21,23,25],
  [02,03,04,06,07,11,12,13,14,15,19,20,21,23,24,25],
  [03,04,05,06,07,08,09,10,11,14,16,17,19,22,23,24],
  [04,05,07,08,09,10,11,12,14,15,16,17,18,19,22,23],
  [01,02,03,04,06,08,10,12,13,14,16,17,20,21,22,25],
  [01,02,03,04,05,06,07,11,12,14,19,20,22,23,24,25],
  [01,02,04,05,06,07,11,13,14,15,19,20,21,22,23,25],
  [01,02,05,07,09,10,11,13,15,17,18,19,20,21,23,25],
  [01,02,03,04,05,07,11,12,13,14,15,19,20,21,23,24],
  [01,02,03,04,05,06,07,11,13,15,19,21,22,23,24,25],
  [03,04,05,06,07,08,09,10,11,12,14,17,18,19,23,24],
  [01,02,05,08,09,10,11,13,15,16,17,18,20,21,23,25],
  [03,04,05,09,10,11,12,14,15,16,17,18,19,22,23,24],
  [01,02,03,04,06,09,10,12,13,14,16,17,18,20,22,24],
  [01,02,05,07,08,09,10,11,13,15,17,18,19,20,21,25],
  [04,05,06,08,09,10,11,12,14,15,16,17,18,22,23,24],
  [01,02,05,07,08,09,10,11,13,17,18,19,20,21,23,25],
  [01,02,03,07,11,12,13,14,15,19,20,21,22,23,24,25],
  [01,02,05,07,08,09,10,11,13,15,16,17,20,21,22,23],
  [03,04,06,07,08,10,11,12,15,16,17,18,19,22,23,24],
  [01,03,05,06,07,11,12,13,14,15,19,20,21,23,24,25],
  [03,04,05,06,07,09,10,11,12,14,15,16,17,18,22,23],
  [01,02,04,05,06,07,12,13,14,15,19,21,22,23,24,25],
  [02,03,04,08,09,10,12,13,14,16,17,18,20,22,24,25],
  [01,02,03,04,06,08,13,14,16,17,18,20,21,22,24,25],
  [01,02,03,04,05,06,07,12,13,15,19,20,21,22,23,25],
  [01,02,03,04,06,08,09,12,13,16,17,18,20,21,22,25],
  [03,04,06,07,08,09,10,12,14,15,16,17,18,19,22,24],
  [01,02,05,07,08,09,10,11,13,15,16,18,19,20,21,25],
  [01,03,04,06,07,11,12,13,14,15,19,20,21,22,23,24],
  [01,02,04,06,08,09,10,13,14,16,17,18,20,21,22,25],
  [03,04,05,06,07,08,09,11,12,15,16,17,18,19,22,24],
  [01,02,05,07,08,09,13,15,16,17,18,19,20,21,22,23],
  [03,04,05,06,07,08,09,10,11,14,15,17,19,22,23,24],
  [03,04,06,09,10,12,13,14,16,17,18,20,21,22,24,25],
  [01,02,03,04,05,06,13,14,15,19,20,21,22,23,24,25],
  [01,02,03,04,05,06,11,12,13,14,15,19,21,22,23,25],
  [01,03,06,08,09,10,12,13,14,16,17,18,20,22,24,25],
  [01,02,05,07,08,09,10,11,13,15,18,19,20,21,22,23],
  [03,04,05,06,07,08,10,11,12,14,15,16,18,19,22,24],
  [01,03,04,08,09,10,12,13,14,16,17,18,20,21,22,24],
  [01,02,03,04,06,08,09,10,13,16,17,20,21,22,24,25],
  [01,02,03,04,06,08,09,10,12,13,14,18,20,21,24,25],
  [01,02,05,07,08,09,10,11,13,15,16,17,19,20,23,25],
  [01,02,04,05,06,11,12,13,15,19,20,21,22,23,24,25],
  [03,04,05,06,07,08,09,10,11,14,15,16,17,19,23,24],
  [03,05,06,08,09,10,11,12,14,15,16,17,18,19,22,23],
  [03,04,06,07,08,09,11,12,14,15,16,18,19,22,23,24],
  [02,03,05,07,08,11,12,16,17,18,19,20,21,24,25],
  [01,02,04,06,07,09,10,13,14,16,18,20,21,24,25],
  [01,05,07,08,09,10,13,14,15,16,18,19,21,23,25],
  [01,02,03,07,10,11,13,14,16,18,19,20,21,23,25],
  [01,03,04,06,09,11,12,13,15,17,18,19,20,24,25],
  [02,05,06,07,08,09,12,14,16,17,19,21,23,24,25],
  [02,03,05,08,10,11,12,14,15,16,17,19,21,23,25],
  [01,02,04,05,06,08,09,12,13,14,17,18,20,24,25],
  [02,03,06,08,09,10,11,12,15,16,17,20,21,23,25],
  [03,04,05,06,07,08,11,12,15,16,17,19,23,24,25],
  [01,04,05,06,07,08,09,10,13,15,18,19,21,23,25],
  [01,04,05,07,09,10,11,13,14,18,20,21,23,24,25],
  ];

  function calculateTotal() {
    const amountPerPerson = 95.20;
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
    const validDrawnNumbers = drawnNumbers.filter(num => !isNaN(num) && num > 0 && num <= 25);

    let acertos15 = 0;
    let acertos14 = 0;
    let acertos13 = 0;
    let acertos12 = 0;
    let acertos11 = 0;
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
        case 15:
          acertos15++;
          break;
        case 14:
          acertos14++;
          break;
        case 13:
          acertos13++;
          break;
        case 12:
          acertos12++;
          break;
        case 11:
          acertos11++;
          break;
      }
    });

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
      <div class="results-card">
        <div class="results-title">Resultado da Conferência</div>
        <div class="result-row">
          <span class="result-label">15 acertos</span>
          <span class="result-value ${acertos15 > 0 ? 'highlight' : ''}">${acertos15}</span>
        </div>
        <div class="result-row">
          <span class="result-label">14 acertos</span>
          <span class="result-value ${acertos14 > 0 ? 'highlight' : ''}">${acertos14}</span>
        </div>
        <div class="result-row">
          <span class="result-label">13 acertos</span>
          <span class="result-value ${acertos13 > 0 ? 'highlight' : ''}">${acertos13}</span>
        </div>
        <div class="result-row">
          <span class="result-label">12 acertos</span>
          <span class="result-value ${acertos12 > 0 ? 'highlight' : ''}">${acertos12}</span>
        </div>
        <div class="result-row">
          <span class="result-label">11 acertos</span>
          <span class="result-value ${acertos11 > 0 ? 'highlight' : ''}">${acertos11}</span>
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

window.onload = function() {
    displayGames();
    displayParticipants();
  };
