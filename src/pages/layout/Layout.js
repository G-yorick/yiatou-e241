const Layout = ({ children,className = "" }) => {
  return (
    <div className={`min-h-screen ${className}`}>
      <div className="w-full min-h-screen max-w-[650px] m-auto mt-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;
