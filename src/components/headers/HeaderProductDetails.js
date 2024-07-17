import SliderModel from "../Sliders/SliderModel";

const HeaderProductDetails = () => {
    
    return (
        <SliderModel dots={true}>
            <div className='w-full h-[200px] bg-green-500 flex justify-center items-center'>
              <h3 className='text-white text-2xl'>1</h3>
            </div>
            <div className='w-full h-[200px] bg-green-500 flex justify-center items-center'>
              <h3 className='text-white text-2xl'>2</h3>
            </div>
            <div className='w-full h-[200px] bg-green-500 flex justify-center items-center'>
              <h3 className='text-white text-2xl'>3</h3>
            </div>
        </SliderModel>
    );
}

export default HeaderProductDetails;
