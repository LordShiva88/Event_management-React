import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import logo from "../../../assets/log.png";
const Footer = () => {
  return (
    <footer className="py-6 bg-gray-800 text-gray-50">
      <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 divide-opacity-50">
        <div className="grid md:grid-cols-3  gap-10 py-5 ">
          <div className="flex justify-center items-center">
            <img src={logo} className="" />
          </div>
          <div>
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
          </div>
          <div className="px-4 mt-4 md:mt-0">
            <p className=" text-lg font-medium">Category</p>
            <ul className="">
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
        </div>
        <div className="grid justify-center pt-6 lg:justify-between">
          <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
            <span>©2023 All rights reserved</span>
            <a rel="noopener noreferrer" href="#">
              <span>Privacy policy</span>
            </a>
            <a rel="noopener noreferrer" href="#">
              <span>Terms of service</span>
            </a>
          </div>
          <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
