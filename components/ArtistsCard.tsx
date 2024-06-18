
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const artists = [
  { name: "Kendrick", src: "https://github.com/shadcn.png" },
  { name: "Kendrick", src: "https://github.com/shadcn.png" },
  { name: "Kendrick", src: "https://github.com/shadcn.png" },
  { name: "Kendrick", src: "https://github.com/shadcn.png" },
  { name: "Kendrick", src: "https://github.com/shadcn.png" },
  { name: "Kendrick", src: "https://github.com/shadcn.png" },
  { name: "Kendrick", src: "https://github.com/shadcn.png" },
  { name: "Kendrick", src: "https://github.com/shadcn.png" },
  { name: "Kendrick", src: "https://github.com/shadcn.png" },
];

export default function Artists() {
  return (
    <div className="flex flex-wrap gap-4 md:flex-nowrap">
      {artists.map((artist, index) => (
        <div className="flex flex-col justify-center items-center text-white" key={index}>
          <Avatar>
            <AvatarImage src={artist.src} />
            <AvatarFallback>IMG</AvatarFallback>
          </Avatar>
          <p>{artist.name}</p>
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