import express from "express";
import cors from "cors";
import Papa from "papaparse";

const app = express();
app.use(cors());

const PORT = 3001;

// 🔗 LINKS DAS PLANILHAS
const URLS = {
  desospitalizacao: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRjbUiMx_VSBohNRYo_R7G3gMpBjwTpzG1L8Vl69Px1Fo7VRwgmS8NeWbgkC2in4A/pub?output=csv",

  // ✅ IDOSO (COM GID CORRETO)
  idoso: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRom7ZyBxNdDc8OtTpvUE3wsjFTE76f44tC7k1NX8ljrq3Qtr_x8AG8xiHpQJD-Eg/pub?output=csv&gid=531192414",

  crianca: "https://docs.google.com/spreadsheets/d/e/2PACX-1vS1awEYDYxvQINyWYWZM2Um8jwJvKpod3zzrIK8urhOyyUvAndQn8rR7KsFRQ021mwpzKaGx9Ge8tKd/pub?output=csv",

  vagas: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSzQiIabhLBw_QpP42MqurgXzxcJJ8_AGryuZ4osV5XuwDE4GY8p4LbmsQj1CYBDPc-WaUdVgO_XYhY/pub?output=csv"
};

// 🔧 PARSE CSV
function parseCSV(text) {
  const result = Papa.parse(text, {
    header: true,
    skipEmptyLines: true
  });
  return result.data;
}

// 🚀 ROTA
app.get("/api/:tipo", async (req, res) => {
  try {
    const { tipo } = req.params;
    const url = URLS[tipo];

    if (!url) {
      return res.status(404).json({ erro: "Tipo inválido" });
    }

    const response = await fetch(url);
    const text = await response.text();

    const data = parseCSV(text);

    // 🔥 IDOSO (SEM DEPENDER DE NOME DE COLUNA)
   if (tipo === "idoso") {

  const tratado = data
    .map(o => {
      const valores = Object.values(o);

      return {
        nome: (valores[0] || "").trim(),
        idade: (valores[1] || "").trim(),
        hospital: (valores[3] || "").trim(),
        dependencia: (valores[4] || "").trim(),
        servico: (valores[5] || "").trim(),
        status: (valores[7] || "").trim(),
        observacao: (valores[8] || "").trim()
      };
    })
    .filter(item =>
      item.nome &&
      item.nome !== "-" &&
      !item.nome.toUpperCase().includes("NOME DO IDOSO") // 🔥 remove de vez
    );

  return res.json(tratado);
}

    // OUTROS
    res.json(data);

  } catch (erro) {
    console.error("Erro:", erro);
    res.status(500).json({ erro: "Erro ao carregar dados" });
  }
});

// 🚀 START
app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
});