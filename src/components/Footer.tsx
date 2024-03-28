import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import downloadApp1 from "@/assets/images/download_our_app1.png"
import downloadApp2 from "@/assets/images/download_our_app2.png"
import { Button } from "./ui/button";
import Logo from "./Logo";
import { MoveRight } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="border-b bg-dark-500 xl:px-10 border-b-slate-800">
        <div className="flex flex-col items-center py-10 md:flex-row">
          <aside className="xl:w-[60%] max-sm:justify-center space-y-2.5 text-wrap md:pe-10 flex flex-col items-center lg:items-start gap-1 lg:gap-3">
            <h2 className="max-sm:text-center text-white-1">
              Start learning with 67.1k students around the world.
            </h2>
            <div className="flex items-center w-full gap-3 max-md:justify-center lg:flex-row">
              <Button variant='outline' className=" text-white-1 border-slate-300 hover:bg-transparent">Join Our Family</Button>
              <Button variant='secondary' className="bg-dark-300  hover:!bg-dark-300/90 text-white-2">Browse All Courses</Button>
            </div>
          </aside>
          <div className="md:flex w-full items-center justify-center *:text-center gap-10 hidden">
            <div>
              <h3 className="lg:text-2xl text-[#fff] font-[600]">6.3k</h3>
              <span className="text-gray-300 text-[.8rem]">Online Courses</span>
            </div>
            <div>
              <h3 className="lg:text-2xl text-[#fff] font-[600]">6.3k</h3>
              <span className="text-gray-300 text-[.8rem]">Online Courses</span>
            </div>
            <div>
              <h3 className="lg:text-2xl text-[#fff] font-[600]">6.3k</h3>
              <span className="text-gray-300 text-[.8rem]">Online Courses</span>
            </div>
          </div>
        </div>
      </footer>

      <footer className="px-3.5 sm:px-7 bg-dark-500 xl:px-10">
        <div className="flex flex-col items-start *:py-4 lg:items-center max-md:gap-y-3 md:flex-row ">
          <aside className="md:w-[40%]  text-wrap md:pe-10 gap-y-3  flex flex-col lg:items-start gap-1 lg:gap-3">
            <div >
                <Logo />
                <p className="mt-1 leading-5 text-gray-500">
                  Learnify is a leading learning management system designed to
                  revolutionize online education. We provides a seamless
                  learning experience for students and educators alike.
                </p>
            </div>
            <div className="flex max-md:gap-y-1.5 max-md:justify-center gap-x-2 *:w-[40px] *:h-[40px] *:lg:w-[46px] *:lg:h-[46px] *:bg-dark-300 *:flex *:items-center *:justify-center *:text-lg *:text-[#fff]">
              <span>
                <TiSocialFacebook />
              </span>
              <span>
                <FaInstagram />
              </span>
              <span className="!bg-primary-500 shadow-md shadow-primary-400">
                <FaLinkedinIn />
              </span>
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaYoutube />
              </span>
            </div>
          </aside>
          <div className="grid w-full grid-cols-2 lg:grid-cols-4 max-lg:gap-y-3 ">
            <div className="flex flex-col items-start gap-y-5">
              <h6 className=" text-[1rem] font-semibold text-white-1 text-nowrap">
                Top 4 Category
              </h6>
              <div className="flex flex-col items-start text-gray-500 gap-y-2">
                <a className="footer-link group"><span>Development</span> <span className="hidden -mb-1.5 group-hover:block"><MoveRight className="h-4"/></span></a>
                <a className="footer-link group">Finance & Accounting <span className="hidden -mb-1.5 group-hover:block"><MoveRight className="h-4" /></span></a>
                <a className="footer-link group">Design <span className="hidden -mb-1.5 group-hover:block"><MoveRight className="h-4" /></span></a>
                <a className="footer-link group">Business <span className="hidden -mb-1.5 group-hover:block"><MoveRight className="h-4" /></span></a>
              </div>
            </div>
            <div className="flex flex-col items-start gap-y-5">
              <h6 className="text-[1rem] font-semibold text-white-1 text-nowrap">
                Quick Links
              </h6>
              <div className="flex flex-col items-start text-gray-500 gap-y-2">
                <a className="footer-link group">About <span className="hidden -mb-1.5 group-hover:block"><MoveRight className="h-4" /></span></a>
                <a className="footer-link group">Become Instructor <span className="hidden -mb-1.5 group-hover:block"><MoveRight className="h-4" /></span></a>
                <a className="footer-link group">Contact <span className="hidden -mb-1.5 group-hover:block"><MoveRight className="h-4" /></span></a>
                <a className="footer-link group">Career <span className="hidden -mb-1.5 group-hover:block"><MoveRight className="h-4" /></span></a>
              </div>
            </div>
            <div className="flex flex-col items-start gap-y-5">
              <h6 className="text-[1rem] font-semibold text-white-1 text-nowrap">Support</h6>
              <div className="flex flex-col items-start text-gray-500 gap-y-2">
                <a className="footer-link group">Help Center <span className="hidden -mb-1.5 group-hover:block"><MoveRight className="h-4" /></span></a>
                <a className="footer-link group">FAQs <span className="hidden -mb-1.5 group-hover:block"><MoveRight className="h-4" /></span></a>
                <a className="footer-link group">Terms & Condition <span className="hidden -mb-1.5 group-hover:block"><MoveRight className="h-4" /></span></a>
                <a className="footer-link group">Privary Policy <span className="hidden -mb-1.5 group-hover:block"><MoveRight className="h-4" /></span></a>
              </div>
            </div>
            <div className="flex flex-col pt-2.5 gap-y-4 -mt-3">
              <h6 className="text-[1rem] font-semibold text-white-1 text-nowrap">
                Download Our App
              </h6>
              <div className="space-y-1.5">
                <figure>
                  <img src={downloadApp1} alt="download our app for apple" />
                </figure>
                <figure>
                  <img src={downloadApp2} alt="download our app for andriod" />
                </figure>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </footer>

      <footer className="flex items-center justify-center px-3 border-t md:px-10 border-slate-800 bg-dark-500 footer">
        <p className="flex py-5 !text-[1.1rem] text gap-10 md:gap-2.5  text-wrap">
          <span>© 2024</span><span className="hidden italic font-semibold text-white-1 md:block">Learnify,</span> All rights reserved. Inc
        </p>
      </footer>
    </>
  );
};

export default Footer;
