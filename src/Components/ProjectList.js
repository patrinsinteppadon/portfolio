import './projectlist.css';
import ProjectCard from './ProjectCard.js';

import debateNowImg from './../img/debatenow.png';

const projects = [
  {
    title: "DebateNow",
    image: debateNowImg,
    author: "Co-authored with Kiran Pradhan",
    url: "https://info340a-w20.github.io/project-kpdebate/",
    github: "https://github.com/info340a-w20/project-kpdebate/tree/master/my-app",
    description: [
      "A spontaneous game about debating with your friends according to a real debate tournament format. Players select the topic, and the game guides them through the process.",
      "More people can join the debate as audience members. The audience can vote on the winner from their own devices.",
      "Created using ReactJS and Firebase database."
    ]
  }
]

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
            title={project.title}
            image={project.image}
            author={project.author}
            url={project.url}
            github={project.github}
            description={project.description}
          />
        )
      }
    </div>
  );
}

export default ProjectList;