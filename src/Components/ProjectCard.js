import './projectcard.css';

/**
 * this component represents the container for each project 
 * represented in the project list.
 * @param {string} title - required
 * @param {array} description - required. each paragraph is one string
 * @param {object} image - required. image of the project
 * @param {string} author - optional argument
 * @param {string} url - optional argument
 * @param {string} github - optional argument
 */
function ProjectCard({title, description, image, author, url, github}) {
  return (
    <div className="project-card">
      <a 
        target="_blank" 
        href={url}>
        <img 
          className="card-img" 
          src={image} 
          alt="DebateNOW website home page" />
      </a>


      <div className="card-description">
        <div className="left-column"> {/* project title, author, and desc */}
          <h3>{title}</h3>
          {author ? <p className="author">{author}</p> : null }
          {description.map(
            (paragraph) => <p style={{marginBottom: 0}}>{paragraph}</p>
          )}
        </div>
        <div className="right-column"> {/* action items like URL and Github */}
          <a 
            target="_blank" 
            href={github}>
            <i className="fab fa-github" />
          </a>
          <a 
            className="btn-action"
            target="_blank"
            href={url}>
              Go to website
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;