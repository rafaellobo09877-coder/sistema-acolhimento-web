const API_URL = "http://localhost:3001/api";

export async function carregarBase(tipo) {
  const res = await fetch(`${API_URL}/${tipo}`);
  if (!res.ok) throw new Error(`Erro ao carregar ${tipo}`);
  return res.json();
}
