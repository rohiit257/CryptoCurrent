import React from "react";

function News({newsData}) {

    const getRandomImageUrl = () => {
        const randomImageIndex = Math.floor(Math.random() * 1000) + 1; // Change 1000 to the maximum number of available images
        return `https://source.unsplash.com/random/800x600/?crypto&${randomImageIndex}`;
      }
    
  return (
    <>
      <div class="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        



      {newsData.map((article, index) => (

        
        
        
        <div class="rounded-md border">
          <img
            src={getRandomImageUrl()}
            alt="Laptop"
            class="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
          />
          <div class="p-4">
            <h1 class="inline-flex items-center text-lg font-semibold">
              {article.title}
            </h1>
            <p class="mt-3 text-sm text-gray-600">
        
      </p>
           
          
            
            <a

              type="button"
              href={article.url}

              class="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              
            >
              Read More
            </a>
          </div>
        </div>
      ))}
      </div>
      
    </>
  );
}

export default News;
