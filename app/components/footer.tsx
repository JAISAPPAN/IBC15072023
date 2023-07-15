import Link from 'next/link'
const Footer = () => {
    return (
      <div className="mt-1 p-0">
        
  
        <div className="flex">
        <section className="bg-gray-800 py-8 w-1/3">
          <nav className="py-4">
          
          <ul className="flex justify-center">
            <li className="mr-6">
              <Link className="text-white hover:text-gray-300" href="/">Home</Link>
            </li>
            <li className="mr-6">
              <Link className="text-white hover:text-gray-300" href="/about">About</Link>
            </li>
            <li className="mr-6">
              <Link className="text-white hover:text-gray-300" href="/contact">Contact</Link>
            </li>
            <li className="mr-6">
              <Link className="text-white hover:text-gray-300" href="courses">Courses</Link>
            </li>
          </ul>
        </nav>
          </section>
          <section className="bg-gray-800 py-8 w-1/3">
            {/* Address section */}
            <div className="container mx-auto text-white">
              <h2 className="text-2xl font-bold mb-4">Address</h2>
              <p>Institute Of Blockchain And Cryptocurrency (IBC)</p>
              <p>2nd Floor, IBC Building,</p>
              <p>Ajman,United Arab Emirates.</p>
              <p>Ph # : +971-562870XXX</p>
              <p>Whatsapp : + 971-562XXXXXX</p>
            </div>
          </section>
  
          <section className="bg-gray-800 py-8 w-1/3">
            {/* Social Media Contacts section */}
            <div className="container mx-auto text-white">
              <h2 className="text-2xl font-bold mb-4 flex justify-center">Social Media</h2>
              <ul className="flex justify-center">
                <li className="mr-4">
                  <a className="text-white hover:text-gray-300" href="#">Facebook</a>
                </li>
                <li className="mr-4">
                  <a className="text-white hover:text-gray-300" href="#">Twitter</a>
                </li>
                <li className="mr-4">
                  <a className="text-white hover:text-gray-300" href="#">Instagram</a>
                </li>
              </ul>
            </div>
          </section>
  
          
        </div>
      </div>
    );
  };
  
  export default Footer;
  