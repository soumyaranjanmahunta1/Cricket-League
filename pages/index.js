import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import ball from "../public/tennis-ball-transparent-background-5.png";
import cricketImage from "../public/giphy.gif";
import { BiSolidCricketBall } from "react-icons/bi";
import { FaAward } from "react-icons/fa6";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log(cricketImage);
  return (
    <main
      className={`flex bg-[#28282B] min-h-screen flex-col items-center justify-between p-24`}
    >
      <div className="grid items-center justify-center">
        <div className="flex ">
          <h1 className="text-6xl text-[#DBAE3B] flex justify-center font-bold pb-3 ">
            WEL-Coime To Sabalanga Cricket League
            <FaAward />
          </h1>
        </div>
        <div className="grid items-center justify-center">
          <Image src={cricketImage} />
          <Link href={"/player_registration"}>
            <button
              type="submit"
              className="text-[#28282B] flex justify-center items-center gap-1 font-semibold rounded-full p-2 w-full hover:text-white bg-[#DBAE3B] hover:bg-[#ffb700] border-[2px] border-[#96731c] focus:border-[1px] focus:border-blue-500"
            >
              Click & Register Now
              <BiSolidCricketBall />
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
