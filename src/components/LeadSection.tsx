import React from 'react';
import LeadCard from "./LeadCard.tsx";
import { Button } from "./ui/button.tsx";

const leads = [
    {
        "id": 1,
        "date": "2024-06-09",
        "type": "Total Leads",
        "count": 100,
        "change": "8.5%",
        "status": "up",
        "note": "Up from yesterday"
    },
    {
        "id": 2,
        "date": "2024-06-09",
        "type": "Total Leads",
        "count": 100,
        "change": "8.5%",
        "status": "up",
        "note": "Up from yesterday"
    },
    {
        "id": 3,
        "date": "2024-06-09",
        "type": "Potential Leads",
        "count": 0,
        "status": "all caught up",
        "note": "You are all caught up!"
    },
    {
        "id": 4,
        "date": "2024-06-09",
        "type": "Unseen Leads",
        "count": 10,
        "status": "remaining",
        "note": "Check the remaining"
    }
];

export function LeadSection() {
    return (
        <div className=" min-w-[390px] flex flex-col justify-between items-center border border-gray-200 rounded-lg shadow-sm">
            <div className="p-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold">Leads</h1>
                    <div className="flex items-center">
                        <span className="mr-2">Today, 09, Jun 2024</span>
                    </div>
                </div>
            </div>
            <div className="p-4 sm:grid sm:grid-cols-2 gap-4">
                {leads.map((lead) => (
                    <LeadCard
                        key={lead.id}
                        type={lead.type}
                        count={lead.count}
                        change={lead.change}
                        status={lead.status}
                        note={lead.note}
                    />
                ))}
            </div>
            <div className="flex justify-center items-center p-4">
                <Button className="bg-transparent text-blue-500 m-0 p-6 hover:bg-transparent">View All</Button>
            </div>
        </div>
    );
}

export default LeadSection;
