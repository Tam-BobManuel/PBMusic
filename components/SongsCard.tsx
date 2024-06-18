import Image from "next/image";
import logo from "../public/Rectangle 2.png";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const artists = [
  { name: "Omone - Dreay Picasso", src: "https://github.com/shadcn.png" },
  { name: "Omone - Dreay Picasso", src: "https://github.com/shadcn.png" },
  { name: "Omone - Dreay Picasso", src: "https://github.com/shadcn.png" },
  { name: "Omone - Dreay Picasso", src: "https://github.com/shadcn.png" },
  { name: "Omone - Dreay Picasso", src: "https://github.com/shadcn.png" },
  { name: "Omone - Dreay Picasso", src: "https://github.com/shadcn.png" },
  { name: "Omone - Dreay Picasso", src: "https://github.com/shadcn.png" },
  { name: "Omone - Dreay Picasso", src: "https://github.com/shadcn.png" },
  { name: "Omone - Dreay Picasso", src: "https://github.com/shadcn.png" },
];

export default function Artists() {
  return (
    <div className="grid grid-cols-2 justify-center items-center sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
  {artists.map((artist, index) => (
    <div
      className="w-40 h-40 bg-cover bg-center rounded-2xl relative"
      style={{
        backgroundImage: `url(${artist.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      key={index}
    >
      <div
        className="absolute w-full h-full bg-black bg-opacity-50 rounded-2xl"
        style={{
          top: 0,
          left: 0,
        }}
      ></div>
      <div className="flex flex-col items-center text-white absolute bottom-0 p-2">
        <p>{artist.name}</p>
      </div>
    </div>
  ))}
  <div className="flex justify-center items-center">
    <button className="bg-[#0B4424] text-white rounded-2xl p-2 border-1 border-white flex flex-col justify-center items-center">
      <HiOutlineArrowSmRight size='30'/>
      <span>See more</span>
    </button>
  </div>
</div>
  );
}