import React from 'react';
import LeadCard from "./LeadCard.tsx";
import { Button } from "./ui/button.tsx";

const listings = [
    {
        "id": 1,
        "date": "2024-06-09",
        "type": "Listings Viewed",
        "count": 100,
        "change": "8.5%",
        "status": "up",
        "note": "Up from yesterday"
    },
    {
        "id": 2,
        "date": "2024-06-09",
        "type": "Forms Submitted",
        "count": 80,
        "change": "8.5%",
        "status": "up",
        "note": "Up from yesterday"
    },
    {
        "id": 3,
        "date": "2024-06-09",
        "type": "VOW Logins",
        "count": 80,
        "status": "up",
        "note": "Up from month"
    }
];

export function ListingSection() {
    return (
        <div className="bg-white w-full min-w-[390px] flex flex-col justify-between items-center border border-gray-200 rounded-lg shadow-sm">
            <div className="p-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold">Listings</h1>
                    <div className="flex items-center">
                        <span className="mr-2">18, May 2024 - 09, Jun 2024</span>
                    </div>
                </div>
            </div>
            <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                {listings.map((item, index) => (
                    <div key={item.id} className={`${index === 2 ? 'lg:col-span-2' : ''}`}>
                        <LeadCard
                            type={item.type}
                            count={item.count}
                            change={item.change}
                            status={item.status}
                            note={item.note}
                        />
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center p-4">
                <Button className="bg-transparent text-blue-500 m-0 p-6 hover:bg-transparent">View All</Button>
            </div>
        </div>
    );
}

export default ListingSection;
