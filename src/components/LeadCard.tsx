import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.tsx";

const LeadCard = ({ type, count, change, status, note }) => {
    const statusStyles = {
        up: 'text-green-500',
        remaining: 'text-red-500',
        'all caught up': 'text-green-500'
    };

    return (
        <div className="w-full w-min-[200px]">
            <Card className="shadow-md rounded-md flex flex-col justify-between">
                <CardHeader>
                    <CardTitle className="text-xs">{type}</CardTitle>
                    <CardTitle className="text-4xl">{count}</CardTitle>
                </CardHeader>
                <CardContent>
                    {change && (
                        <p className={`text-xs ${statusStyles[status]}`}>
                            {change} {status === 'up' && 'Up'} from yesterday
                        </p>
                    )}
                    <CardDescription className="text-xs">{note}</CardDescription>
                </CardContent>
            </Card>
        </div>
    );
};

export default LeadCard;
