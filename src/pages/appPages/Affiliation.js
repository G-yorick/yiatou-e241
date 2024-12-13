import TopBarWithButtonBack from "../../components/topBar/TopBarWithButtonBack";
import PageLayout from "../layout/PageLayout";
import AffiliationBanner from "../../components/affiliation/AffiliationBanner";
import ProgramDescription from "../../components/affiliation/ProgramDescription";
import ShareSection from "../../components/affiliation/ShareSection";
import EarningsSection from "../../components/affiliation/EarningsSection";
import HowItWorks from "../../components/affiliation/HowItWorks";

const Affiliation = () => {
    const handleAffiliationClick = () => {
        // Logique pour gérer le clic sur le bouton d'affiliation
    };

    return (
        <PageLayout topBar={<TopBarWithButtonBack link="/account" title="Affiliation"/>}>
            <AffiliationBanner />
            <ProgramDescription />
            <ShareSection />
            <EarningsSection onAffiliationClick={handleAffiliationClick} />
            <HowItWorks />
        </PageLayout>
    );
};

export default Affiliation;