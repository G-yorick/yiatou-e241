const Layout = ({ children }) => {
  return (
    <div className="bg-gray-100">
      <div className="w-full min-h-screen max-w-[650px] m-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
