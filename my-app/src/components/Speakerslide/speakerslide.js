import React from 'react';
import Slider from 'react-slick';



const speakers = [
    {
        img: `/Speakerslideimg/narendra-modi.jpg`,
        name: 'Speaker 1'
    },
    {
        img: `/Speakerslideimg/narendra-modi.jpg`,
        name: 'Speaker 2'
    },
    {
        img: `/Speakerslideimg/narendra-modi.jpg`,
        name: 'Speaker 3'
    },
    {
        img: `/Speakerslideimg/narendra-modi.jpg`,
        name: 'Speaker 4'
    },
    {
        img: `/Speakerslideimg/narendra-modi.jpg`,
        name: 'Speaker 5'
    },
    {
        img: `/Speakerslideimg/narendra-modi.jpg`,
        name: 'Speaker 6'
    },
];

function Speakers() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
          
        
    }


    return (
        <div className='w-3/4 m-auto mt-[65px]'>
            <div className='flex  justify-center align-center text-2xl font-bold text-red-700' >Executive Speakers</div>
            <div className='mt-5'>
                <Slider {...settings}>
                    {speakers.map((s) => (
                        <div key={s.name} className='bg-blue-800 h-10px pt-10 px-14 rounded-xl text-white'>

                            <div className=' rounded-xl bg-blue-300 flex justify-center align-center py-5 px-5 mx-16'>
                                <img src={s.img} alt='speakerimg' className='h-[450px] w-[640px] rounded-xl'></img>
                            </div>

                            <div className='flex flex-col justify-center items-center text-xl gap-4 p-3 font-bold'>
                                <p>{s.name}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Speakers;