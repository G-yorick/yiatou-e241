import Layout from "./Layout";
import TopBarLayout from "./TopBarLayout";

const PageLayout = ({children,topBar = false,bottomBar = false}) => {
    return (
        <Layout>
            <div>
                {topBar ? <TopBarLayout>{topBar}</TopBarLayout> : null}
                {children}
                {bottomBar ? bottomBar : null}
            </div>
        </Layout>
    );
}

export default PageLayout;
