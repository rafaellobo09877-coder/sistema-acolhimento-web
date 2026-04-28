import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Dashboard({ des, idoso, crianca, vagas }) {
  const totalDes = des.length;
  const totalIdoso = idoso.length;
  const totalCrianca = crianca.length;
  const totalVagas = vagas.length;

  const totalGeral = totalDes + totalIdoso + totalCrianca;

  const cards = [
    ["Demandas Totais", totalGeral],
    ["Desospitalização", totalDes],
    ["Pessoa Idosa", totalIdoso],
    ["Criança/Adolescente", totalCrianca],
    ["Base de Vagas", totalVagas]
  ];

  const barData = {
    labels: ["Desospitalização", "Pessoa Idosa", "Criança/Adolescente", "Unidades/Vagas"],
    datasets: [
      {
        label: "Quantidade",
        data: [totalDes, totalIdoso, totalCrianca, totalVagas]
      }
    ]
  };

  const statusData = {
    labels: ["Desospitalização", "Pessoa Idosa", "Criança/Adolescente"],
    datasets: [
      {
        data: [totalDes, totalIdoso, totalCrianca]
      }
    ]
  };

  return (
    <section>
      <div className="header">
        <h1>Dashboard Integrado</h1>
        <p>Monitoramento consolidado das demandas de acolhimento institucional</p>
      </div>

      <div className="cards">
        {cards.map(([label, value]) => (
          <div className="card" key={label}>
            <div className="label">{label}</div>
            <div className="value">{value}</div>
          </div>
        ))}
      </div>

      <div className="grid-2">
        <div className="panel">
          <h3>Distribuição por Base</h3>
          <Bar data={barData} />
        </div>
        <div className="panel">
          <h3>Participação das Bases</h3>
          <Doughnut data={statusData} />
        </div>
      </div>
    </section>
  );
}
