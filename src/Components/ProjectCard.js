import './projectcard.css';

import figmaIcon from './../img/figma.svg';
/**
 * this component represents the container for each project 
 * represented in the project list.
 * @param {string} title - required
 * @param {array} description - required. each paragraph is one string
 * @param {object} image - required. image of the project
 * @param {string} url - required
 * @param {string} github - required
 * @param {string} figma - optional argument
 * @param {string} author - optional argument
 */
function ProjectCard({title, description, image, url, github, figma, author}) {
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
            (paragraph, index) => 
              <p style={{marginBottom: 0}} key={index}>
                {paragraph}
              </p>
          )}
        </div>
        <div className="right-column"> {/* action items like URL and Github */}
        <div className="icons">
          <a 
            target="_blank" 
            href={github}>
            <i className="fab fa-github" />
          </a>
          {figma ? <a 
            target="_blank" 
            href={figma}>
            <img style={{ width: '24px', height: '24px' }}src={figmaIcon}/>
          </a> : null}
        </div>
          
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