'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Footer from '@/components/Footer';
import './page.css';

const mockLocations = [
  // Berlin (10 locations)
  { id: 1, name: 'Healthlab Berlin Mitte', address: 'Friedrichstraße 123, 10117 Berlin', type: 'Medical Center', city: 'Berlin' },
  { id: 2, name: 'Praxis Dr. Weber', address: 'Kurfürstendamm 45, 10719 Berlin', type: 'Doctor\'s Office', city: 'Berlin' },
  { id: 3, name: 'Apotheke am Alexanderplatz', address: 'Alexanderplatz 7, 10178 Berlin', type: 'Pharmacy', city: 'Berlin' },
  { id: 4, name: 'Sportmedizin Charlottenburg', address: 'Kantstraße 88, 10627 Berlin', type: 'Sports Medicine', city: 'Berlin' },
  { id: 5, name: 'Vita Apotheke Prenzlauer Berg', address: 'Schönhauser Allee 134, 10437 Berlin', type: 'Pharmacy', city: 'Berlin' },
  { id: 6, name: 'MVZ Berlin Kreuzberg', address: 'Oranienstraße 25, 10999 Berlin', type: 'Medical Center', city: 'Berlin' },
  { id: 7, name: 'Dr. med. Schneider', address: 'Unter den Linden 77, 10117 Berlin', type: 'Doctor\'s Office', city: 'Berlin' },
  { id: 8, name: 'Gesundheitszentrum Steglitz', address: 'Schloßstraße 56, 12165 Berlin', type: 'Health Center', city: 'Berlin' },
  { id: 9, name: 'Labor Berlin', address: 'Invalidenstraße 103, 10115 Berlin', type: 'Lab', city: 'Berlin' },
  { id: 10, name: 'Stern Apotheke Neukölln', address: 'Karl-Marx-Straße 92, 12043 Berlin', type: 'Pharmacy', city: 'Berlin' },
  
  // Munich (10 locations)
  { id: 11, name: 'Medizinicum München', address: 'Maximilianstraße 35, 80539 München', type: 'Medical Center', city: 'München' },
  { id: 12, name: 'Praxis Dr. Huber', address: 'Leopoldstraße 77, 80802 München', type: 'Doctor\'s Office', city: 'München' },
  { id: 13, name: 'Bavaria Apotheke', address: 'Marienplatz 8, 80331 München', type: 'Pharmacy', city: 'München' },
  { id: 14, name: 'Sportorthopädie München', address: 'Nymphenburger Straße 124, 80636 München', type: 'Sports Medicine', city: 'München' },
  { id: 15, name: 'Schwabinger Apotheke', address: 'Hohenzollernstraße 45, 80801 München', type: 'Pharmacy', city: 'München' },
  { id: 16, name: 'MVZ Bogenhausen', address: 'Prinzregentenstraße 89, 81675 München', type: 'Medical Center', city: 'München' },
  { id: 17, name: 'Dr. med. Bauer', address: 'Sendlinger Straße 23, 80331 München', type: 'Doctor\'s Office', city: 'München' },
  { id: 18, name: 'Diagnostikzentrum München', address: 'Karlsplatz 11, 80335 München', type: 'Lab', city: 'München' },
  { id: 19, name: 'Isartor Apotheke', address: 'Tal 19, 80331 München', type: 'Pharmacy', city: 'München' },
  { id: 20, name: 'Gesundheitshaus Pasing', address: 'Landsberger Straße 492, 81241 München', type: 'Health Center', city: 'München' },
  
  // Hamburg (8 locations)
  { id: 21, name: 'Eppendorfer Gesundheitszentrum', address: 'Eppendorfer Baum 35, 20249 Hamburg', type: 'Medical Center', city: 'Hamburg' },
  { id: 22, name: 'Praxis Dr. Hansen', address: 'Jungfernstieg 38, 20354 Hamburg', type: 'Doctor\'s Office', city: 'Hamburg' },
  { id: 23, name: 'Elbe Apotheke', address: 'Große Elbstraße 145, 22767 Hamburg', type: 'Pharmacy', city: 'Hamburg' },
  { id: 24, name: 'Sportmedizin Alster', address: 'Alsterarkaden 20, 20354 Hamburg', type: 'Sports Medicine', city: 'Hamburg' },
  { id: 25, name: 'Roland Apotheke', address: 'Mönckebergstraße 31, 20095 Hamburg', type: 'Pharmacy', city: 'Hamburg' },
  { id: 26, name: 'MVZ Altona', address: 'Große Bergstraße 220, 22767 Hamburg', type: 'Medical Center', city: 'Hamburg' },
  { id: 27, name: 'Labor Hamburg Nord', address: 'Winterhuder Weg 29, 22085 Hamburg', type: 'Lab', city: 'Hamburg' },
  { id: 28, name: 'Hafencity Apotheke', address: 'Am Sandtorkai 46, 20457 Hamburg', type: 'Pharmacy', city: 'Hamburg' },
  
  // Frankfurt (8 locations)
  { id: 29, name: 'Sportmedizin Frankfurt', address: 'Mainzer Landstraße 89, 60329 Frankfurt', type: 'Sports Medicine', city: 'Frankfurt' },
  { id: 30, name: 'Vital Apotheke Zeil', address: 'Zeil 112, 60313 Frankfurt', type: 'Pharmacy', city: 'Frankfurt' },
  { id: 31, name: 'MVZ Sachsenhausen', address: 'Schweizer Straße 54, 60594 Frankfurt', type: 'Medical Center', city: 'Frankfurt' },
  { id: 32, name: 'Praxis Dr. Müller', address: 'Kaiserstraße 55, 60329 Frankfurt', type: 'Doctor\'s Office', city: 'Frankfurt' },
  { id: 33, name: 'Römer Apotheke', address: 'Römerberg 12, 60311 Frankfurt', type: 'Pharmacy', city: 'Frankfurt' },
  { id: 34, name: 'Gesundheitszentrum Westend', address: 'Bockenheimer Landstraße 101, 60325 Frankfurt', type: 'Health Center', city: 'Frankfurt' },
  { id: 35, name: 'Labor Frankfurt', address: 'Theodor-Heuss-Allee 108, 60486 Frankfurt', type: 'Lab', city: 'Frankfurt' },
  { id: 36, name: 'Bornheim Apotheke', address: 'Berger Straße 178, 60385 Frankfurt', type: 'Pharmacy', city: 'Frankfurt' },
  
  // Cologne (6 locations)
  { id: 37, name: 'Dom Apotheke', address: 'Hohe Straße 52, 50667 Köln', type: 'Pharmacy', city: 'Köln' },
  { id: 38, name: 'MVZ Köln Zentrum', address: 'Schildergasse 99, 50667 Köln', type: 'Medical Center', city: 'Köln' },
  { id: 39, name: 'Praxis Dr. Schmidt', address: 'Ehrenstraße 33, 50672 Köln', type: 'Doctor\'s Office', city: 'Köln' },
  { id: 40, name: 'Sportmedizin Köln', address: 'Aachener Straße 328, 50933 Köln', type: 'Sports Medicine', city: 'Köln' },
  { id: 41, name: 'Rhein Apotheke', address: 'Deutzer Freiheit 72, 50679 Köln', type: 'Pharmacy', city: 'Köln' },
  { id: 42, name: 'Gesundheitshaus Ehrenfeld', address: 'Venloer Straße 389, 50825 Köln', type: 'Health Center', city: 'Köln' },
  
  // Düsseldorf (5 locations)
  { id: 43, name: 'Königsallee Apotheke', address: 'Königsallee 60, 40212 Düsseldorf', type: 'Pharmacy', city: 'Düsseldorf' },
  { id: 44, name: 'MVZ Düsseldorf', address: 'Schadowstraße 86, 40212 Düsseldorf', type: 'Medical Center', city: 'Düsseldorf' },
  { id: 45, name: 'Praxis Dr. Klein', address: 'Graf-Adolf-Straße 41, 40210 Düsseldorf', type: 'Doctor\'s Office', city: 'Düsseldorf' },
  { id: 46, name: 'Labor Düsseldorf', address: 'Friedrichstraße 67, 40217 Düsseldorf', type: 'Lab', city: 'Düsseldorf' },
  { id: 47, name: 'Altstadt Apotheke', address: 'Bolkerstraße 22, 40213 Düsseldorf', type: 'Pharmacy', city: 'Düsseldorf' },
  
  // Stuttgart (5 locations)
  { id: 48, name: 'Schloss Apotheke', address: 'Königstraße 28, 70173 Stuttgart', type: 'Pharmacy', city: 'Stuttgart' },
  { id: 49, name: 'MVZ Stuttgart Mitte', address: 'Schulstraße 5, 70173 Stuttgart', type: 'Medical Center', city: 'Stuttgart' },
  { id: 50, name: 'Praxis Dr. Braun', address: 'Calwer Straße 15, 70173 Stuttgart', type: 'Doctor\'s Office', city: 'Stuttgart' },
  { id: 51, name: 'Sportmedizin Stuttgart', address: 'Mercedesstraße 87, 70372 Stuttgart', type: 'Sports Medicine', city: 'Stuttgart' },
  { id: 52, name: 'Labor Stuttgart', address: 'Heilbronner Straße 150, 70191 Stuttgart', type: 'Lab', city: 'Stuttgart' },
  
  // Leipzig (4 locations)
  { id: 53, name: 'Augustusplatz Apotheke', address: 'Augustusplatz 9, 04109 Leipzig', type: 'Pharmacy', city: 'Leipzig' },
  { id: 54, name: 'MVZ Leipzig', address: 'Petersstraße 44, 04109 Leipzig', type: 'Medical Center', city: 'Leipzig' },
  { id: 55, name: 'Praxis Dr. Richter', address: 'Grimmaische Straße 25, 04109 Leipzig', type: 'Doctor\'s Office', city: 'Leipzig' },
  { id: 56, name: 'Gesundheitszentrum Plagwitz', address: 'Karl-Heine-Straße 89, 04229 Leipzig', type: 'Health Center', city: 'Leipzig' },
  
  // Dresden (4 locations)
  { id: 57, name: 'Altmarkt Apotheke', address: 'Altmarkt 10, 01067 Dresden', type: 'Pharmacy', city: 'Dresden' },
  { id: 58, name: 'MVZ Dresden Neustadt', address: 'Königstraße 15, 01097 Dresden', type: 'Medical Center', city: 'Dresden' },
  { id: 59, name: 'Praxis Dr. Wolf', address: 'Prager Straße 8, 01069 Dresden', type: 'Doctor\'s Office', city: 'Dresden' },
  { id: 60, name: 'Labor Dresden', address: 'Fetscherstraße 74, 01307 Dresden', type: 'Lab', city: 'Dresden' },
  
  // Hanover (3 locations)
  { id: 61, name: 'Ernst-August Apotheke', address: 'Bahnhofstraße 5, 30159 Hannover', type: 'Pharmacy', city: 'Hannover' },
  { id: 62, name: 'MVZ Hannover', address: 'Georgstraße 36, 30159 Hannover', type: 'Medical Center', city: 'Hannover' },
  { id: 63, name: 'Praxis Dr. Krause', address: 'Karmarschstraße 44, 30159 Hannover', type: 'Doctor\'s Office', city: 'Hannover' },
  
  // Nuremberg (3 locations)
  { id: 64, name: 'Lorenz Apotheke', address: 'Königstraße 77, 90402 Nürnberg', type: 'Pharmacy', city: 'Nürnberg' },
  { id: 65, name: 'MVZ Nürnberg', address: 'Breite Gasse 52, 90402 Nürnberg', type: 'Medical Center', city: 'Nürnberg' },
  { id: 66, name: 'Sportmedizin Nürnberg', address: 'Äußere Bayreuther Straße 98, 90491 Nürnberg', type: 'Sports Medicine', city: 'Nürnberg' },
  
  // Other cities (9 locations)
  { id: 67, name: 'Bremer Apotheke', address: 'Obernstraße 33, 28195 Bremen', type: 'Pharmacy', city: 'Bremen' },
  { id: 68, name: 'MVZ Bremen', address: 'Sögestraße 48, 28195 Bremen', type: 'Medical Center', city: 'Bremen' },
  { id: 69, name: 'Rathaus Apotheke Essen', address: 'Kettwiger Straße 2, 45127 Essen', type: 'Pharmacy', city: 'Essen' },
  { id: 70, name: 'MVZ Dortmund', address: 'Westenhellweg 66, 44137 Dortmund', type: 'Medical Center', city: 'Dortmund' },
  { id: 71, name: 'Münster Apotheke', address: 'Prinzipalmarkt 22, 48143 Münster', type: 'Pharmacy', city: 'Münster' },
  { id: 72, name: 'Praxis Dr. Fischer Bonn', address: 'Maximilianstraße 28, 53111 Bonn', type: 'Doctor\'s Office', city: 'Bonn' },
  { id: 73, name: 'Heidelberg Apotheke', address: 'Hauptstraße 90, 69117 Heidelberg', type: 'Pharmacy', city: 'Heidelberg' },
  { id: 74, name: 'MVZ Freiburg', address: 'Kaiser-Joseph-Straße 167, 79098 Freiburg', type: 'Medical Center', city: 'Freiburg' },
  { id: 75, name: 'Mannheimer Gesundheitszentrum', address: 'Planken O4, 68161 Mannheim', type: 'Health Center', city: 'Mannheim' },
];

export default function LocationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(10);
  const observerTarget = useRef<HTMLDivElement>(null);

  const filteredLocations = mockLocations.filter(
    (loc) =>
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const visibleLocations = filteredLocations.slice(0, visibleCount);
  const hasMore = visibleCount < filteredLocations.length;

  // Reset visible count when search changes
  useEffect(() => {
    setVisibleCount(10);
  }, [searchQuery]);

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setVisibleCount((prev) => Math.min(prev + 10, filteredLocations.length));
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [hasMore, filteredLocations.length]);

  // Generate more map markers (30 markers with random positions)
  const mapMarkers = useMemo(() => {
    const markers = [];
    for (let i = 0; i < 30; i++) {
      markers.push({
        top: `${Math.random() * 60 + 20}%`,
        left: `${Math.random() * 60 + 20}%`,
      });
    }
    return markers;
  }, []);

  return (
    <main className="locations-page">
      <section className="locations-hero">
        <div className="locations-hero__container">
          <h1 className="locations-hero__title">Find a Location near you</h1>
        </div>
      </section>

      <section className="locations-content">
        <div className="locations-content__container">
          {/* Search Bar */}
          <div className="locations-search">
            <input
              type="text"
              className="locations-search__input"
              placeholder="Search by city, address, or location name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="locations-search__button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
          </div>

          {/* Map Mock */}
          <div className="locations-map">
            <div className="locations-map__mock">
              <div className="locations-map__overlay">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Interactive map coming soon</span>
              </div>
              {/* Mock map markers */}
              {mapMarkers.map((marker, index) => (
                <div
                  key={index}
                  className="locations-map__marker"
                  style={{ top: marker.top, left: marker.left }}
                />
              ))}
            </div>
          </div>

          {/* Location List */}
          <div className="locations-list">
            <h2 className="locations-list__title">
              {filteredLocations.length} Location{filteredLocations.length !== 1 ? 's' : ''} found
            </h2>
            <div className="locations-list__items">
              {visibleLocations.map((location) => (
                <div
                  key={location.id}
                  className={`locations-list__item ${selectedLocation === location.id ? 'locations-list__item--selected' : ''}`}
                  onClick={() => setSelectedLocation(location.id)}
                >
                  <div className="locations-list__item-info">
                    <h3 className="locations-list__item-name">{location.name}</h3>
                    <p className="locations-list__item-address">{location.address}</p>
                    <span className="locations-list__item-type">{location.type}</span>
                  </div>
                  <div className="locations-list__item-city">
                    {location.city}
                  </div>
                </div>
              ))}
              {hasMore && (
                <div ref={observerTarget} className="locations-list__loader">
                  <span>Loading more locations...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer
        logo="Lab1"
        tagline="Personalized nutrition for the body you have, not the one you're supposed to want."
        columns={[
          {
            title: 'Explore',
            links: [
              { label: 'Essential', href: '/products/essential' },
              { label: 'Core', href: '/products/core' },
              { label: 'How it works', href: '/how-it-works' },
            ],
          },
          {
            title: 'Learn',
            links: [
              { label: 'About Lab1', href: '/about' },
              { label: 'Science', href: '/science' },
              { label: 'FAQ', href: '/faq' },
            ],
          },
          {
            title: 'Connect',
            links: [
              { label: 'Contact', href: '/contact' },
              { label: 'Locations', href: '/locations' },
            ],
          },
        ]}
        copyright="© 2025 Lab1. All rights reserved."
        legalLinks={[
          { label: 'Privacy Policy', href: '/privacy' },
          { label: 'Terms of Service', href: '/terms' },
        ]}
      />
    </main>
  );
}


