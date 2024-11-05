import React from 'react';
import TopBar from "../../components/topBar/TopBar";
import PageLayout from "../layout/PageLayout";
import BottomBar from "../../components/bottomBar/BottomBar";

const Homme = () => {
  return (
    <PageLayout bottomBar={<BottomBar />} topBar={<TopBar />}>
        <h1>Page Homme</h1>
    </PageLayout>
  );
};

export default Homme; 