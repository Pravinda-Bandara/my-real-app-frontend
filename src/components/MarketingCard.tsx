// CarouselCard.jsx
import React from 'react';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "./ui/carousel.tsx";
import {CardContent} from "./ui/card.tsx";

const MarketingCard = ({ title, size, pages, imageUrls }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg my-4">
            <Carousel className="relative">
                <CarouselContent>
                    {imageUrls.map((url, index) => (
                        <CarouselItem key={index}>
                            <img className="w-full" src={url} alt={`${title} ${index + 1}`} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10" />
                <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10" />
            </Carousel>
            <CardContent className="px-1 py-4">
                <div className="font-bold text-sm mb-2">{title}</div>
                <div className="flex justify-between">
                <p className="text-white bg-gray-700 rounded-2xl p-2 text-xs ">{size}</p>
                <p className="text-white bg-gray-700 rounded-2xl p-2 text-xs ">{pages}</p>
                </div>
            </CardContent>
        </div>
    );
};

export default MarketingCard;

