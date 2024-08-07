const Layout = ({ children }) => {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <div className="w-full min-h-screen max-w-[650px] m-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
