import { Link } from "react-router-dom";

const SmsNotif = () => {
    return (
        <Link to="/messages" className="p-3 relative">
            <span className="absolute bg-red-600 text-white px-2 rounded-full right-0 top-0 text-[13px]">0</span>
            <i class="fi text-2xl fi-rr-comment-dots"></i>
        </Link>
    );
}

export default SmsNotif;
