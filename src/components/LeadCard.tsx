import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.tsx";

const LeadCard = ({ type, count, change, status, note }) => {
    const statusStyles = {
        up: 'text-green-500',
        remaining: 'text-red-500',
        'all caught up': 'text-green-500'
    };

    return (
        <div className="w-full md:w-auto">
            <Card className="border-2 rounded-lg flex flex-col justify-between ">
                <CardHeader className="space-y-2 xl:space-y-1 2xl:space-y-2">
                    <CardTitle className="text-base xl:text-sm 2xl:text-base font-light text-gray-500">{type}</CardTitle>
                    <CardTitle className="text-3xl xl:text-3xl 2xl:text-5xl">{count}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 xl:space-y-1 2xl:space-y-2">
                    {change && (
                        <p className={`text-xs xl:text-xs 2xl:text-sm ${statusStyles[status]}`}>
                            {change} {status === 'up' && 'Up'} from yesterday
                        </p>
                    )}
                    <CardDescription className="text-xs xl:text-xs 2xl:text-sm">{note}</CardDescription>
                </CardContent>
            </Card>
        </div>
    );
};

export default LeadCard;
