// NewsList.jsx
import React from 'react';
import NewsCard from "../components/NewsCard.tsx";

const newsData = [
    {
        id: "1",
        title: "New real estate feature sheet and postcard Designs",
        description: "We're dedicated to empowering real estate professionals with the tools to...",
        imageUrl: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
    },
    {
        id: "2",
        title: "New real estate feature sheet and postcard Designs",
        description: "We're dedicated to empowering real estate professionals with the tools to...",
        imageUrl: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
    },
    {
        id: "3",
        title: "New real estate feature sheet and postcard Designs",
        description: "We're dedicated to empowering real estate professionals with the tools to...",
        imageUrl: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
    }
];

const NewsSection = () => {
    return (
        <div className="p-4 w-[200px]">
            <h2 className="text-xl font-bold mb-4 text-center">Updates & News</h2>
            <div className="flex flex-col items-center">
                {newsData.map(news => (
                    <NewsCard
                        key={news.id}
                        title={news.title}
                        description={news.description}
                        imageUrl={news.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default NewsSection;
