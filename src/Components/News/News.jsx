import React, { useState, useEffect } from "react";

function News({ newsData }) {
  const [articleImages, setArticleImages] = useState([]);

  useEffect(() => {
    const generateImages = () => {
      const images = newsData.map(() => getRandomImageUrl());
      setArticleImages(images);
    };

    generateImages();
  }, [newsData]);

  function getRandomImageUrl() {
    const randomImageIndex = Math.floor(Math.random() * 1000) + 1; // Change 1000 to the maximum number of available images
    return `https://source.unsplash.com/random/800x600/?crypto&${randomImageIndex}`;
  }

  return (
    <>
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {newsData.map((article, index) => (
          <div className="rounded-md border border-zinc-700 shadow-sm shadow-zinc-700" key={index}>
            <img
              src={articleImages[index]}
              alt="Crypto"
              className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg text-zinc-400 font-semibold">
                {article.title}
              </h1>
              <p className="mt-3 text-sm"></p>
              <a
                type="button"
                href={article.url}
                className="mt-4 w-full rounded-sm bg-zinc-400 px-2 py-1.5 text-sm font-semibold text-zinc-800 shadow-sm hover:bg-zinc-200/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </>
  );
}

export default News;
