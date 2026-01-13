import { db } from "./firebase.js";

import {
  collection,
  doc,
  getDocs,
  addDoc,
  runTransaction,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const SEU_WHATSAPP = "5591981623605";

const numerosContainer = document.getElementById("numeros");
const contadorEl = document.getElementById("contador");
const btnReservar = document.getElementById("btnReservar");
const form = document.getElementById("formReserva");

let selecionados = [];

// ==========================
// CARREGAR NÚMEROS
// ==========================
async function carregarNumeros() {
  numerosContainer.innerHTML = "";

  const snap = await getDocs(collection(db, "numeros"));

  snap.forEach((docSnap) => {
    const data = docSnap.data();

    const btn = document.createElement("button");
    btn.textContent = data.numero;
    btn.className = "numero";
    btn.disabled = data.status !== "disponivel";

    if (selecionados.includes(data.numero)) {
      btn.classList.add("ativo");
    }

    btn.onclick = () => toggleNumero(data.numero, btn);
    numerosContainer.appendChild(btn);
  });
}

carregarNumeros();

// ==========================
// SELEÇÃO
// ==========================
function toggleNumero(numero, btn) {
  if (selecionados.includes(numero)) {
    selecionados = selecionados.filter(n => n !== numero);
    btn.classList.remove("ativo");
  } else {
    selecionados.push(numero);
    btn.classList.add("ativo");
  }

  atualizarUI();
}

function atualizarUI() {
  contadorEl.textContent = selecionados.length;

  btnReservar.disabled =
    selecionados.length === 0 ||
    selecionados.length % 5 !== 0;
}

// ==========================
// ENVIO
// ==========================
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = form.nome.value.trim();
  const whatsapp = form.whatsapp.value.trim();

  const quantidadeCotas = selecionados.length / 5;

  try {
    const reservaRef = await addDoc(collection(db, "reservas"), {
      nome,
      whatsapp,
      numeros: selecionados,
      quantidadeCotas,
      status: "reservado",
      criadoEm: serverTimestamp()
    });

    const reservaId = reservaRef.id;

    for (const numero of selecionados) {
      const ref = doc(db, "numeros", numero);

      await runTransaction(db, async (tx) => {
        const snap = await tx.get(ref);
        if (snap.data().status !== "disponivel") {
          throw "Indisponível";
        }

        tx.update(ref, {
          status: "reservado",
          nome,
          whatsapp,
          reservaId,
          reservadoEm: serverTimestamp()
        });
      });
    }

    const mensagem = `
📢 NOVA RESERVA

👤 ${nome}
📞 ${whatsapp}

🎟️ Números:
${selecionados.join(", ")}

📦 Cotas: ${quantidadeCotas}
`;

    window.open(
      `https://wa.me/${SEU_WHATSAPP}?text=${encodeURIComponent(mensagem)}`,
      "_blank"
    );

    selecionados = [];
    form.reset();
    atualizarUI();
    carregarNumeros();

  } catch (err) {
    alert("Erro ao reservar. Tente novamente.");
    console.error(err);
  }
});
