import { useCtx } from "../../contexts/context";

const Reproductor = () => {
    const {reproductor}:any=useCtx()
    return (
        <div className="absolute text-white z-50 bottom-0 px-5 h-20 flex items-center border-t border-[#3a3a3a] bg-[#121212] w-full">
            <div className="mx-auto">
            <audio src={reproductor?reproductor:""} autoPlay className="" controls preload="preload"></audio>
            </div>
        </div>
    );
}

export default Reproductor;