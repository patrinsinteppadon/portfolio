import './projectlist.css';
import ProjectCard from './ProjectCard.js';

function ProjectList() {
  return (
    <div className="project-list">
      <ProjectCard 
        title="DebateNow" 
        author="Co-authored with Kiran Pradhan"
        // description={
        //   <p>A spontaneous game about debating with your friends according to a real debate tournament format. Players select the topic, and the game guides them through the process.<br/><br/>
        //   More people can join the debate as audience members. The audience can vote on the winner from their own devices.<br/><br/>
        //   Created using ReactJS and Firebase database.</p>
        // }
        description="A spontaneous game about debating with your friends according to a real debate tournament format. Players select the topic, and the game guides them through the process.\n\n
        More people can join the debate as audience members. The audience can vote on the winner from their own devices.\n\n
        Created using ReactJS and Firebase database."
      />
    </div>
  );
}

export default ProjectList;