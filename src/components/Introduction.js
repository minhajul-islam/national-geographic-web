import React from "react";

const Introduction = () => {

    const data = [
      {
        title: 'TRAVELS THROUGH TIME',
        details: 'Explore the fascinating stories behind the priceless treasures of China’s 5000-year-old culture.',
        url: 'https://static.toiimg.com/photo/79405406.cms'
      },
      {
        title: 'LAND OF SPLENDORS',
        details: 'Learn about China’s diverse and surprising array of wilderness habitats and national parks.',
        url: 'https://bloximages.chicago2.vip.townnews.com/magicvalley.com/content/tncms/assets/v3/editorial/8/23/823563bd-f55d-5268-b244-458eb6ee16c1/5fadd25e99589.image.jpg'
      },
      {
        title: 'A TASTE FOR CHINA',
        details: 'The varied and delicious cuisine of China is the product of both tradition and innovation. Discover more.',
        url: 'https://i1.wp.com/photogallery.info/wp-content/uploads/2018/11/IMG_20180724_214848_862.jpg'
      }
    ];

    return (
      <div id={'introduction'} className="bg-gray-800 lg:px-28">
        {/*Introduction*/}
        <div className='flex flex-wrap justify-center px-10 pt-16 pb-10'>
          <p className="font-bold text-yellow-300 text-center text-xs">INTRODUCTION</p>
          <p className="font-light lg:px-32 mb-12 my-3 px-2 text-center text-md text-gray-100">Welcome to a land of
            infinite adventure and unforgettable memories. China, with its storied cuisine,
            rich heritage and natural wonders, offers visitors an array of experiences found nowhere else in the world.
            Come discover a nation of wild landscapes, futuristic cities and ancient traditions.</p>
        </div>


        {/*Player*/}
        <div className='videoWrapper mx-8 sm:px-10'>
          <iframe className='video'
                  src="https://www.youtube.com/embed/_nNf9TmgD5I"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
        </div>

        <div className='px-10 mb-16 mt-6'>
          <p className="font-light  text-left text-md text-gray-100">
            With its rich culture, wilderness adventures and delicious cuisine, this ancient land has captivated travelers
            for centuries. Discover more about the allure of China and learn more here.
          </p>
        </div>

        {/*Read*/}
        <h1 className="font-light mt-16 mb-8 text-2xl text-center text-white"> — READ — </h1>

        <div className='px-4 pb-24'>
          <div className='flex flex-row flex-wrap items-center md:px-12 -mx-1 lg:-mx-4'>
            {data.map(item => {
              return (
                <div className='flex-wrap my-1  lg:w-1/3 md:w-1/2 w-full lg:px-4 px-1'>
                  <div className='flex-wrap bg-gray-700'>
                    <img src={item.url}/>
                    <div>
                      <p
                        className='font-medium mb-2 mt-8 pt-6 px-6 text-left text-xl text-yellow-300 uppercase'>{item.title}</p>
                      <p className='font-light px-6 text-md text-white whitespace-pre-line'>{item.details}</p>
                      <button
                        className='bg-blue-900 hover:bg-blue-800 focus:outline-none uppercase text-white px-4 py-2 mx-6 my-8'>
                        READ MORE
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
;

export default Introduction;
