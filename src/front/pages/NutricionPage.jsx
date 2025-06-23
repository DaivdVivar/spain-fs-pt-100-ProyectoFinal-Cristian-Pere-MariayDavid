import React from "react";
import CardPlan from "../components/CardPlan";
import "../../styles/nutricion.css";

// ✅ Importar imágenes desde assets
import perdidaPesoImg from "../assets/perdidaPeso.webp";
import gananciaMuscularImg from "../assets/gananciaMuscular.jpg";
import saludGeneralImg from "../assets/saludGeneral.jpg";


const NutricionPage = () => {
  const planes = [
    {
      tittle: "Pérdida de Peso",
      img: perdidaPesoImg,
      parrafo:
        "Planes nutricionales hipocalóricos con control de macronutrientes, priorizando saciedad, densidad nutricional y mantenimiento de masa magra.",
    },
    {
      tittle: "Ganancia Muscular",
      img: gananciaMuscularImg,
      parrafo:
        "Protocolos hipercalóricos con alto contenido proteico, tiempos de comida estratégicos y enfoque en anabolismo muscular sostenido.",
    },
    {
      tittle: "Salud General",
      img: saludGeneralImg,
      parrafo:
        "Dieta normocalórica con adecuada distribución de macro y micronutrientes, enfocada en salud digestiva, inmunológica y energética.",
    },
  ];

  return (
    <div className="nutricion-page container mt-5">
      <section className="npHero text-center py-5">
        <h1 className="display-4 tittle">Nutrición Personalizada</h1>
        <p className="lead">Mejora tu salud con planes de alimentación adaptados a tus objetivos.</p>
      </section>



      <section className="planes my-5">
        <h2 className="text-center subtittle mb-4">Nuestros Planes</h2>
        <div className="row">
          {planes.map((p, i) => (
            <div className="col-md-4" key={i}>
              <CardPlan tittle={p.tittle} img={p.img} parrafo={p.parrafo} />
            </div>
          ))}
        </div>
      </section>

      <section className="beneficios my-5">
        <h2 className="text-center subtittle mb-4">¿Por qué elegirnos?</h2>
        <ul className="list-group list-group-flush caja-bot">
          <li className="list-group-item">Asesoramiento profesional</li>
          <li className="list-group-item">
            Ejercicios adaptados a tu metabolismo
          </li>
          <li className="list-group-item">Seguimiento de resultados</li>
        </ul>
      </section>
    </div>
  );
};

export default NutricionPage;
