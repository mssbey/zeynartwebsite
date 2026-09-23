import { Hero } from '@/components/sections/hero';
import { TechnologyStrip } from '@/components/sections/technology-strip';
import { Services } from '@/components/sections/services';
import { Projects } from '@/components/sections/projects';
import { Sectors } from '@/components/sections/sectors';
import { AISection } from '@/components/sections/ai';
import { Process } from '@/components/sections/process';
import { Technology } from '@/components/sections/technology';
import { About } from '@/components/sections/about';
import { Blog } from '@/components/sections/blog';
import { CTA } from '@/components/sections/cta';
export default function Home() {
  return (
    <>
      <Hero />
      <TechnologyStrip />
      <Services />
      <Sectors />
      <Projects />
      <AISection />
      <Process />
      <Technology />
      <About />
      <Blog />
      <CTA />
    </>
  );
}
