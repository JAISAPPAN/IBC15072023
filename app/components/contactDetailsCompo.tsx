import Image from 'next/image'
import ContactModelForm from '../components/contactModelForm'
import {PhoneIcon} from "@heroicons/react/24/outline";
export default function ContactDetailsCompo(){
    return(
        <div>
            <div className='py-4 bg-blue-50'>
            <div className='flex justify-center p-6 text-bold text-3xl'><p >IBC campus Address:</p></div>
            <div className='flex justify-center p-1 text-bold text-2xl'><p>Institute Of Blockchain And Cryptocurrency (IBC),</p></div>
            <div className='flex justify-center p-1 text-bold text-xl'><p>2nd Floor, IBC Building,</p></div>
            <div className='flex justify-center p-1 text-bold text-xl'><p>Ajman, United Arab Emirates.</p></div>
            <div className='flex justify-center p-1 text-bold text-xl'><p>P.O.Box:555</p></div>
            <div className='flex justify-center p-1 text-bold text-xl'><p> Ph # : +971-562870XXX</p></div>
            <div className='flex justify-center p-1 text-bold text-xl'><p>Whatsapp: + 971-562XXXXXX</p></div>
            </div>
        <div className="flex justify-center bg-blue-100 py-5 ">
            
            <div className="w-1/2  ">
            <div className="flex justify-center text-2xl font-bold mt-5"><h1>Map Here</h1></div>
            <div className='py-12' ><Image
      src="/locationMap.jpg"
      alt="Description of the image"
      width={500}
      height={300}
      quality={80}
      priority={true}
      
      layout="responsive"
      objectFit="cover"
      objectPosition="center"
      className="rounded-lg"
    />
    </div>
            </div>
            <div className="w-1/2">
            <div className="flex justify-center text-2xl font-bold mt-5"><h1 >For more information :   Please Send Us A Request</h1></div>
            <div className='flux justify-center mt-20'><ContactModelForm/></div>
            </div>
        </div>
        </div>
    )
}