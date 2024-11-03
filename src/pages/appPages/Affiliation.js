import TopBarWithButtonBack from "../../components/topBar/TopBarWithButtonBack";
import PageLayout from "../layout/PageLayout";

export default function Affiliation() {
    return (
        <PageLayout topBar={<TopBarWithButtonBack link="/account" title="Affiliation"/>}>
            <div className="px-4 py-12 text-justify bg-white">
                <h1>Affiliation</h1>
            </div>
        </PageLayout>
    )
}