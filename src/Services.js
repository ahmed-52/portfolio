import ServiceUi from "./ServicesUI";
import Heading from "./Heading";

export default function Services() {
  const expertiseItems = [
    "Frontend Development",
    "Backend Development",
    "UI/UX Design",
    
  ];

  const toolBoxItems = [
    "Java",
    "Python",
    "JavaScript",
    "SQL",
    "PHP",
    "ReactJS",
    "HTML & CSS",
    "TailwindCSS",
    "GSAP",
  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <div className="space-y-14">
        <ServiceUi
          title="my expertises."
          description="I focus on all things design and web related. With each of my
          services, my goal is to deliver an impactful and elevating
          digital experience for everyone."
          items={expertiseItems}
        />
        <ServiceUi
          title="my digital tool box."
          description="These are my go to tech stack to make any projects happen. I am always eager of learning more about my current stack, and new technologies that could expand my horizons."
          items={toolBoxItems}
        />
      </div>
    </section>
  );
}
