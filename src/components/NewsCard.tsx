// NewsCard.jsx
import React from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "./ui/card.tsx";
import {Button} from "./ui/button.tsx";

const NewsCard = ({ title, description, imageUrl }) => {
    return (
        <Card className="max-w-sm rounded overflow-hidden shadow-lg my-4">
            <img className="w-full" src={imageUrl} alt="News" />
            <CardHeader className="p-1 m-1">
                <CardTitle className="text-sm">{title}</CardTitle>
            </CardHeader>
            <CardContent className=" p-1 m-1">
                <CardDescription className="text-xs">{description}</CardDescription>
            </CardContent>
            <CardFooter className="p-0 m-0 flex justify-center">
                <Button className="bg-blue-900 mb-2">Read more</Button>
            </CardFooter>
        </Card>
    );
};

export default NewsCard;
