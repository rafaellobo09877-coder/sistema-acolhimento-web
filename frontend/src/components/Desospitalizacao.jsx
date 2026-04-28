import TableView from "./TableView";

function mapDes(o) {
  return {
    nome: o["NOME"] || o["NOME DO IDOSO"] || "-",
    origem: o["NOME DO HOSPITAL / UNIDADE"] || "-",
    perfil: o["VAGA SOLICITADA"] || o["GRAU DE DEPENDENCIA"] || "-",
    servico: o["SERVIÇO SOLICITADO"] || o["SERVIÇO SOLICITANTE"] || "-",
    status: o["STATUS"] || o["JUSTIFICATIVA"] || "-",
    observacao: o["OBSERVAÇÃO"] || "-"
  };
}

export default function Desospitalizacao({ data }) {
  const rows = data.map(mapDes);
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
      <h2 className="section-title">Desospitalização</h2>
      <TableView columns={columns} rows={rows} />
    </section>
  );
}
