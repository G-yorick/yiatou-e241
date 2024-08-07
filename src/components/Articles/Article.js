const Article = ({share = null}) => {
  const onShare = () =>{
    try {
      share();
    } catch (error) {
      console.log('pas une fonction');
    }
  }
    return (
        <div className="w-full bg-white rounded-xl relative overflow-hidden">
              <div className="absolute left-0 top-0 px-4 py-1 bg-red-600 rounded-tl rounded-br-2xl text-white font-medium">
                <span className="text-[13px]">-30%</span>
              </div>
              <img
                class="max-h-[200px] w-full object-cover"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt=""
              />
              <div className="p-3">
                <p className="text-gray-400">Air Pods</p>
                <p className="my-2 flex justify-between items-center">
                  <strong>2,500F</strong>
                  <button className="text-right bg-gray-100 px-3 py-2 rounded-full" onClick={onShare}>
                  <i class="fi fi-rr-refer-arrow"></i>
                    </button>
                  </p>
              </div>
        </div>
    );
}

export default Article;
