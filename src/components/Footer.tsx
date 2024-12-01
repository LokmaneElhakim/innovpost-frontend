// import Image from "next/image";
// import React from "react";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="relative bg-blueGray-200 pt-8 pb-6 bg-blue-600">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap text-left lg:text-left">
//           <div className="w-full lg:w-6/12 px-4">
//             <h4 className="text-3xl fonat-semibold text-blueGray-700">
//               Algérie Poste
//             </h4>
//             <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
//               Toujours à votre service.
//             </h5>
//             <div className="mt-6 lg:mb-0 mb-6 flex space-x-2 mx-auto">
//               <Link href="" type="button">
//                 <Image
//                   src={"/socials/ig.svg"}
//                   width={20}
//                   height={20}
//                   alt="Instagram"
//                 />
//               </Link>
//               <Link href="" type="button">
//                 <Image
//                   src={"/socials/yt.svg"}
//                   width={20}
//                   height={20}
//                   alt="Instagram"
//                 />
//               </Link>
//               <Link href="" type="button">
//                 <Image
//                   src={"/socials/fb.svg"}
//                   width={20}
//                   height={20}
//                   alt="Instagram"
//                 />
//               </Link>
//               <Link href="" type="button">
//                 <Image
//                   src={"/socials/ig.svg"}
//                   width={20}
//                   height={20}
//                   alt="Instagram"
//                 />
//               </Link>
//             </div>
//           </div>
//           <div className="w-full lg:w-6/12 px-4">
//             <div className="flex flex-wrap items-top mb-6">
//               <div className="w-full lg:w-4/12 px-4 ml-auto">
//                 <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
//                   Useful Links
//                 </span>
//                 <ul className="list-unstyled">
//                   <li>
//                     <a
//                       className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
//                       href="https://www.creative-tim.com/presentation?ref=njs-profile"
//                     >
//                       About Us
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
//                       href="https://blog.creative-tim.com?ref=njs-profile"
//                     >
//                       Blog
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
//                       href="https://www.github.com/creativetimofficial?ref=njs-profile"
//                     >
//                       Github
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
//                       href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
//                     >
//                       Free Products
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="w-full lg:w-4/12 px-4">
//                 <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
//                   Other Resources
//                 </span>
//                 <ul className="list-unstyled">
//                   <li>
//                     <a
//                       className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
//                       href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
//                     >
//                       MIT License
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
//                       href="https://creative-tim.com/terms?ref=njs-profile"
//                     >
//                       Terms &amp; Conditions
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
//                       href="https://creative-tim.com/privacy?ref=njs-profile"
//                     >
//                       Privacy Policy
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
//                       href=""
//                     >
//                       Contact Us
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { TiSocialLinkedin } from "react-icons/ti";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <div className="min-h-[450px] lg:h-[450px]">
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
