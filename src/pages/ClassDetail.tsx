import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { classDetails } from '@/data/classesdetail';
import { classes } from '@/data/classes';
import ClassHeroSection from '@/components/classes/ClassHeroSection';
import ClassContentSection from '@/components/classes/ClassContentSection';
import MoreClassesSection from '@/components/classes/MoreClassesSection';

const ClassDetail = () => {
    const { slug } = useParams<{ slug: string }>();

    // Find the class detail
    const classDetail = classDetails.find((c) => c.slug === slug);

    // Find the class item for icon
    const classItem = classes.find((c) => c.slug === slug);

    // If class not found, redirect to 404
    if (!classDetail || !classItem) {
        return <Navigate to="/404" replace />;
    }

    return (
        <>
            <Helmet>
                <title>{classDetail.title} - Yoga Class Details | Yogayrn</title>
                <meta
                    name="description"
                    content={classDetail.intro}
                />
            </Helmet>

            <main className="min-h-screen bg-background">
                <ClassHeroSection
                    title={classDetail.title}
                    intro={classDetail.intro}
                    heroImage={classDetail.heroImage}
                    icon={classDetail.icon}
                />

                <ClassContentSection
                    about={classDetail.about}
                    moreDetails={classDetail.moreDetails}
                    bullets={classDetail.bullets}
                    details={classDetail.details}
                    cardDescription={classDetail.cardDescription}
                />

                <MoreClassesSection relatedClassSlugs={classDetail.relatedClasses} />
            </main>
        </>
    );
};

export default ClassDetail;
