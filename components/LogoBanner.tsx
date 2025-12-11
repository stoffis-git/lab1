import './LogoBanner.css';

interface LogoBannerProps {
  items: string[];
}

export default function LogoBanner({ items }: LogoBannerProps) {
  // Duplicate items multiple times to create seamless loop
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <section className="logo-banner">
      <div className="logo-banner__track">
        {duplicatedItems.map((item, index) => (
          <span key={index} className="logo-banner__item">
            {item}
            <span className="logo-banner__separator">•</span>
          </span>
        ))}
      </div>
    </section>
  );
}




