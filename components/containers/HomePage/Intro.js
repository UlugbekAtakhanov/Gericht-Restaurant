
import { useRef, useState } from "react";
import {BsFillPlayFill, BsPauseFill} from "react-icons/bs"

const Intro = () => {
    const vidRef = useRef()
    const [play, setPlay] = useState(false)

    const videoHandler = () => {
        setPlay(!play)

        if (play) {
            vidRef.current.pause()
        } else {
            vidRef.current.play()
        }
    }

    return (
        <div className="relative h-screen">
            <video 
                className="w-full h-full object-cover"
                ref = {vidRef}
                src="/meal.mp4"
                type = "video/mp4"
                loop
                controls = {false}
                muted
             />

             <div className="bg-black/50 absolute inset-0 flex justify-center items-center">
                <div className="border text-white p-8 rounded-full" onClick={videoHandler}>
                    {play ? <BsPauseFill color="#fff" fontSize={32} /> : <BsFillPlayFill size={"2rem"} />}
                    
                </div>
             </div>
        </div>
    );
}

export default Intro;