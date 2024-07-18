import React from 'react';
import { ArrowUp, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.tsx";

const LeadCard = ({ type, count, change, status, note }) => {
    const statusStyles = {
        up: 'text-green-500',
        remaining: 'text-red-500',
        'all caught up': 'text-green-500'
    };

    const statusIcons = {
        up: TrendingUp,
        remaining: AlertCircle,
        'all caught up': CheckCircle
    };

    const StatusIcon = statusIcons[status];

    return (
        <div className="min-w-[175px] min-h-[175px] md:w-auto">
            <Card className="border-2 rounded-lg flex flex-col justify-between h-full">
                <CardHeader className="space-y-2 xl:space-y-1 2xl:space-y-2">
                    <CardTitle className="text-base xl:text-sm 2xl:text-base font-light text-gray-500">
                        {type}
                    </CardTitle>
                    <CardTitle className="text-3xl xl:text-3xl 2xl:text-5xl mt-0 pt-0 pb-5">
                        {count}
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 xl:space-y-1 2xl:space-y-2">
                    {change && (
                        <p className="text-xs 2xl:text-sm text-black flex items-center space-x-1 flex-nowrap">
                            <StatusIcon className="text-black" size={16} />
                            <span className={statusStyles[status]}>{change}</span>
                            {status === 'up' && <span>Up from yesterday</span>}
                        </p>
                    )}
                    <CardDescription className="text-xs 2xl:text-sm text-black flex items-center space-x-1 flex-nowrap">
                        {status !== 'up' && <StatusIcon className={statusStyles[status]} size={16} />}
                        <span className={statusStyles[status]}>{note}</span>
                    </CardDescription>
                </CardContent>
            </Card>
        </div>
    );
};

export default LeadCard;
