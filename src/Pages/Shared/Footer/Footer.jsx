import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer-1 bg-gray-100 ">
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 py-10 lg:px-0 md:px-10 px-12">
        <div>
          <h1>Logo</h1>
        </div>
        <div className="px-4 mt-4 md:mt-0">
          <h6 className="font-bold mb-2">Address</h6>
          <address className="not-italic mb-4 text-sm">
            123 6th St.
            <br />
            Melbourne, FL 32904
          </address>
          <h6 className="font-bold mb-2">Email:</h6>
          <p>ltionnath4184@gmail.com</p>
        </div>
        <div className="px-4 mt-8 md:mt-0">
          <h5 className="text-xl font-bold mb-6">Help</h5>
          <ul className="list-none footer-links">
            <li className="mb-2">
              <a
                href="#"
                className="border-b border-solid border-transparent hover:border-purple-800 hover:text-[#eb347a]"
              >
                Support
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="border-b border-solid border-transparent hover:border-purple-800 hover:text-[#eb347a]"
              >
                Help Center
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="border-b border-solid border-transparent hover:border-purple-800 hover:text-[#eb347a]"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="px-4 mt-8 md:mt-0 space-y-4">
          <h5 className="text-xl font-bold">
            Stay connected
          </h5>
          <div className="text-2xl flex gap-8">
            <button href="" className="">
              <FaFacebook></FaFacebook>
            </button>
            <button href="" className="">
              <FaTwitter></FaTwitter>
            </button>
            <button href="" className="">
              <FaGoogle></FaGoogle>
            </button>
          </div>
          <button className="px-4 py-2 bg-[#eb347a] hover:bg-[#eb075e] rounded text-white font-bold">
            Get Started
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
