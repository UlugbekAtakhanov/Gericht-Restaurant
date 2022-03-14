

import Image from 'next/image';
import { awards } from '../data/data';

const Laurels = () => {
    return (
        <div className="homepage__about-container">
            <div className="xl:container mx-auto px-8 py-16 md:flex justify-end items-center gap-12">

                <div className='md:w-1/2 lg:w-1/3'>
                    <p className='text-white text-[19px] tracking-wide font-base capitalize'>Awards & Recognition</p>
                    <div className='mb-5 w-[45px] h-[15px] relative'>
                        <Image src="/spoon.png" layout='fill' objectFit='contain' alt ="img" />
                    </div>
                        <h1 className='text-golden-color text-6xl font-base my-12'>Our Laurels</h1>
                        {awards?.map((item, index) => {
                            return (
                                <div className='flex gap-4 py-5 pl-4' key={index}>
                                    <Image src={item.imgUrl} width ={50} height = {50} objectFit = "contain" alt ="img" />
                                    <div>
                                        <p className='text-golden-color text-[20px] tracking-wide font-base'>{item.title}</p>
                                        <p className='text-white'>{item.subtitle}</p>
                                    </div>
                                </div>
                            )
                        })}
                </div>

                <div className='md:w-1/2 lg:p-8'>
                    <div className='relative w-[100%] mx-auto aspect-[2/3]'>
                        <Image src="/laurels.png" layout='fill' objectFit='contain' alt ="img" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Laurels;