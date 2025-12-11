import Link from 'next/link';
import './ProjectScaleGrid.css';

interface ProjectScaleTile {
  image: string;
  imageAlt: string;
  number: string;
  title: string;
  description: string;
  comingSoon?: boolean;
  href?: string;
}

interface ProjectScaleGridProps {
  tiles: ProjectScaleTile[];
}

export default function ProjectScaleGrid({ tiles }: ProjectScaleGridProps) {
  const isExternalLink = (href: string) => href.startsWith('http://') || href.startsWith('https://');

  return (
    <section className="project-scale-grid">
      <div className="project-scale-grid__container">
        {tiles.map((tile, index) => {
          const content = (
            <>
            <div className="project-scale-tile__image">
              <img src={tile.image} alt={tile.imageAlt} />
              {tile.comingSoon && (
                <span className="project-scale-tile__coming-soon">COMING SOON</span>
              )}
            </div>
            <div className="project-scale-tile__content">
              <h3 className="project-scale-tile__title">{tile.title}</h3>
            </div>
            </>
          );

          if (tile.href) {
            return isExternalLink(tile.href) ? (
              <a 
                key={index} 
                className="project-scale-tile" 
                href={tile.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            ) : (
              <Link 
                key={index} 
                className="project-scale-tile" 
                href={tile.href}
              >
                {content}
              </Link>
            );
          }

          return (
            <div key={index} className="project-scale-tile">
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}

