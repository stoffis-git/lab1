import './ProjectScaleGrid.css';

interface ProjectScaleTile {
  image: string;
  imageAlt: string;
  number: string;
  title: string;
  description: string;
  comingSoon?: boolean;
}

interface ProjectScaleGridProps {
  tiles: ProjectScaleTile[];
}

export default function ProjectScaleGrid({ tiles }: ProjectScaleGridProps) {
  return (
    <section className="project-scale-grid">
      <div className="project-scale-grid__container">
        {tiles.map((tile, index) => (
          <div key={index} className="project-scale-tile">
            <div className="project-scale-tile__image">
              <img src={tile.image} alt={tile.imageAlt} />
              {tile.comingSoon && (
                <span className="project-scale-tile__coming-soon">COMING SOON</span>
              )}
            </div>
            <div className="project-scale-tile__content">
              <h3 className="project-scale-tile__title">{tile.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

