import "../globals.css";
import Search from "@/components/Search";
import Image from "next/image";
import logo from "../public/Rectangle 2.png";
import FilterInput from "@/components/Filter";
import ArtistsCard from "@/components/ArtistsCard";
import SongsCard from "@/components/SongsCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black" role="main">
      <header className='flex flex-direction:column items-center w-full p-2'>
        {/* LOGO */}
        <div className='rounded-full w-[25%] overflow-hidden'>
          <Image src={logo} alt="website logo" />
        </div>
        {/* SEARCH INPUT */}
        <div className='w-full'>
          <Search aria-label="Search input" />
        </div>
      </header>
      <FilterInput/>
      <div className="text-white text-center bg-[#0B4424] my-2 p-2"><h1>ARTISTS</h1></div>
      <ArtistsCard/>
      
      <div className="text-white text-center bg-[#0B4424] my-2 p-2"><h1>SONGS</h1></div>
      <SongsCard/>
      <br />
      <Footer/>
    </main>
  );
}
