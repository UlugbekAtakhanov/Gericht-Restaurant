
import Image from 'next/image';
import {FiTwitter, FiFacebook, FiInstagram} from "react-icons/fi"

const Footer = () => {
    return (
        <div className="homepage__about-container py-12">
            <div className="xl:container mx-auto font-alt flex flex-col md:flex-row md:items-end gap-16">

                <div className='text-center text-white tracking-wider leading-[1.8] flex-1'>
                    <p className='text-3xl font-base mb-4'>Contact Us</p>
                    <p>9 W 53rd St, New York, NY 10019, USA</p>
                    <p>+1 212-344-1230</p>
                    <p>+1 212-344-1230</p>
                </div>

                <div className='flex-1'>
                    <div className='text-center text-white px-6 flex flex-col gap-3 items-center'>
                        <Image src="/gericht.png" width={230} height={66} alt ="img" />
                        <p>"The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others."</p>
                        <div>
                            <Image src = "/spoon.png" width={45} height = {12} alt ="img" />
                        </div>
                        <div className='flex items-center justify-center gap-4 text-2xl'>
                            <FiFacebook className='hover:text-golden-color cursor-pointer' />
                            <FiTwitter className='hover:text-golden-color cursor-pointer' />
                            <FiInstagram className='hover:text-golden-color cursor-pointer' />
                        </div>
                    </div>
                </div>

                <div className='text-center text-white flex-1'>
                    <h1 className='font-base text-3xl mb-10'>Working Hours</h1>
                    <p>Monday-Friday:</p>
                    <p className='mb-6'>08:00 Am - 12:00 Am</p>
                    <p>Saturday-Sunday:</p>
                    <p>07:00 Am - 11:00 Pm</p>
                </div>

            </div>
            <p className='text-center text-white  mt-20'>2021 Gericht. All Rights Reserved.</p>
        </div>
    );
}

export default Footer;