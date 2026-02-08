
import { useProjects } from "../../hooks/useProjects";

const ProjectsWrapper = () => {
 
  const {projects, loading, error } = useProjects()
 
console.log(projects)
 
  if (loading) return <div>Loading projects...</div>;
  if (error ) return <div>Error: {error instanceof Error ? error.message : error}</div>;
  if (!projects?.length) return <div>No projects found.</div>;

  return (
    <div>
      <h2>Projects ({projects.length})</h2>
      {projects.map((project) => (
        <div key={project._id} style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ccc" }}>
          <h3>{project.name}</h3>
          <p>Location: {project.location}</p>
          <p>Completed: {project.completed ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectsWrapper;
