import Image from "next/image"
import Link from "next/link"
export default function Header(){
    return(
        <div className="flex bg-blue-800">
        <div className="w-1/12 border-4 rounded-full border-blue-800 bg-white">
        <Image
      src="/edexlogo.png"
      width={200}
      height={30}
      alt="Picture of the author" className="p-4 bg-"
    />
        </div>
        <div className=" w-11/12 ">
            <ul className="flex justify-end items-end mt-7 text-white" >
                <li className="mr-4 font-bold text-xl hover:underline"  >
                    <Link href="/">Home</Link>
                </li>
                <li className="mr-4 font-bold text-xl hover:underline" >
                    <Link href="/about">About Us</Link>
                </li>
                <li className="mr-4 font-bold text-xl hover:underline">
                    <Link href="/contact">Contact Us</Link>
                </li>
                <li className="mr-4 font-bold text-xl hover:underline" >
                    <Link href="/courses">Courses</Link>
                </li>
            </ul>
    
        </div>
        </div>
            )
        }