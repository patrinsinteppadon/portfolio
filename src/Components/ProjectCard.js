import './projectcard.css';
import debateNowImg from './../img/debatenow2.png';

/**
 * author and github are optional arguments.
 */
function ProjectCard({title, author, description}) {
  return (
    <div className="project-card">
      <a 
        target="_blank" 
        href="https://info340a-w20.github.io/project-kpdebate/">
        <img 
          className="card-img" 
          src={debateNowImg} 
          alt="DebateNOW website home page" />
      </a>
      <div className="card-description">
        <div className="left-column">
          <h3>{title}</h3>
          {author ? <p className="author">{author}</p> : null }
            <p style={{ marginBottom: '0px' }}>
              {description}
            </p>
        </div>
        <div className="right-column">
          <a 
            target="_blank" 
            href="https://github.com/info340a-w20/project-kpdebate/tree/master/my-app">
            <i className="fab fa-github" />
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