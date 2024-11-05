import React from 'react';
import TopBar from "../../components/topBar/TopBar";
import PageLayout from "../layout/PageLayout";
import BottomBar from "../../components/bottomBar/BottomBar";

const Electronique = () => {
  return (
    <PageLayout bottomBar={<BottomBar />} topBar={<TopBar />}>
        <h1>Page Electronique</h1>
    </PageLayout>
  );
};

export default Electronique; 