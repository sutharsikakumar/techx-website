import { Built } from '@/components/Built';
import { Community } from '@/components/Community';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Mission } from '@/components/Mission';
import { Pillars } from '@/components/Pillars';
import { WhereWeWork } from '@/components/WhereWeWork';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        {/* One wrapper so the black + navy glow runs continuously across sections. */}
        <div className="navy-glow home-dark">
          <Mission />
          <Pillars />
          <Community />
          <Built />
          <WhereWeWork />
        </div>
      </main>
      <Footer />
    </>
  );
}
