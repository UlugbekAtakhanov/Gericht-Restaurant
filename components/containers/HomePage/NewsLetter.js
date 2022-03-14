
import Image from 'next/image';


const NewsLetter = () => {
    return (
        <div className="homepage__about-container">
            <div className="xl:container mx-auto text-center px-8 py-16 ">
                <div className=' py-8 sm:border border-golden-color rounded bg-black-color sm:px-12 md:w-[80%] md:mx-auto'>
                    <h1 className=' text-xl  text-white tracking-wider font-base leading-[1]'>Newsletter</h1>
                    <div>
                        <Image src = "/spoon.png" width={45} height = {12} />
                    </div>
                    <h1 className='text-7xl text-golden-color font-base tracking-wider mt-8'>Subscribe To Our Newsletter</h1>
                    <p className='text-white mt-2'>And Never Miss Latest Updates!</p>

                    <input className='mt-12 w-full bg-transparent text-golden-color border-golden-color border p-2 rounded placeholder-grey-color text-sm tracking-wider font-base' type="text" placeholder='Enter your email address' />

                    <div className='text-center mt-16'>
                        <a className='border bg-white py-2 px-6 inline-block font-base ' href="#">View More</a>
                    </div>
                </div>

                
            </div>
        </div>
    );
}

export default NewsLetter;