import './projectcard.css';
import debateNowImg from './../img/debatenow.png';
import github from './../img/github.svg';
function ProjectCard() {
  return (
    <div className="project-card">
      <img src={debateNowImg} alt="DebateNOW website home page"/>
      <div className="card-container">
        <div className="left-column">

        </div>
        <div className="right-column">
          <a style={{ height: '24px' }}href="https://github.com/info340a-w20/project-kpdebate">
            <img className="social-media" src={github} alt="Github logo" />
          </a>
          <a 
            className="btn-action"
            target="_blank"
            href="https://info340a-w20.github.io/project-kpdebate/">
              Go to website
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;