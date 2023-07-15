
import Image from 'next/image';

const ContactHero = () => {
  return (
    <div className="relative z-20">
      <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
      <div className="relative h-90 z-10">
        <Image
          src="/127.jpg"
          alt="Hero Background"
          height={400}
          width={1600}
          objectFit="cover"
        />
        
      </div>
    </div>
  );
};

export default ContactHero;
// import Image from 'next/image';

// const Hero = () => {
//   return (
//     <div className="relative">
//       <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
//       <div className="relative h-96">
//         <Image
//           src="/125.jpg"
//           alt="Hero Background"
//         //   layout="fill"
//             height={400}
//             width={1600}
//        objectFit="cover"
//         />
//         {/* <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
//           <h1 className="text-4xl font-bold mb-4">Welcome to our Website</h1>
//           <p className="text-xl">Discover amazing products and services.</p>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Hero;
