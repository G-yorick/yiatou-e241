import { FaShare } from "react-icons/fa6";

const Article = () => {
    return (
        <div className="w-full border-2">
              <img
                class="max-h-[200px] w-full object-cover"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt=""
              />
              <div className="p-3">
                <p className="text-gray-400">Air Pods</p>
                <p className="my-2"><strong>2,500F</strong></p>
                <div className="flex justify-between items-center text-gray-400">
                    <p>43 vendus</p>
                    <button>
                        <FaShare/>
                    </button>
                </div>
              </div>
        </div>
    );
}

export default Article;
