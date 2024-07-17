import Layout from "./Layout";

const PageLayout = ({children,topBar = false,bottomBar = false}) => {
    return (
        <Layout>
            <div>
                {topBar ? topBar : null}
                {children}
                {bottomBar ? bottomBar : null}
            </div>
        </Layout>
    );
}

export default PageLayout;
