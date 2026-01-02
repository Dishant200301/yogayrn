import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHeroSection from '@/components/about/AboutHeroSection';
import AboutContentSection from '@/components/about/AboutContentSection';
import ValuesSection from '@/components/about/ValuesSection';
import TeamSection from '@/components/about/TeamSection';
import TestimonialsSection from '@/components/about/TestimonialsSection';
import FAQSection from '@/components/about/FAQSection';
import StudiosSection from '@/components/about/StudiosSection';
import AboutInstagramSection from '@/components/about/AboutInstagramSection';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Yogayrn - Our Story & Team</title>
        <meta
          name="description"
          content="Learn about Yogayrn's mission, values, and passionate team of yoga instructors. We believe yoga is for everybody."
        />
      </Helmet>


      <main>
        <AboutHeroSection />
        <AboutContentSection />
        <ValuesSection />
        <TeamSection />
        <TestimonialsSection />
        <FAQSection />
        <StudiosSection />
        <AboutInstagramSection />
      </main>

    </>
  );
};

export default About;
