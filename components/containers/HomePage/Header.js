
import Image from 'next/image';

const Header = () => {
    return (
            <div className=' lg:flex h-full flex-1 py-20  xl:container mx-auto'>
                
                <div className='lg:w-1/2 self-center mb-12 px-10'>
                    <p className='text-white text-[18px] font-base capitalize leading-[0.3]'>chase the new flavour</p>
                    <div className='mb-5'>
                        <Image src="/spoon.png" width={40} height = {10} objectFit='cover' />
                    </div>
                    <h1 className='text-golden-color text-[65px] md:text-[70px] capitalize font-base mb-5'>the key to fine dining</h1>
                    <p className='text-white font-alt text-[15px] tracking-wide leading-7 mb-5'>Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</p>
                    <a className='bg-white py-3 px-8 font-base capitalize tracking-wider text-black-color  text-sm inline-block' href="#">explore menu</a>
                </div>

                <div className='lg:w-1/2 flex justify-center items-center'>
                    <div className='w-[90%] md:w-[80%] lg:w-[70%] aspect-[1/1] relative'>
                        <Image src="/welcome.png" layout='fill' objectFit='contain' />
                    </div>
                </div>

            </div>
    );
}

export default Header;