import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { TiSocialLinkedin } from "react-icons/ti";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <div className="min-h-[450px] lg:h-[450px] bg-muted/90">
        <div className="flex flex-col lg:flex-row lg:space-x-20 p-4 lg:p-16 space-y-8 lg:space-y-0">
          <div className="flex-col space-y-6 lg:space-y-9">
            <p className="font-poppins text-base text-gray-500 w-full lg:w-96">
              Algérie Poste <br />
              <span>Toujours à votre service.</span>
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-base text-gray-500 mb-4">Links</h1>
            <ul className="font-poppins text-base text-gray-500 space-y-3">
              <li>
                <Link href="/services">Services </Link>
              </li>
              <li>
                <Link href="/contact-us">Avis</Link>
              </li>
              <li>
                <Link href="/contact-us">Support</Link>
              </li>
              <li>
                <Link href="/actualites">Actualites</Link>
              </li>
              <li>
                <Link href="/JoinUs">Join us</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-base text-gray-500 mb-4">
              Contact Us
            </h1>
            <p className="font-poppins text-base text-gray-500 w-full lg:w-80 mb-6">
              Vous avez des questions ou besoin d&apos;assistance ? Notre équipe
              est à votre disposition pour vous aider.
            </p>
            <p className="font-poppins text-base text-gray-500 w-full lg:w-80 mb-6">
              +923183561921
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <ul className="flex space-x-5 justify-center lg:justify-start lg:pt-48">
              <li className="rounded-full bg-slate-500 h-8 w-8 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:bg-blue-600">
                <Link href="#">
                  <BiLogoFacebook className="text-white" />
                </Link>
              </li>
              <li className="rounded-full bg-slate-500 h-8 w-8 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:bg-pink-500">
                <Link href="#">
                  <IoLogoInstagram className="text-white" />
                </Link>
              </li>
              <li className="rounded-full bg-slate-500 h-8 w-8 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:bg-black">
                <Link href="#">
                  <BsTwitterX className="text-white" />
                </Link>
              </li>
              <li className="rounded-full bg-slate-500 h-8 w-8 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:bg-blue-400">
                <Link href="#">
                  <TiSocialLinkedin className="text-white" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
