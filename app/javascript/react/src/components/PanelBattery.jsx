import React, { useState } from "react";
import { readLogFile, extractBatteryData } from "../lib/logProcessorBattery"; // Importe suas funções

const PanelBattery = () => {
  const [data, setData] = useState([]); // Estado para os dados da tabela
  const [error, setError] = useState(""); // Estado para a mensagem de erro
  const [test, setTest] = useState(""); // Estado para a mensagem de erro

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const logData = await readLogFile(file);
    const result = extractBatteryData(logData);

    if (result.status === "error") {
      // Se houver um erro, definir a mensagem de erro
      setError(result.message);
      setData([]); // Limpar os dados existentes
    } else {
      // Caso contrário, atualizar os dados
      setData(result.data);
      setError(""); // Limpar a mensagem de erro
    }
  };


  const callBackend = async () => { //chamar o backend
    await fetch("/trial/info/battery").then(async res => await res.text()).then(res => setTest(res))   //aqui terá o resultado do backend
  }

  return (
    <div>
      <h2>React Table Example</h2>
      <h3>{test}</h3>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={callBackend}>Chama backend</button>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <table>
        <thead>
          <tr>
            <th>Tempo</th>
            <th>Bateria</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.time}</td>
              <td>{row.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PanelBattery;
