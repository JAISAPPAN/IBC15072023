
import Image from 'next/image';

const HomeHero = () => {
  return (
    <div className="relative z-20">
      <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
      <div className="relative h-90 z-10">
        <Image
          src="/126.jpeg"
          alt="Hero Background"
          height={400}
          width={1600}
          objectFit="cover"
        />
        
      </div>
    </div>
  );
};

export default HomeHero;
