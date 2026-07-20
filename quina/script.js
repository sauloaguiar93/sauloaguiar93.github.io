// Jogos previamente cadastrados
const participantes = [
    "Frank Sampaio",
    "Hary Daniel",
    "Lelis Aguiar",
    "Thiago Melo",
    "Rennan Brito",
    "Rafaella Nascimento",
    "Ilailson Rocha",
    "Ilailson Rocha",
    "Ronaldo Souza",
    "Ronaldo Souza",
    "Wanderson Pamplona",
    "Sara Aguiar",
    "Saulo Aguiar",
    "Claudio Padilha",
    "Romero Santana",
    "Reginaldo Sales",
    "Gilson Clê",
    "Wander Melo",
    "Jonathan Diego",
    "Roberto Mendes",
    "Waldiney Barros",
    "Carolina Costa",
    "Fabiano Paz",
    "Jedson Cardoso",
    "Suely Aguiar",
    "Raimundo Aguiar",
    "Kelly Gomes",
    "Marcia Santos",
    "Rômulo Rocha",
    "Leandro Pedro",
    "Marcus Ne",
    "Sergio Bittencourt",
  ];

  function displayParticipants() {
    const participantsList = document.getElementById('participantsList');
    participantsList.innerHTML = '';

    participantes.forEach(participante => {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.textContent = participante;
      participantsList.appendChild(li);
    });
  }

const jogos = [
    [02,03,29,31,74],
    [09,30,42,67,77],
    [03,44,45,57,73],
    [29,43,66,68,75],
    [05,42,51,55,70],
    [02,35,36,52,76],
    [30,36,41,50,70],
    [16,20,47,48,61],
    [03,40,42,55,75],
    [05,31,42,65,68],
    [06,25,34,59,66],
    [06,20,54,56,69],
    [11,14,34,44,46],
    [14,43,45,50,60],
    [20,54,64,66,73],
    [02,09,58,63,66],
    [05,06,10,19,49],
    [23,33,47,57,66],
    [10,31,36,51,55],
    [03,07,27,40,43],
    [14,17,53,57,77],
    [22,39,41,43,46],
    [24,40,65,71,75],
    [16,25,38,42,64],
    [16,28,34,71,73],
    [26,43,47,52,67],
    [22,23,68,72,75],
    [07,55,67,68,69],
    [24,32,50,67,68],
    [13,37,53,64,72],
    [02,12,27,30,61],
    [07,22,39,42,44],
    [16,27,43,65,77],
    [13,22,25,49,62],
    [10,33,47,72,75],
    [11,50,53,57,68],
    [02,10,30,47,63],
    [13,35,44,64,66],
    [03,23,27,43,54],
    [02,13,19,22,64],
    [07,10,21,60,62],
    [03,15,31,33,77],
    [08,18,51,71,78],
    [10,13,41,70,73],
    [03,26,38,41,76],
    [09,16,34,51,80],
    [02,17,20,26,40],
    [08,32,56,60,77],
    [15,18,20,25,30],
    [05,17,34,40,60],
    [28,39,45,63,72],
    [25,28,35,64,73],
    [03,42,59,64,76],
    [08,28,39,40,60],
    [22,38,45,66,75],
    [02,20,36,51,71],
    [05,38,63,65,80],
    [04,15,27,43,66],
    [12,52,77,78,80],
    [13,14,26,40,73],
    [02,05,13,15,49],
    [02,07,30,32,55],
    [17,47,60,71,76],
    [37,41,52,59,73],
    [01,03,41,46,48],
    [11,23,27,37,48],
    [05,23,37,72,77],
    [03,06,28,37,55],
    [25,33,34,54,73],
    [02,20,22,50,62],
    [54,60,62,75,79],
    [14,15,63,64,75],
    [01,30,65,71,72],
    [02,55,64,68,78],
    [18,22,25,62,64],
    [06,19,21,50,65],
    [28,52,66,73,79],
    [21,36,44,53,75],
    [07,14,32,38,70],
    [01,42,44,60,75],
    [01,02,07,49,76],
    [03,21,23,24,48],
    [37,60,68,69,78],
    [10,21,38,56,57],
    [20,26,29,48,61],
    [01,02,12,21,67],
    [09,11,21,22,45],
    [02,10,51,53,67],
    [19,25,57,60,62],
    [01,25,29,34,60],
    [03,05,10,43,59],
    [12,36,42,59,76],
    [11,15,16,58,66],
    [12,18,33,57,71],
    [30,59,65,68,72],
    [09,22,57,67,77],
    [12,31,33,52,65],
    [10,26,34,51,64],
    [13,17,32,35,61],
    [10,25,36,47,52],
    [01,05,20,40,80],
    [01,17,33,37,76],
    [20,34,39,70,79],
    [11,26,31,63,70],
    [06,52,71,72,74],
    [05,10,39,70,79],
    [53,57,60,68,80],
    [11,20,27,37,60],
    [03,06,20,38,65],
    [38,49,57,74,75],
    [19,25,30,68,75],
    [07,15,31,52,61],
    [11,20,38,41,69],
    [05,25,35,47,61],
    [17,18,25,58,77],
    [23,33,54,71,76],
    [15,35,43,47,71],
    [15,21,37,47,70],
    [01,02,15,78,80],
    [09,14,28,38,41],
    [06,23,31,67,72],
    [18,21,28,49,53],
    [07,50,56,58,59],
    [19,23,44,58,74],
    [29,36,50,53,55],
    [03,09,45,70,75],
    [16,33,35,47,59],
    [46,47,60,68,77],
    [10,13,38,73,76],
    [03,06,20,27,69],
    [24,25,29,64,70],
    [13,15,43,54,77],
    [20,31,36,60,65],
    [03,25,58,64,66],
    [46,52,64,68,73],
    [04,31,38,66,78],
    [02,30,43,57,64],
    [03,11,24,68,69],
    [40,51,57,58,70],
    [08,24,51,55,66],
    [01,53,54,59,61],
    [11,24,59,60,80],
    [14,15,21,41,66],
    [27,31,32,33,38],
    [12,15,20,44,64],
    [21,37,50,77,79],
    [09,34,39,44,76],
    [29,39,51,55,68],
    [30,33,47,70,72],
    [08,16,43,66,76],
    [26,31,36,47,79],
    [02,30,48,53,56],
    [09,14,16,32,73],
    [23,28,31,53,76],
    [07,25,31,36,69],
    [24,37,39,46,59],
    [01,16,25,52,75],
    [44,59,62,67,70],
    [20,40,49,78,80],
    [10,13,21,46,60],
    [07,19,25,55,59],
    [02,41,43,63,76],
    [10,14,16,26,73],
    [13,21,52,54,58],
    [07,23,58,67,73],
    [01,19,32,48,62],
    [18,23,40,65,77],
    [17,26,44,45,59],
    [02,13,37,38,77],
    [09,12,18,22,33],
    [04,25,29,68,80],
    [13,52,57,77,80],
    [03,15,18,43,72],
    [19,27,52,63,68],
    [06,09,35,57,69],
    [14,16,21,56,80],
    [10,28,40,44,49],
    [02,50,61,62,68],
    [25,38,61,64,80],
    [09,20,49,68,76],
    [21,33,37,59,69],
    [07,11,19,34,52],
    [19,34,36,73,74],
    [10,26,32,46,57],
    [22,48,64,76,79],
    [25,31,51,74,76],
    [04,19,39,59,67],
    [17,28,52,60,66],
    [17,20,27,32,67],
    [09,63,69,72,75],
    [26,44,58,59,71],
    [05,11,24,45,52],
    [15,23,30,31,41],
    [01,09,20,23,47],
    [08,11,21,46,70],
    [30,38,42,58,78],
    [20,27,50,59,73],
    [06,34,44,52,66],
    [36,54,56,61,80],
    [05,07,60,67,73],
    [05,33,42,72,80],
    [14,31,36,49,59],
    [28,29,32,35,73],
    [14,25,37,61,78],
    [20,27,31,59,73],
    [01,02,03,22,41],
    [09,23,55,69,79],
    [05,07,37,39,74],
    [02,05,26,41,53],
    [39,54,56,57,78],
    [09,10,33,48,78],
    [06,29,31,70,74],
    [08,14,24,33,47],
    [08,30,46,48,67],
    [09,16,18,47,66],
    [03,06,23,57,64],
    [01,23,42,49,64],
    [05,14,36,44,53],
    [08,41,60,68,74],
    [12,32,45,63,69],
    [13,41,43,47,54],
    [30,52,58,71,80],
    [47,55,64,74,78],
    [10,21,22,70,74],
    [23,25,35,76,78],
    [05,31,55,57,59],
    [09,12,36,49,75],
    [26,30,31,33,76],
    [10,34,57,59,71],
    [22,33,41,46,75],
    [20,30,36,51,54],
    [31,48,57,59,61],
    [20,36,42,72,79],
    [10,15,29,67,73],
    [15,21,35,53,59],
    [14,15,19,25,43],
    [06,22,35,57,77],
    [08,42,53,61,72],
    [04,23,27,37,65],
    [07,61,63,68,78],
    [27,47,58,67,76],
    [12,35,38,42,56],
    [04,12,35,62,73],
    [05,14,32,49,51],
    [06,30,34,46,55],
    [30,33,38,72,75],
    [28,35,45,66,79],
    [17,18,31,32,55],
    [11,34,36,46,51],
    [14,28,69,74,77],
    [07,21,47,52,70],
    [08,23,33,40,70],
    [02,05,36,38,70],
    [15,19,63,67,68],
    [23,30,39,55,67],
    [05,23,61,64,66],
    [07,59,64,71,73],
    [01,15,45,54,71],
    [16,18,64,66,72],
    [11,23,41,69,78],
    [18,52,53,56,58],
    [22,29,30,39,74],
    [01,11,16,29,34],
    [01,02,31,57,73],
    [01,21,49,52,74],
    [04,20,55,72,73],
    [09,14,56,60,77],
    [04,52,61,72,80],
    [08,18,37,38,77],
    [01,10,24,58,70],
    [08,24,29,47,78],
    [03,51,53,54,76],
    [01,13,18,36,66],
    [01,06,18,57,65],
    [08,30,39,54,70],
    [02,20,24,56,77],
    [29,57,71,76,80],
    [20,24,57,76,77],
    [01,26,30,40,68],
    [03,09,60,61,63],
    [44,48,49,55,70],
    [12,23,57,58,66],
    [03,10,31,48,69],
    [23,24,54,55,75],
    [12,29,33,57,80],
    [09,20,33,55,67],
    [06,09,12,24,76],
    [24,29,31,43,51],
    [24,31,45,49,57],
    [28,42,44,78,79],
    [02,27,49,57,64],
    [09,29,55,56,72],
    [12,34,41,54,56],
    [14,30,39,64,68],
    [02,12,13,49,68],
    [01,39,43,56,75],
    [04,12,22,68,78],
    [12,17,41,50,58],
    [27,37,48,55,56],
    [01,27,45,66,78],
    [11,21,49,51,70],
    [12,27,41,69,77],
    [06,17,39,59,66],
    [38,56,58,70,74],
    [16,26,37,38,43],
    [06,21,50,73,78],
    [02,03,07,30,56],
    [01,48,69,71,74],
    [10,39,44,45,53],
    [13,23,29,41,54],
    [10,19,26,48,58],
    [46,47,48,68,78],
    [01,06,34,39,60],
    [04,34,54,60,71],
    [09,22,34,41,45],
    [22,53,54,58,77],
    [02,07,33,77,78],
    [05,24,59,64,69],
    [19,28,39,45,79],
    [21,24,29,43,69],
  ];

  function calculateTotal() {
    const participantsList = document.querySelectorAll('ol.list-group li');
    const amountPerPerson = 30;
    const totalAmount = participantsList.length * amountPerPerson;

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
    const validDrawnNumbers = drawnNumbers.filter(num => !isNaN(num) && num > 0 && num <= 80);

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

window.onload = function() {
    displayGames();
    displayParticipants();
  };
