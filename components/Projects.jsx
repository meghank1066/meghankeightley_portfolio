import { useRouter } from "next/router";
import projects from "../../data/projects";
import Link from "next/link";

export default function ProjectPage() {

  const router = useRouter();

  const { slug } = router.query;

  const project =
    projects.find(
      p => p.slug === slug
    );

  if (!project)
    return <p>Loading...</p>;

  return (

    <div className="projectPage">

      <h1>
        {project.title}
      </h1>

      <img
        src={project.image}
        alt={project.title}
      />

      <p>
        {project.description}
      </p>

    </div>

  );
}