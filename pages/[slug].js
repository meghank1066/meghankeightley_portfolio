import { useRouter } from "next/router";
import { projects } from "../data/projects";

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className="projectPage">

      <section className="projectHero">

        <img
          src={project.image}
          alt={project.title}
          className="projectImage"
        />

        <div className="projectInfo">

          <h1>{project.title}</h1>

          <p>{project.description}</p>

          <div className="techStack">
            {project.tech?.map((tech) => (
              <span key={tech}>
                {tech}
              </span>
            ))}
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          )}

        </div>

      </section>

    </main>
  );
}