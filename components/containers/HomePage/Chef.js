
import Image from 'next/image';

const Chef = () => {
    return (
        <div className='homepage__about-container'>

            <div className='xl:container mx-auto py-16 lg:flex'>

                <div className='w-full lg:w-1/2'>
                    <div className='w-[90%] md:w-[70%] lg:w-[80%]  aspect-[8/10] relative mx-auto'>
                        <Image src= "/chef.png" layout='fill' objectFit='cover' alt ="img" />
                    </div>
                </div>

                <div className='mt-16 lg:mt-0 px-8 lg:w-1/2'>
                    <p className='text-white text-[19px] tracking-wide font-base capitalize'>Chef's Word</p>
                    <div className='mb-5 w-[50px] h-[15px] relative'>
                        <Image src="/spoon.png" layout='fill' objectFit='contain' alt ="img" />
                    </div>
                    <h1 className='text-golden-color text-6xl font-base mt-8 tracking-wide'>What We Believe In</h1>

                    <div className='leading-[1.8] my-16'>
                        <div className='flex gap-2 items-end'>
                            <div className='relative w-[60px] h-[60px]'>
                                <Image src="/quote.png" layout='fill' objectFit = "contain" alt ="img" />
                            </div>
                            <p className='text-white text-[15px] '>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit .</p>
                        </div>
                        <p className='text-white text-[15px] '>Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.</p>
                    </div>

                    <div className='mb-14'>
                        <p className='text-golden-color text-3xl font-base tracking-wide'>Kevin Luo</p>
                        <p className='text-white'>Chef & Founder</p>
                    </div>


                    <Image src = "/sign.png" width={250} height = {100} alt ="img" />

                </div>

            </div>

        </div>
    );
}

export default Chef;