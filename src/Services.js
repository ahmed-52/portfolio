import ServiceUi from "./ServicesUI";

export default function Services() {
  const expertiseItems = [
    "Frontend Development",
    "Backend Development"
    
  ];

  const toolBoxItems = [
    "Java",
    "Python",
    "JavaScript",
    "OCaml",
    "SQL",
    "PHP",
    "ReactJS",
    "Swift",
    "HTML & CSS",
    "TailwindCSS",

  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <div className="space-y-14">
        <ServiceUi
          title="My expertises."
          description="I specialize in Software and Design, leveraging my skills to create innovative solutions and deliver exceptional user experiences."
          items={expertiseItems}
        />
        <ServiceUi
          title="My digital tool box."
          description="These are my go to tech stack to make any projects happen. I am always eager of learning more about my current stack, and new technologies that could expand my horizons."
          items={toolBoxItems}
        />
      </div>
    </section>
  );
}
