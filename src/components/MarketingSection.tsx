// CarouselContainer.jsx
import React from 'react';

import MarketingCard from "../components/MarketingCard.tsx";

const cardsData = [
    {
        "id": "1",
        "title": "Postcard",
        "size": "6X4 Size",
        "pages": "2 Pages",
        "imageUrls": ["https://i.etsystatic.com/21910918/r/il/feec6f/3167199561/il_794xN.3167199561_hai5.jpg", "https://i.etsystatic.com/21910918/r/il/feec6f/3167199561/il_794xN.3167199561_hai5.jpg"]
    },
    {
        "id": "2",
        "title": "Postcard",
        "size": "6X4 Size",
        "pages": "2 Pages",
        "imageUrls": ["https://i.etsystatic.com/21910918/r/il/78c827/3119479586/il_794xN.3119479586_3r92.jpg", "https://i.etsystatic.com/21910918/r/il/feec6f/3167199561/il_794xN.3167199561_hai5.jpg"]
    },
    {
        "id": "3",
        "title": "Postcard",
        "size": "6X4 Size",
        "pages": "2 Pages",
        "imageUrls": ["https://i.etsystatic.com/21910918/r/il/b14715/3167198203/il_794xN.3167198203_o7v4.jpg", "https://i.etsystatic.com/21910918/r/il/feec6f/3167199561/il_794xN.3167199561_hai5.jpg"]
    },
    {
        "id": "4",
        "title": "Postcard",
        "size": "6X4 Size",
        "pages": "2 Pages",
        "imageUrls": ["https://i.etsystatic.com/21910918/r/il/feec6f/3167199561/il_794xN.3167199561_hai5.jpg", "https://i.etsystatic.com/21910918/r/il/feec6f/3167199561/il_794xN.3167199561_hai5.jpg"]
    },
    {
        "id": "5",
        "title": "Feature Sheet",
        "size": "16X9 Size",
        "pages": "2 Pages",
        "imageUrls": ["https://d1csarkz8obe9u.cloudfront.net/posterpreviews/green-real-estate-agency-realtor-ad-design-template-63cd123b150a006f29fd4093c8c47982_screen.jpg?ts=1698413953", "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/green-real-estate-agency-realtor-ad-design-template-63cd123b150a006f29fd4093c8c47982_screen.jpg?ts=1698413953"]
    },
    {
        "id": "6",
        "title": "Feature Sheet",
        "size": "16X9 Size",
        "pages": "2 Pages",
        "imageUrls": ["https://d1csarkz8obe9u.cloudfront.net/posterpreviews/open-listed-house-ad-flyer-poster-template-re-design-3db877a13f14533e187595b9d94ab1c7_screen.jpg?ts=1664735478", "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/green-real-estate-agency-realtor-ad-design-template-63cd123b150a006f29fd4093c8c47982_screen.jpg?ts=1698413953"]
    },
    {
        "id": "7",
        "title": "Feature Sheet",
        "size": "16X9 Size",
        "pages": "2 Pages",
        "imageUrls": ["https://d1csarkz8obe9u.cloudfront.net/posterpreviews/real-estate-flyer-design-template-44c63827aed0bd1bf7b2ad7cbd179690_screen.jpg?ts=1714334503", "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/green-real-estate-agency-realtor-ad-design-template-63cd123b150a006f29fd4093c8c47982_screen.jpg?ts=1698413953"]
    },
    {
        "id": "8",
        "title": "Feature Sheet",
        "size": "16X9 Size",
        "pages": "2 Pages",
        "imageUrls": ["https://d1csarkz8obe9u.cloudfront.net/posterpreviews/real-estate-flyer-design-template-85471964a4e42d9c39450a87ac7fb751_screen.jpg?ts=1697322630", "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/green-real-estate-agency-realtor-ad-design-template-63cd123b150a006f29fd4093c8c47982_screen.jpg?ts=1698413953"]
    }
];

const MarketingSection = () => {
    return (
        <div className="p-4 bg-white rounded-2xl border-2">
            <h2 className="text-2xl font-bold mb-4">Marketing</h2>
            <div className="w-full grid grid-cols-2 xl:grid-cols-4 gap-4">
                {cardsData.map(card => (
                    <MarketingCard
                        key={card.id}
                        title={card.title}
                        size={card.size}
                        pages={card.pages}
                        imageUrls={card.imageUrls}
                    />
                ))}
            </div>
        </div>
    );
};

export default MarketingSection;
