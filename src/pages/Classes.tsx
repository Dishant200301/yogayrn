import { Helmet } from 'react-helmet-async';
import ClassesHero from '@/components/classes/ClassesHero';
import ClassesTypesSection from '@/components/classes/ClassesTypesSection';

const Classes = () => {
    return (
        <>
            <Helmet>
                <title>Yoga Classes - Hatha, Vinyasa, Iyengar & Private Sessions | Yogayrn</title>
                <meta
                    name="description"
                    content="Discover our variety of yoga classes including Hatha, Vinyasa, Iyengar, and private sessions. Classes for all levels designed to nurture your body, mind, and spirit."
                />
            </Helmet>

            <main className="min-h-screen bg-background">
                <ClassesHero />
                <ClassesTypesSection />

            </main>
        </>
    );
};

export default Classes;
