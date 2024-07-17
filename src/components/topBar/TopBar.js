import TopBarLayout from "../../pages/layout/TopBarLayout";
import SmsNotif from "../notifcation/SmsNotif";

const TopBar = () => {
    return (
        <TopBarLayout>
            <h1 className="font-black text-red-700 text-2xl">YIATOU</h1>
            <SmsNotif/>
        </TopBarLayout>
    );
}

export default TopBar;
