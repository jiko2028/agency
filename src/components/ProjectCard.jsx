import { Link } from 'react-router-dom';
import './ProjectCard.css';

/**
 * Portfolio project card with hover zoom and title reveal.
 * @param {Object} props
 * @param {Object} props.project - Project data object
 * @param {string} [props.size] - Card size: 'large' | 'medium' | 'small'
 */
export default function ProjectCard({ project, size = 'medium' }) {
  return (
    <Link to={`/works/${project.slug}`} className={`project-card project-card--${size}`} id={`project-${project.slug}`}>
      <div className="project-card__image-wrap">
        <img
          src={project.thumbnail}
          alt={`${project.title} — ${project.subtitle}`}
          className="project-card__image"
          loading="lazy"
        />
      </div>
      <div className="project-card__info">
        <div className="project-card__meta">
          <span className="project-card__category">{project.category}</span>
          <span className="project-card__year">{project.year}</span>
        </div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__subtitle">{project.subtitle}</p>
      </div>
    </Link>
  );
}
