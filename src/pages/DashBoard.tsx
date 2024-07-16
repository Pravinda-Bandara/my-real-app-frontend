import Navbar from "../components/Navbar.tsx";
import LeadSection from "../components/LeadSection.tsx";
import ListingSection from "../components/ListingSection.tsx";
import MarketingSection from "../components/MarketingSection.tsx";
import NewsSection from "../components/NewsSection.tsx";
import SideMenu from "../components/SideMenu.tsx";

const Dashboard = () => {
    return (
        <div className="flex h-screen">
            <SideMenu className="w-1/6" />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <div className="flex-1 flex lg:flex-row p-4 gap-4">
                    <div className="flex flex-col lg:flex-1 gap-4">
                        <div className="flex flex-col xl:flex-row flex-1 gap-4">
                            <LeadSection className="flex-1 bg-white p-4 shadow-md rounded-md" />
                            <ListingSection className="flex-1 bg-white p-4 shadow-md rounded-md" />
                        </div>
                        <MarketingSection className="flex-1 bg-white p-4 shadow-md rounded-md" />
                    </div>
                    <NewsSection className="bg-white p-4 shadow-md rounded-md" />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
