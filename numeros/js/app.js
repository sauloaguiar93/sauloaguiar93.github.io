import { db } from "./firebase.js";

import {
  collection,
  doc,
  getDocs,
  addDoc,
  runTransaction,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const numerosContainer = document.getElementById("numeros");
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
// SELEÇÃO DE NÚMEROS
// ==========================
function toggleNumero(numero, btn) {
  if (selecionados.includes(numero)) {
    selecionados = selecionados.filter(n => n !== numero);
    btn.classList.remove("ativo");
    return;
  }

  selecionados.push(numero);
  btn.classList.add("ativo");
}

// ==========================
// ENVIO DA RESERVA
// ==========================
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = form.nome.value.trim();
  const whatsapp = form.whatsapp.value.trim();

  if (selecionados.length === 0 || selecionados.length % 5 !== 0) {
    alert("Selecione múltiplos de 5 números.");
    return;
  }

  const quantidadeCotas = selecionados.length / 5;

  try {
    // 1️⃣ Criar documento da reserva
    const reservaRef = await addDoc(collection(db, "reservas"), {
      nome,
      whatsapp,
      numeros: selecionados,
      quantidadeCotas,
      status: "reservado",
      criadoEm: serverTimestamp()
    });

    const reservaId = reservaRef.id;

    // 2️⃣ Reservar cada número com transação
    for (const numero of selecionados) {
      const numeroRef = doc(db, "numeros", numero);

      await runTransaction(db, async (transaction) => {
        const snap = await transaction.get(numeroRef);

        if (!snap.exists()) {
          throw "Número não existe";
        }

        if (snap.data().status !== "disponivel") {
          throw `Número ${numero} indisponível`;
        }

        transaction.update(numeroRef, {
          status: "reservado",
          nome,
          whatsapp,
          reservaId,
          reservadoEm: serverTimestamp()
        });
      });
    }

    alert("Reserva realizada com sucesso! Aguarde confirmação do pagamento.");

    selecionados = [];
    form.reset();
    carregarNumeros();

  } catch (error) {
    console.error(error);
    alert("Erro ao realizar reserva. Tente novamente.");
  }
});
