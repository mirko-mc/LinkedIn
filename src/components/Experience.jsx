import CardExperience from "./CardExperience";

function Experience() {
  const esperienze = [
    {
      role: "sviluppatore fulll-stack",
      company: "Freelancer",
      startDate: "2020",
      endDate: null,
      description:
        "Creazione e revisione di siti web, apps, piattaforme di commercio elettronico",
      area: "da remoto",
    },
    {
      role: "sviluppatore fallito",
      company: "Freelancer",
      startDate: "2023-09-14",
      endDate: "2023-09-15",
      description:
        "sgoiuaogao",
      area: "Tevere",
    },
  ];
  return (
    <>
      <h2>Esperienza</h2>
      {esperienze.map((exp, i) => (
        <CardExperience key={i} exp={exp} />
      ))}
    </>
  );
}
export default Experience;
