// NewsList.jsx
import React from 'react';
import NewsCard from "../components/NewsCard.tsx";

const newsData = [
    {
        id: "1",
        title: "New real estate feature sheet and postcard Designs",
        description: "We're dedicated to empowering real estate professionals with the tools to...",
        imageUrl: "https://media.licdn.com/dms/image/D5612AQEm7U35-bSzTg/article-cover_image-shrink_720_1280/0/1677049605158?e=2147483647&v=beta&t=Nt-ma0fR_J44cifs-hkX5ZiJL80BVRbV1h1iiHbECqc"
    },
    {
        id: "2",
        title: "New real estate feature sheet and postcard Designs",
        description: "We're dedicated to empowering real estate professionals with the tools to...",
        imageUrl: "https://www.noradarealestate.com/wp-content/uploads/2019/05/palm-bay-real-estate-market.jpeg"
    },
    {
        id: "3",
        title: "New real estate feature sheet and postcard Designs",
        description: "We're dedicated to empowering real estate professionals with the tools to...",
        imageUrl: "https://www.lankapropertyweb.com/images/webinar/panel-discussion-3-min.png"
    }
];

const NewsSection = () => {
    return (
        <div className="rounded-2xl w-[180px] 2xl:w-[250px]">
            <h2 className="text-xl font-bold mb-4">Updates & News</h2>
            <div className="flex flex-col items-center ">
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
