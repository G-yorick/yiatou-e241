import Layout from "./Layout";
import TopBarLayout from "./TopBarLayout";

const PageLayout = ({children, topBar = false, bottomBar = false, className = "bg-gray-500"}) => {
    return (
        <Layout className={className}>
            {topBar && <TopBarLayout>{topBar}</TopBarLayout>}
            <div className="w-full">
                {children}
            </div>
            {bottomBar}
        </Layout>
    );
}

export default PageLayout;
