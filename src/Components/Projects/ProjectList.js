import './projectlist.css';
import ProjectCard from './ProjectCard.js';
import projects from './projects.js';

/**
 * returns a list of each project. creates one ProjectCard for
 * each object outlined in the `projects` array.
 */
function ProjectList() {
  return (
    <div className="project-list">
      {
        projects.map((project) => 
          <ProjectCard 
            key={project.title}
            title={project.title}
            image={project.image}
            author={project.author}
            url={project.url}
            github={project.github}
            figma={project.figma}
            description={project.description}
          />
        )
      }
    </div>
  );
}

export default ProjectList;