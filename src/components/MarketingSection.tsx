// CarouselContainer.jsx
import React from 'react';

import MarketingCard from "../components/MarketingCard.tsx";

const cardsData = [
    {
        "id": "1",
        "title": "Postcard",
        "size": "6X4 Size",
        "pages": "2 Pages",
        "imageUrls": ["https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg", "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"]
    },
    {
        "id": "2",
        "title": "Postcard",
        "size": "6X4 Size",
        "pages": "2 Pages",
        "imageUrls": ["https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg", "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"]
    },
    {
        "id": "3",
        "title": "Postcard",
        "size": "6X4 Size",
        "pages": "2 Pages",
        "imageUrls": ["https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg", "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"]
    },
    {
        "id": "4",
        "title": "Postcard",
        "size": "6X4 Size",
        "pages": "2 Pages",
        "imageUrls": ["https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg", "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"]
    },
    {
        "id": "5",
        "title": "Feature Sheet",
        "size": "16X9 Size",
        "pages": "2 Pages",
        "imageUrls": ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3bc4c93f-7d3f-4930-b0b1-b941303cae0c/dg1gxi7-a30b7c4d-0acd-4829-8e8b-2135cb62703d.png/v1/fit/w_816,h_1456,q_70,strp/wallpaper___smartphone___9_16_by_epicsteps_dg1gxi7-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ1NiIsInBhdGgiOiJcL2ZcLzNiYzRjOTNmLTdkM2YtNDkzMC1iMGIxLWI5NDEzMDNjYWUwY1wvZGcxZ3hpNy1hMzBiN2M0ZC0wYWNkLTQ4MjktOGU4Yi0yMTM1Y2I2MjcwM2QucG5nIiwid2lkdGgiOiI8PTgxNiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.hOz1MKDR32Cnqm_5HuoAaJF3Dw8eZhoydCo2O7T8ggs", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3bc4c93f-7d3f-4930-b0b1-b941303cae0c/dg1gxi7-a30b7c4d-0acd-4829-8e8b-2135cb62703d.png/v1/fit/w_816,h_1456,q_70,strp/wallpaper___smartphone___9_16_by_epicsteps_dg1gxi7-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ1NiIsInBhdGgiOiJcL2ZcLzNiYzRjOTNmLTdkM2YtNDkzMC1iMGIxLWI5NDEzMDNjYWUwY1wvZGcxZ3hpNy1hMzBiN2M0ZC0wYWNkLTQ4MjktOGU4Yi0yMTM1Y2I2MjcwM2QucG5nIiwid2lkdGgiOiI8PTgxNiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.hOz1MKDR32Cnqm_5HuoAaJF3Dw8eZhoydCo2O7T8ggs"]
    },
    {
        "id": "6",
        "title": "Feature Sheet",
        "size": "16X9 Size",
        "pages": "2 Pages",
        "imageUrls": ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3bc4c93f-7d3f-4930-b0b1-b941303cae0c/dg1gxi7-a30b7c4d-0acd-4829-8e8b-2135cb62703d.png/v1/fit/w_816,h_1456,q_70,strp/wallpaper___smartphone___9_16_by_epicsteps_dg1gxi7-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ1NiIsInBhdGgiOiJcL2ZcLzNiYzRjOTNmLTdkM2YtNDkzMC1iMGIxLWI5NDEzMDNjYWUwY1wvZGcxZ3hpNy1hMzBiN2M0ZC0wYWNkLTQ4MjktOGU4Yi0yMTM1Y2I2MjcwM2QucG5nIiwid2lkdGgiOiI8PTgxNiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.hOz1MKDR32Cnqm_5HuoAaJF3Dw8eZhoydCo2O7T8ggs", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3bc4c93f-7d3f-4930-b0b1-b941303cae0c/dg1gxi7-a30b7c4d-0acd-4829-8e8b-2135cb62703d.png/v1/fit/w_816,h_1456,q_70,strp/wallpaper___smartphone___9_16_by_epicsteps_dg1gxi7-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ1NiIsInBhdGgiOiJcL2ZcLzNiYzRjOTNmLTdkM2YtNDkzMC1iMGIxLWI5NDEzMDNjYWUwY1wvZGcxZ3hpNy1hMzBiN2M0ZC0wYWNkLTQ4MjktOGU4Yi0yMTM1Y2I2MjcwM2QucG5nIiwid2lkdGgiOiI8PTgxNiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.hOz1MKDR32Cnqm_5HuoAaJF3Dw8eZhoydCo2O7T8ggs"]
    },
    {
        "id": "7",
        "title": "Feature Sheet",
        "size": "16X9 Size",
        "pages": "2 Pages",
        "imageUrls": ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3bc4c93f-7d3f-4930-b0b1-b941303cae0c/dg1gxi7-a30b7c4d-0acd-4829-8e8b-2135cb62703d.png/v1/fit/w_816,h_1456,q_70,strp/wallpaper___smartphone___9_16_by_epicsteps_dg1gxi7-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ1NiIsInBhdGgiOiJcL2ZcLzNiYzRjOTNmLTdkM2YtNDkzMC1iMGIxLWI5NDEzMDNjYWUwY1wvZGcxZ3hpNy1hMzBiN2M0ZC0wYWNkLTQ4MjktOGU4Yi0yMTM1Y2I2MjcwM2QucG5nIiwid2lkdGgiOiI8PTgxNiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.hOz1MKDR32Cnqm_5HuoAaJF3Dw8eZhoydCo2O7T8ggs", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3bc4c93f-7d3f-4930-b0b1-b941303cae0c/dg1gxi7-a30b7c4d-0acd-4829-8e8b-2135cb62703d.png/v1/fit/w_816,h_1456,q_70,strp/wallpaper___smartphone___9_16_by_epicsteps_dg1gxi7-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ1NiIsInBhdGgiOiJcL2ZcLzNiYzRjOTNmLTdkM2YtNDkzMC1iMGIxLWI5NDEzMDNjYWUwY1wvZGcxZ3hpNy1hMzBiN2M0ZC0wYWNkLTQ4MjktOGU4Yi0yMTM1Y2I2MjcwM2QucG5nIiwid2lkdGgiOiI8PTgxNiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.hOz1MKDR32Cnqm_5HuoAaJF3Dw8eZhoydCo2O7T8ggs"]
    },
    {
        "id": "8",
        "title": "Feature Sheet",
        "size": "16X9 Size",
        "pages": "2 Pages",
        "imageUrls": ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3bc4c93f-7d3f-4930-b0b1-b941303cae0c/dg1gxi7-a30b7c4d-0acd-4829-8e8b-2135cb62703d.png/v1/fit/w_816,h_1456,q_70,strp/wallpaper___smartphone___9_16_by_epicsteps_dg1gxi7-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ1NiIsInBhdGgiOiJcL2ZcLzNiYzRjOTNmLTdkM2YtNDkzMC1iMGIxLWI5NDEzMDNjYWUwY1wvZGcxZ3hpNy1hMzBiN2M0ZC0wYWNkLTQ4MjktOGU4Yi0yMTM1Y2I2MjcwM2QucG5nIiwid2lkdGgiOiI8PTgxNiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.hOz1MKDR32Cnqm_5HuoAaJF3Dw8eZhoydCo2O7T8ggs", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3bc4c93f-7d3f-4930-b0b1-b941303cae0c/dg1gxi7-a30b7c4d-0acd-4829-8e8b-2135cb62703d.png/v1/fit/w_816,h_1456,q_70,strp/wallpaper___smartphone___9_16_by_epicsteps_dg1gxi7-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ1NiIsInBhdGgiOiJcL2ZcLzNiYzRjOTNmLTdkM2YtNDkzMC1iMGIxLWI5NDEzMDNjYWUwY1wvZGcxZ3hpNy1hMzBiN2M0ZC0wYWNkLTQ4MjktOGU4Yi0yMTM1Y2I2MjcwM2QucG5nIiwid2lkdGgiOiI8PTgxNiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.hOz1MKDR32Cnqm_5HuoAaJF3Dw8eZhoydCo2O7T8ggs"]
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
