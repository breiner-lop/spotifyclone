import GoBackButton from "../../components/buttons/GoBackButton";
import GoNextButton from "../../components/buttons/GoNextButton";
import { dropdownIcon, userIcon } from "../../public/Svgs";
import PanelLeft from "./PanelLeft";
import Reproductor from "./Reproductor";

const index = ({children}:any) => {
    return (
        <div className="flex w-full bg-[#121212]">
        <PanelLeft/>
        <main className="w-full relative">
        <div className='flex justify-between absolute z-50  py-4 pr-4 pl-8 w-full'>
        <div className='flex'>
          <div className='mr-4'><GoBackButton/></div>
          <GoNextButton/>
        </div>
        <div className='flex'>
          <button className='rounded-full px-6 py-1 border-[#5c5b5b] hover:border-white text-white font-[Gotham-medium] text-sm hover:scale-105 cursor-default border hover:bg-brown-dark'>Premium</button>
          <button className='bg-brown-dark hover:bg-brown-light text-white font-[Gotham-medium] ml-10 rounded-full flex p-[2px] pr-3 items-center text-sm'><span className='rounded-full bg-[#434242] p-2 mr-2'>{userIcon}</span> Breiner Lopez <span className='ml-2'>{dropdownIcon} </span></button>
        </div>
      </div>
        <div>
        {children}
        </div>
        </main>
        <Reproductor/>
        </div>
    );
}

export default index;