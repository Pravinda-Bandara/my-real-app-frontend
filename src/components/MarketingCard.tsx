// CarouselCard.jsx
import React from 'react';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "./ui/carousel.tsx";
import {CardContent} from "./ui/card.tsx";

const MarketingCard = ({ title, size, pages, imageUrls }) => {
    return (
        <div className="bg-white max-w-sm rounded-xl pt-1 border-2 overflow-hidden border-2 my-4">
            <Carousel className="relative">
                <CarouselContent >
                    {imageUrls.map((url, index) => (
                        <CarouselItem className="rounded-2xl flex justify-center p-2" key={index}>
                            <img className="w-11/12 ml-4 rounded-2xl" src={url} alt={`${title} ${index + 1}`} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10" />
                <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10" />
            </Carousel>
            <CardContent className="px-1 py-4">
                <div className="font-bold text-sm mb-2 mx-2">{title}</div>
                <div className="flex justify-start">
                <p className="bg-gray-300 rounded-2xl p-2 mx-2 text-xs font-bold">{size}</p>
                <p className="bg-gray-300 rounded-2xl p-2 text-xs font-bold">{pages}</p>
                </div>
            </CardContent>
        </div>
    );
};

export default MarketingCard;

