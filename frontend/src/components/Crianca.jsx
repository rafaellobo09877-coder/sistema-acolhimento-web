import TableView from "./TableView";

function mapCrianca(o) {
  return {
    nome: o["NOME COMPLETO"] || "-",
    origem: o["UNIDADE"] || o["ORIGEM"] || "-",
    idade: o["IDADE"] || "-",
    servico: "Acolhimento",
    status: "Demanda",
    observacao: o["DATA DO ACOL."] || o["DATA NASC"] || "-"
  };
}

export default function Crianca({ data }) {
  const rows = data.map(mapCrianca);
  const columns = [
    { key: "nome", label: "Nome" },
    { key: "origem", label: "Origem / Unidade" },
    { key: "idade", label: "Idade" },
    { key: "servico", label: "Serviço" },
    { key: "status", label: "Status" },
    { key: "observacao", label: "Observação" }
  ];

  return (
    <section>
      <h2 className="section-title">Criança e Adolescente</h2>
      <TableView columns={columns} rows={rows} />
    </section>
  );
}
