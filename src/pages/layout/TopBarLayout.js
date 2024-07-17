const TopBarLayout = ({children}) => {
    return (
        <>
        <div className="h-[60px] w-full z-50 fixed left-0 top-0 shadow bg-white">
            <div className="w-full px-4 max-w-[640px] h-full mx-auto flex justify-between items-center">
                {children}
            </div>
        </div>
        <div className="h-[60px] w-full bg-white"></div>
        </>
    );
}

export default TopBarLayout;
