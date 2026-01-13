import {
  getFirestore,
  collection,
  getDocs
} from "./firebase.js";

import { reservarNumeros } from "./reserva.js";

const db = getFirestore();
const grid = document.getElementById("grid");
const selecionados = new Set();

const qtdNumeros = document.getElementById("qtdNumeros");
const qtdCotas = document.getElementById("qtdCotas");
const mensagem = document.getElementById("mensagem");

async function carregarNumeros() {
  const snap = await getDocs(collection(db, "numeros"));

  snap.forEach(docSnap => {
    const data = docSnap.data();
    const div = document.createElement("div");

    div.textContent = data.numero;
    div.classList.add("numero", data.status);
    div.dataset.id = docSnap.id;

    if (data.status === "disponivel") {
      div.onclick = () => toggleNumero(div);
    }

    grid.appendChild(div);
  });
}

function toggleNumero(el) {
  const id = el.dataset.id;

  if (selecionados.has(id)) {
    selecionados.delete(id);
    el.classList.remove("selecionado");
  } else {
    selecionados.add(id);
    el.classList.add("selecionado");
  }

  atualizarInfo();
}

function atualizarInfo() {
  qtdNumeros.textContent = selecionados.size;
  qtdCotas.textContent = Math.floor(selecionados.size / 5);
}

document.getElementById("formReserva").addEventListener("submit", async e => {
  e.preventDefault();
  mensagem.textContent = "";

  if (selecionados.size === 0 || selecionados.size % 5 !== 0) {
    mensagem.textContent = "Selecione múltiplos de 5 números.";
    return;
  }

  const nome = document.getElementById("nome").value.trim();
  const whatsapp = document.getElementById("whatsapp").value.trim();

  if (!nome || !whatsapp) {
    mensagem.textContent = "Preencha nome e WhatsApp.";
    return;
  }

  try {
    await reservarNumeros([...selecionados], nome, whatsapp);
    mensagem.textContent = "Reserva realizada com sucesso!";
    grid.innerHTML = "";
    selecionados.clear();
    atualizarInfo();
    carregarNumeros();
  } catch (err) {
    mensagem.textContent = err.message;
  }
});

carregarNumeros();
