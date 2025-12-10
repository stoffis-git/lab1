import HeroSplit from '@/components/HeroSplit';
import StatGridSection from '@/components/StatGridSection';
import TextSection from '@/components/TextSection';
import ThreeColumnGrid from '@/components/ThreeColumnGrid';
import AnnasStory from '@/components/AnnasStory';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import ProjectScaleGrid from '@/components/ProjectScaleGrid';
import './page.css';

// Import images - Update these paths to match your actual image files
// Option 1: If images are in public folder, use: '/Lab1-image-hero-eyes.png'
// Option 2: If importing from images folder, use the import statements below
// For now, using public folder approach (move images from /images to /public)

export default function Home() {
  return (
    <main>
      {/* Section 01: Hero */}
      <HeroSplit
        headline={['WE DESIGN', 'THE BIOLOGY', 'OF YOU.']}
        subtext="Improve health, energy, well-being and performance. Personalized on your DNA and blood-markers."
        ctaText="Listen to your body"
        ctaHref="/how-it-works"
        image="/Lab1-image-hero-eyes.png"
        imageAlt="Abstract human figure representing personalized biology"
      />

      {/* Section 02: The Numbers */}
      <StatGridSection
        headline="AT LAB1,"
        subtext="We believe personalized nutrition is more than just supplements — it's about creating formulas that optimize, function precisely, and reflect the biology of the person taking them."
        stats={[
          {
            number: "85%+",
            text: "optimization level on Precision Path. This is what your biology can do when it's given exactly what it needs.",
          },
          {
            number: "30",
            text: "genetic markers we test to understand how your body processes nutrients.",
          },
          {
            number: "45",
            text: "biomarkers we track quarterly to see what's improving and what's emerging.",
          },
          {
            number: "",
            text: "",
            isHighlighted: true,
          },
        ]}
        image="/Lab1-image-core_clean.png"
        imageAlt="Natural elements representing personalized biology"
        ctaText="Learn more"
        ctaHref="/how-it-works"
      />

      {/* Section 03: Project Scale */}
      <section className="find-us-section">
        <h2 className="find-us-headline">FIND US HERE</h2>
      </section>
      <ProjectScaleGrid
        tiles={[
          {
            image: '/Lab1-image-testing.jpg',
            imageAlt: 'Testing locations and practitioners',
            number: '01',
            title: 'TESTING LOCATIONS',
            description: '',
          },
          {
            image: '/Lab1-image-media.jpg',
            imageAlt: 'Research and media content',
            number: '02',
            title: 'RESEARCH & MEDIA',
            description: '',
          },
          {
            image: '/Lab1-image-community.jpg',
            imageAlt: 'Events and community',
            number: '03',
            title: 'EVENTS & COMMUNITY',
            description: '',
            comingSoon: true,
          },
        ]}
      />

      {/* Section 04: The Mirror */}
      <ThreeColumnGrid
        columns={[
          {
            quote: "I wake up tired. Coffee doesn't work anymore. I thought this was just being 35.",
            answer: "FATIGUE ISN'T MORAL FAILURE. It's ferritin at 18 ng/mL."
          },
          {
            quote: "I forget words mid-sentence. I lose focus by 2pm. Everyone says it's stress.",
            answer: "BRAIN FOG ISN'T WEAKNESS. It's your cells starving for what they need."
          },
          {
            quote: "I do everything right—eat well, exercise, sleep. But I still don't feel... good.",
            answer: "WELLNESS ISN'T ENOUGH. Optimization requires precision."
          }
        ]}
        className="mirror-section--green"
      />




      {/* Section 07: The Proof - Anna's Story */}
      <AnnasStory />


      {/* Section 10: Footer */}
      <Footer
        logo="Lab1"
        tagline="Personalized nutrition for the body you have, not the one you're supposed to want."
        columns={[
          {
            title: 'Explore',
            links: [
              { label: 'Essential', href: '/get-started?path=essential' },
              { label: 'Core', href: '/get-started?path=precision' },
              { label: 'How it works', href: '/how-it-works' }
            ]
          },
          {
            title: 'Learn',
            links: [
              { label: 'About Lab1', href: '/about' },
              { label: 'Science', href: '/science' },
              { label: 'FAQ', href: '/faq' }
            ]
          },
          {
            title: 'Connect',
            links: [
              { label: 'Contact', href: '/contact' }
            ]
          }
        ]}
        copyright="© 2025 Lab1. All rights reserved."
        legalLinks={[
          { label: 'Privacy Policy', href: '/privacy' },
          { label: 'Terms of Service', href: '/terms' }
        ]}
      />
    </main>
  );
}
