import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.tsx";

const LeadCard = ({ type, count, change, status, note }) => {
    const statusStyles = {
        up: 'text-green-500',
        remaining: 'text-red-500',
        'all caught up': 'text-green-500'
    };

    const statusText = {
        up: 'Up from yesterday',
        remaining: 'Check the remaining',
        'all caught up': 'You are all caught up!'
    };

    return (
        <div className="min-w-[175px] min-h-[175px] md:w-auto">
            <Card className="border-2 rounded-lg flex flex-col justify-between">
                <CardHeader className="space-y-2 xl:space-y-1 2xl:space-y-2">
                    <CardTitle className="text-base xl:text-sm 2xl:text-base font-light text-gray-500">
                        {type}
                    </CardTitle>
                    <CardTitle className="text-3xl xl:text-3xl 2xl:text-5xl mt-0 pt-0">
                        {count}
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 xl:space-y-1 2xl:space-y-2">
                    {change && (
                        <p className="text-xs 2xl:text-sm text-black">
                            <span className={statusStyles[status]}>{change}</span>
                            <span>{status === 'up' ? ' Up from yesterday' : ''}</span>
                        </p>
                    )}
                    <CardDescription className="text-xs 2xl:text-sm text-black">
                        <span className={statusStyles[status]}>{note}</span>
                    </CardDescription>
                </CardContent>
            </Card>
        </div>
    );
};

export default LeadCard;
