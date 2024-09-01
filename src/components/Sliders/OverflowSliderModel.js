const OverflowSliderModel = ({children}) => {
    return (
        <div className="flex px-3 hidden-scroll py-6 flex-nowrap gap-6 overflow-x-scroll">
            {children}
        </div>
    );
}

export default OverflowSliderModel;
