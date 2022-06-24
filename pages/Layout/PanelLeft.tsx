import Link from "next/link";
import { spotigyLogo,homeIcon,searchIcon,bibliotecaIcon,plusIcon,heart,downloadAppIcon } from "../../public/Svgs";
const PanelLeft = () => {
  return (
    <div className="bg-black h-screen text-white p-6 min-w-[240px] font-[Gotham-medium] relative">
        {/** logo */}
      <Link href="/"><div className="max-w-[131px] cursor-pointer">{spotigyLogo}</div></Link>
      {/*** first seption */}
      <ul className="mt-9 text-sm text-gray-default">
        <li className="text-white mb-4 transition duration-300">
            <Link href="/" passHref><a className="flex items-center ">{homeIcon}<span className="ml-4">Inicio</span></a></Link>
        </li>
        <li className="hover:text-white mb-4 transition duration-300">
            <Link href="/" passHref><a className="flex items-center">{searchIcon}<span className="ml-4">Buscar</span></a></Link>
        </li>
        <li className="hover:text-white mb-4 transition duration-300">
            <Link href="/" passHref><a className="flex items-center">{bibliotecaIcon}<span className="ml-4">Tu Biblioteca</span></a></Link>
        </li>
      </ul>
      {/*** second seption */}
      <ul className="mt-10 text-sm text-gray-default">
        <li className="hover:text-white mb-4 transition duration-300 group">
           <button className="flex items-center"><span className="bg-gray-default group-hover:bg-white transition duration-300 text-black rounded-sm p-[6px]">{plusIcon}</span><span className="ml-4">Crear Playlist</span></button>
        </li>
        <li className=" mb-4 transition duration-300 text-gray-default hover:text-white group">
            <Link href="/" passHref><a className="flex items-center"><span className="bg-gradient-to-br from-[#450af5]/70 group-hover:from-[#450af5] group-hover:via-[#ae9be8be] via-[#ae9be8be]/70 to-[#c4efd9]/70 group-hover:to-[#c4efd9] rounded-sm p-[6px]">{heart}</span><span className="ml-4">Tus me gusta</span></a></Link>
        </li>
      </ul>
      <hr className="border-[#282828]"/>
      <div className="absolute bottom-24 text-sm">
      <Link href="https://open.spotify.com/download" passHref><a className="flex items-center text-gray-default hover:text-white transition duration-300"><span>{downloadAppIcon}</span><span className="ml-4">Instalar aplicación</span></a></Link>
      </div>
    </div>
  );
};

export default PanelLeft;
