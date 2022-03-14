
import Image from 'next/image';


const FindUs = () => {
    return (
        <div className="homepage__about-container">
            <div className="xl:container mx-auto py-12 px-8 flex flex-col  justify-end md:flex-row lg:items-center gap-12 md:gap-0">
                <div className='md:w-1/2 tracking-wider'>
                    <h1 className=' text-xl  text-white tracking-wider  font-base leading-[1]'>Contact</h1>
                    <div className=''>
                        <Image src = "/spoon.png" width={45} height = {12} alt ="img" />
                    </div>
                    <h1 className='text-6xl text-golden-color font-base my-8'>Find Us</h1>
                    <p className='text-white my-8 mt-12 '>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
                    <p className='text-golden-color my-8'>Opening Hours</p>
                    <p className='text-white'>Mon - Fri: 10:00 Am - 02:00 Am</p>
                    <p className='text-white'>Sat - Sun: 10:00 Am - 03:00 Am</p>
                    <div className=' mt-10'>
                        <a className=' bg-white py-2 px-6 text-black-color font-base inline-block ' href="#">Visit Us</a>
                    </div>
                </div>

                <div className=' md:w-1/2 lg:w-2/5 mx-auto lg:mx-0 w-full'>
                    <div className='relative aspect-[3/3] w-[100%] '>
                        <Image src="/findus.png" layout='fill' objectFit='contain' alt ="img" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default FindUs;