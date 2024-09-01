import TopBarLayout from "../../pages/layout/TopBarLayout";
import SmsNotif from "../notifcation/SmsNotif";

const TopBar = () => {
    return (
        <TopBarLayout>
            <div className="h-full flex items-center">
                <img src="/img/logo/logo.png" alt="logo" className="h-[70%]"/>
            </div>
            <SmsNotif/>
        </TopBarLayout>
    );
}

export default TopBar;
