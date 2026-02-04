import React, { useState } from "react";
import "./Recomendaciones.css";

type Categoria = {
  min: number;
  max: number;
  category: string;
  color: string;
};

export default function Recomendacion() {
  const IMC_Categoria: Categoria[] = [
    { min: 0, max: 18.5, category: "Bajo peso", color: "#FF6B6B" },
    { min: 18.5, max: 25, category: "Peso normal", color: "#4CAF50" },
    { min: 25, max: 30, category: "Sobrepeso", color: "#FF9800" },
    { min: 30, max: Infinity, category: "Obesidad", color: "#F44336" }
  ];

  const [nombre, setNombre] = useState("");
  const [alturaStr, setAlturaStr] = useState("");
  const [pesoStr, setPesoStr] = useState("");


  const [imc, setImc] = useState<number | null>(null);
  const [categoria, setCategoria] = useState<string>("");
  const [categoriaClass, setCategoriaClass] = useState<string>("");
  const [mensaje, setMensaje] = useState<string>("");

  const [hasCalculated, setHasCalculated] = useState(false);

  const poundsToKg = (lb: number) => lb * 0.45359237;

  const obtenerCategoria = (valorImc: number) =>
    IMC_Categoria.find((c) => valorImc >= c.min && valorImc < c.max) ?? IMC_Categoria[IMC_Categoria.length - 1];

  const generarMensaje = (cat: string) => {
    switch (cat) {
      case "Bajo peso":
        return "Podrías tener bajo peso. Considera una evaluación nutricional para ganar masa corporal de forma saludable.";
      case "Peso normal":
        return "¡Tu peso está en rango normal! Mantén una alimentación balanceada y actividad física regular.";
      case "Sobrepeso":
        return "Tienes sobrepeso. Considera ajustar tu dieta y aumentar la actividad física; consulta con un profesional si lo crees conveniente.";
      case "Obesidad":
        return "Se detecta obesidad. Se recomienda evaluación y seguimiento médico/nutricional para reducir riesgos y planificar un tratamiento.";
      default:
        return "";
    }
  };

  const mapCategoryToClass = (tipo: string) => {
    switch (tipo) {
      case "Bajo peso":
        return "bg-bajo";
      case "Peso normal":
        return "bg-normal";
      case "Sobrepeso":
        return "bg-sobrepeso";
      case "Obesidad":
        return "bg-obesidad";
      default:
        return "";
    }
  };

  function CapturarDatos(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setHasCalculated(true);

    const altura = parseFloat(alturaStr.replace(",", "."));
    const pesoLb = parseFloat(pesoStr.replace(",", "."));

    if (isNaN(altura) || isNaN(pesoLb) || altura <= 0 || pesoLb <= 0) {
      setImc(null);
      setCategoria("");
      setCategoriaClass("");
      setMensaje("Por favor, ingresa los valores");
      return;
    }

    const pesoKg = poundsToKg(pesoLb);
    const valorImc = pesoKg / (altura * altura);
    const imcRedondeado = Math.round(valorImc * 10) / 10;

    const cat = obtenerCategoria(valorImc);

    setImc(imcRedondeado);
    setCategoria(cat.category);
    setCategoriaClass(mapCategoryToClass(cat.category));
    setMensaje(generarMensaje(cat.category));
  }

  return (
    <div className="imc-page">
      <div className="imc-card">
        <form onSubmit={CapturarDatos}>
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <label>Altura en Metros</label>
          <input
            type="text"
            name="altura"
            value={alturaStr}
            onChange={(e) => setAlturaStr(e.target.value)}
          />

          <label>Peso en libras</label>
          <input
            type="text"
            name="peso"
            value={pesoStr}
            onChange={(e) => setPesoStr(e.target.value)}
          />

          <button type="submit">Calcular IMC</button>
        </form>

        <div className="recomendaciones">
          {!hasCalculated ? (
            null
          ) : imc === null ? (
            <p className="error">{mensaje}</p>
          ) : (
            <>
              {nombre && <p className="resultado-nombre">{nombre}</p>}
              <p className="categoria-row">
                Categoria:
                <span className={`categoria-pill ${categoriaClass}`}>{categoria}</span>
              </p>
              <p className="imc-valor">IMC: {imc}</p>
              <p className="mensaje">{mensaje}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
