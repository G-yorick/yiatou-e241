const TopBarLayout = ({children}) => {
    return (
        <>
        <div className="h-[60px] w-full z-[100] fixed left-0 top-0 shadow bg-white">
            <div className="w-full max-w-[640px] h-full mx-auto flex justify-between items-center">
                {children}
            </div>
        </div>
        <div className="h-[60px] w-full bg-white"></div>
        </>
    );
}

export default TopBarLayout;
