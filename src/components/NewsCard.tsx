// NewsCard.jsx
import React from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "./ui/card.tsx";
import {Button} from "./ui/button.tsx";

const NewsCard = ({ title, description, imageUrl }) => {
    return (
        <Card className="max-w-sm border-2 rounded-2xl p-4  overflow-hidden border-2 my-4">
            <img className="w-full rounded-xl" src={imageUrl} alt="News" />
            <CardHeader className="p-1 m-1">
                <CardTitle className="text-sm">{title}</CardTitle>
            </CardHeader>
            <CardContent className=" p-1 m-1">
                <CardDescription className="text-xs">{description}</CardDescription>
            </CardContent>
            <CardFooter className=" m-0 p-0 flex justify-center">
                <Button className="bg-blue-900 w-full rounded-3xl">Read more</Button>
            </CardFooter>
        </Card>
    );
};

export default NewsCard;
