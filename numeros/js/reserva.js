import {
  getFirestore,
  doc,
  runTransaction,
  serverTimestamp,
  addDoc,
  collection
} from "./firebase.js";

const db = getFirestore();

export async function reservarNumeros(numeros, nome, whatsapp) {
  const reservaRef = collection(db, "reservas");

  await runTransaction(db, async (tx) => {
    // Verifica todos os números
    for (const num of numeros) {
      const ref = doc(db, "numeros", num);
      const snap = await tx.get(ref);

      if (!snap.exists() || snap.data().status !== "disponivel") {
        throw new Error(`Número ${num} indisponível.`);
      }
    }

    // Cria reserva
    const reservaDoc = await addDoc(reservaRef, {
      nome,
      whatsapp,
      numeros,
      quantidadeCotas: numeros.length / 5,
      status: "reservado",
      criadoEm: serverTimestamp()
    });

    // Atualiza números
    for (const num of numeros) {
      tx.update(doc(db, "numeros", num), {
        status: "reservado",
        reservaId: reservaDoc.id,
        nome,
        whatsapp,
        reservadoEm: serverTimestamp()
      });
    }
  });
}
