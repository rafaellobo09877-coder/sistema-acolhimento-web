import TableView from "./TableView";

function mapVagas(o) {
  return {
    nome: o["NOME DO IDOSO"] || "-",
    origem: "Sistema",
    perfil: "-",
    servico: "Vaga",
    status: "Disponível",
    observacao: o["OBSERVAÇÃO"] || o["OBSERVACAO"] || "-"
  };
}

export default function Vagas({ data }) {
  const rows = data.map(mapVagas);
  const columns = [
    { key: "nome", label: "Nome" },
    { key: "origem", label: "Origem / Unidade" },
    { key: "perfil", label: "Perfil" },
    { key: "servico", label: "Serviço" },
    { key: "status", label: "Status" },
    { key: "observacao", label: "Observação" }
  ];

  return (
    <section>
      <h2 className="section-title">Unidades e Vagas</h2>
      <TableView columns={columns} rows={rows} />
    </section>
  );
}
