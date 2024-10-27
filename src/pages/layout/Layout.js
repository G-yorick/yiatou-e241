import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="font-sans min-h-screen">
      <div className="w-full min-h-screen max-w-[650px] m-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
