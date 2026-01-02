import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/HeroSection';
import PopularClassesSection from '@/components/PopularClassesSection';
import AboutSection from '@/components/AboutSection';
import VideoSection from '@/components/VideoSection';
import ScheduleSection from '@/components/ScheduleSection';
import ProductsSection from '@/components/ProductsSection';
import CTASection from '@/components/CTASection';
import ArticlesSection from '@/components/ArticlesSection';
import InstagramSection from '@/components/InstagramSection';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Yogayrn - Enhance Your Wellbeing Through Yoga</title>
        <meta
          name="description"
          content="Discover a sanctuary where you can reconnect with your body, calm your mind, and find your inner balance through our yoga classes at Yogayrn."
        />
        <meta
          name="keywords"
          content="yoga, wellness, meditation, hatha yoga, vinyasa yoga, yoga classes, yoga studio, mindfulness"
        />
        <link rel="canonical" href="https://yogayrn.com" />
      </Helmet>

      <div className="min-h-screen">
        <main>
          <HeroSection />
          <PopularClassesSection />
          <AboutSection />
          <VideoSection />
          <ScheduleSection />
          <ProductsSection />
          <CTASection />
          <ArticlesSection />
          <InstagramSection />
        </main>
      </div>
    </>
  );
};

export default Index;
