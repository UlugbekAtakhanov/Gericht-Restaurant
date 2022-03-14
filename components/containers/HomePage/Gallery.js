
import { useRef } from 'react';
import Image from 'next/image';
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs"


const galleryImages = [
    "/gallery01.png",
    "/gallery02.png",
    "/gallery03.png",
    "/gallery04.png",
]


const Gallery = () => {

    const  scrollRef = useRef(null)

    const scrollHandler = (direction) => {
        const {current} = scrollRef;

        if (direction === "left") {
            // console.log("left")
            current.scrollLeft -= 300
        }  else {
            // console.log("right")
            current.scrollLeft += 300
        } 

    }


    return (
        <div className="bg-black-color">
            <div className="xl:container mx-auto py-20 lg:py-10 lg:flex items-center">

                <div className=' px-8 w-3/4 lg:w-1/2 pr-12'>
                        <h1 className=' text-xl  text-white tracking-wider font-base leading-[1]'>Instagram</h1>
                        <div>
                            <Image src = "/spoon.png" width={45} height = {12} />
                        </div>
                        <h1 className='text-6xl text-golden-color font-base tracking-wider my-8'>Photo Gallery</h1>
                        <p className='text-grey-color font-alt'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.</p>
                        <div className=' mt-10'>
                            <a className='border bg-white py-2 px-6 text-black-color font-base inline-block ' href="#">View More</a>
                        </div>
                </div>

                <div className='lg:w-1/2 '>
                    <div className='overflow-hidden relative '>
                        <div  ref = {scrollRef}  className=' gallery transition-all scroll-smooth overflow-x-scroll'>
                            <div className='w-max pl-8 mt-16'>
                                    {galleryImages.map((item, index) => {
                                        return (
                                            <div key={index} className=' w-[255px] md:w-[310px] rounded overflow-hidden inline-block aspect-[3/4] m-3 relative'>
                                                <Image src={item} layout = "fill" objectFit='cover' />
                                                <div className='absolute inset-0 bg-black-color/50 opacity-0 hover:opacity-100 cursor-pointer flex items-center justify-center text-3xl text-white transition-all duration-200'>
                                                    <BsInstagram />
                                                </div>
                                            </div>
                                        )
                                    })}
                            </div>
                        </div>
                        <div className='text-golden-color text-4xl  absolute top-2/3 left-12 flex  w-[87%] justify-between'>
                            <BsArrowLeftShort className='bg-black-color rounded cursor-pointer hover:text-white' onClick={() => scrollHandler("left")} />
                            <BsArrowRightShort className='bg-black-color rounded cursor-pointer hover:text-white' onClick={() => scrollHandler("right")} />
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
}

export default Gallery;