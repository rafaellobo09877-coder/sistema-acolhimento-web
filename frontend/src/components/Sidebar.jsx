export default function Sidebar({ aba, setAba }) {
  const itens = [
    ["geral", "🏠 Geral"],
    ["des", "🏥 Desospitalização"],
    ["idoso", "👴 Pessoa Idosa"],
    ["crianca", "👶 Criança e Adolescente"],
    ["vagas", "🏢 Unidades e Vagas"]
  ];

  return (
    <aside className="sidebar">
      <h2>Sistema de Gestão de Acolhimento</h2>
      <p>Painel integrado com demandas e vagas</p>

      {itens.map(([id, label]) => (
        <button
          key={id}
          className={`menu-btn ${aba === id ? "active" : ""}`}
          onClick={() => setAba(id)}
        >
          {label}
        </button>
      ))}
    </aside>
  );
}
