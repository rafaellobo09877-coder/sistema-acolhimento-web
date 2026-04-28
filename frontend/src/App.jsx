import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Desospitalizacao from "./components/Desospitalizacao";
import Idoso from "./components/Idoso";
import Crianca from "./components/Crianca";
import Vagas from "./components/Vagas";
import { carregarBase } from "./services/api";

export default function App() {
  const [aba, setAba] = useState("geral");
  const [des, setDes] = useState([]);
  const [idoso, setIdoso] = useState([]);
  const [crianca, setCrianca] = useState([]);
  const [vagas, setVagas] = useState([]);
  const [erro, setErro] = useState("");

  useEffect(() => {
    Promise.all([
      carregarBase("desospitalizacao"),
      carregarBase("idoso"),
      carregarBase("crianca"),
      carregarBase("vagas")
    ])
      .then(([a, b, c, d]) => {
        setDes(a);
        setIdoso(b);
        setCrianca(c);
        setVagas(d);
      })
      .catch((e) => setErro(String(e)));
  }, []);

  return (
    <div className="layout">
      <Sidebar aba={aba} setAba={setAba} />

      <main className="content">
        {erro ? <div className="alert-box">Erro: {erro}</div> : null}

        {aba === "geral" && <Dashboard des={des} idoso={idoso} crianca={crianca} vagas={vagas} />}
        {aba === "des" && <Desospitalizacao data={des} />}
        {aba === "idoso" && <Idoso data={idoso} />}
        {aba === "crianca" && <Crianca data={crianca} />}
        {aba === "vagas" && <Vagas data={vagas} />}
      </main>
    </div>
  );
}
