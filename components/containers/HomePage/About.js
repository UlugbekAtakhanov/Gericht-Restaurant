
import Image from 'next/image';


const About = () => {
    return (
        <div className='homepage__about-container relative'>

            <div className=" px-3 xl:container mx-auto md:flex items-center py-24 md:py-0 relative z-[1]">

                <div className='text-right px-8  flex-[2]'>
                    <h1 className='text-[50px] lg:text-[64px] text-golden-color font-base leading-[1]'>About Us</h1>
                    <div>
                        <Image src = "/spoon.png" width={45} height = {12}  alt ="img" />
                    </div>
                    <p className='text-grey-color text-sm leading-[2] my-10'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
                    <a className=' bg-white py-2 px-6 inline-block font-base' href="#">Know More</a>
                </div>

                <div className='h-[90vh] md:flex-1  relative my-20'>
                    <Image src="/knife.png" layout='fill' objectFit='contain' alt ="img" />
                </div>

                <div className=' px-8 flex-[2]'>
                    <h1 className='text-[50px] lg:text-[64px] text-golden-color font-base leading-[1]'>Our History</h1>
                    <div>
                        <Image src = "/spoon.png" width={45} height = {12} alt ="img" />
                    </div>
                    <p className='text-grey-color text-sm leading-[2] my-10'>Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat. Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed Odio Nec Aliquet.</p>
                    <a className='border bg-white py-2 px-6 inline-block font-base' href="#">Know More</a>
                </div>


            </div>
            <div className=' absolute w-2/3 h-2/3 md:w-1/2 md:h-1/2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0'>
                <Image src = "/G.png" layout='fill' objectFit='contain' alt ="img" />
            </div>
        </div>

    );
}

export default About;