import { useState } from "react";
import TableView from "./TableView";

export default function Idoso({ data }) {
  const [busca, setBusca] = useState("");
  const [status, setStatus] = useState("");
  const [hospital, setHospital] = useState("");

  // 🔥 FILTRO SEGURO (não quebra mais)
  const filtrado = data.filter(item => {
    const nome = (item.nome || "").toLowerCase();
    const st = item.status || "";
    const hosp = item.hospital || "";

    return (
      nome.includes(busca.toLowerCase()) &&
      (status === "" || st === status) &&
      (hospital === "" || hosp === hospital)
    );
  });

  // 🔥 LISTAS ÚNICAS
  const hospitais = [...new Set(data.map(i => i.hospital).filter(Boolean))];
  const statusList = [...new Set(data.map(i => i.status).filter(Boolean))];

  const columns = [
    { key: "nome", label: "Nome" },
    { key: "idade", label: "Idade" },
    { key: "hospital", label: "Hospital" },
    { key: "dependencia", label: "Grau" },
    { key: "servico", label: "Serviço" },
    { key: "status", label: "Status" },
    { key: "observacao", label: "Observação" }
  ];

  return (
    <section>
      <h2 className="section-title">Pessoa Idosa</h2>

      {/* 🔥 FILTROS BONITOS */}
      <div className="filtros">
        <div className="campo">
          <label>Buscar</label>
          <input
            placeholder="Digite o nome..."
            value={busca}
            onChange={e => setBusca(e.target.value)}
          />
        </div>

        <div className="campo">
          <label>Status</label>
          <select onChange={e => setStatus(e.target.value)}>
            <option value="">Todos</option>
            {statusList.map((s, i) => (
              <option key={i}>{s}</option>
            ))}
          </select>
        </div>

        <div className="campo">
          <label>Hospital</label>
          <select onChange={e => setHospital(e.target.value)}>
            <option value="">Todos</option>
            {hospitais.map((h, i) => (
              <option key={i}>{h}</option>
            ))}
          </select>
        </div>
      </div>

      {/* 📊 CARD */}
      <div className="cards">
        <div className="card">
          <div className="label">Total</div>
          <div className="value">{filtrado.length}</div>
        </div>
      </div>

      {/* 📋 TABELA */}
      <TableView columns={columns} rows={filtrado} />
    </section>
  );
}