
import { wines, cocktails } from '../data/data';
import Image from 'next/image';

const Menu = () => {

    return (
        <div className="bg-black-color">
            <div className="xl:container mx-auto py-16">

                <p className='text-white text-center font-base text-[1.2rem] tracking-wide'>Menu That Fits Your Palatte</p>
                <div className=' text-center'>
                        <Image src = "/spoon.png" width={45} height = {12} alt ="img" />
                </div>
                <h1 className='text-golden-color text-center text-6xl font-base mt-8 tracking-wider'>Today's Special</h1>

                <div className=' md:flex relative md:px-10'>

                    <div className='flex-1'>
                        <h1 className='text-white text-center mt-16 mb-12 text-4xl font-base'>Wine & Beer</h1>
                        <div className=''>
                            {wines?.map((item, index) => {
                                return (
                                    <div className=' p-5' key={index}>
                                        <div className='flex items-center justify-between gap-6 '>
                                            <p className='text-golden-color font-base text-[1.28rem] tracking-wide'>{item.title}</p>
                                            <div className='flex flex-1 justify-end items-center gap-8'>
                                                <div className='border-b border-golden-color w-20'></div>
                                                <p className='text-white font-base text-[1.25rem]'>{item.price}</p>
                                            </div>
                                        </div>
                                        <div className='text-[#AAA] text-sm '>
                                            <p>{item.tags}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className='px-5 flex-1'>
                        <div className='relative h-[85vh] my-10 '>
                            <Image src="/menu.png" layout='fill' objectFit='contain' alt ="img" />
                        </div>
                    </div>

                    <div className='flex-1'>
                        <h1 className='text-white text-center mt-16 mb-12 text-4xl font-base'>Cocktails</h1>
                        <div className=''>
                            {cocktails?.map((item, index) => {
                                return (
                                    <div className=' p-5' key={index}>
                                        <div className='flex items-center justify-between gap-6 '>
                                            <p className='text-golden-color font-base text-[1.28rem] tracking-wide'>{item.title}</p>
                                            <div className='flex flex-1 justify-end items-center gap-8'>
                                                <div className='border-b border-golden-color w-20'></div>
                                                <p className='text-white font-base text-[1.25rem]'>{item.price}</p>
                                            </div>
                                        </div>
                                        <div className='text-[#AAA] text-sm '>
                                            <p>{item.tags}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
                <div className='text-center mt-16 md:mt-0'>
                    <a className='border bg-white py-2 px-6 inline-block font-base ' href="#">View More</a>
                </div>

            </div>
        </div>
    );
}

export default Menu;