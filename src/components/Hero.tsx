"use client";
import Image from "next/image";
import Link from "next/link";
import NavBar from "./global/NavBar";
import { BackgroundBeams } from "./animations/background-beams";
import { HeroImages } from "./animations/HeroImages";
export default function HeroSection() {
  return (
    <>
      <section className="bg-blue-50 dark:bg-gray-950 h-[85dvh]">
        <div className="absolute left-0 top-20 w-40 aspect-video bg-gradient-to-br from-blue-600 to-sky-400 rounded-full blur-3xl opacity-60"></div>
        <div className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 py-24 lg:py-4 flex flex-col lg:flex-row lg:items-center gap-10">
          <div className="lg:w-1/2  text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto flex flex-col md-justify-center">
            <h1 className="font-semibold text-teal-950 dark:text-white font-display text-2xl md:text-4xl lg:text-5xl mt-20">
              Algérie Poste <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-yellow-600 to-blue-500 ml-4 mt-7">
                Toujours à votre service.
              </span>
            </h1>
            <p className="mt-3 ml-4 text-gray-700 dark:text-gray-300 mx-auto lg:mx-0 max-w-xl">
              Découvrez un monde de services modernes et accessibles. De la
              gestion de vos comptes à vos transactions financières, Algérie
              Poste vous accompagne avec des solutions innovantes, rapides et
              fiables. Votre satisfaction, notre priorité !
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 lg:max-w-none max-w-md mx-auto lg:mx-0">
              <Link
                href="#"
                className="flex items-center justify-center py-3 px-6 border-2 border-transparent shadow-lg bg-blue-600 transition ease-linear hover:bg-blue-800 active:bg-blue-700 text-white rounded-full"
              >
                Get Started
              </Link>
            </div>
            <div className="flex items-center gap-1 gap-x-2 mt-10 justify-center lg:justify-start py-5">
              <div className="flex items-center -space-x-2"></div>
              <div className="flex flex-col justify-start items-start ">
                <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                  +12k
                </span>
                <span className="text-gray-600 dark:text-gray-300 text-sm">
                  Lovely users
                </span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative lg:h-auto max-w-2xl md:max-w-3xl mx-auto hidden md:flex justify-end">
            <div className="relative w-full h-full flex items-center aspect-square overflow-hidden lg:aspect-auto">
              <HeroImages />
            </div>
          </div>
        </div>
        <BackgroundBeams />
      </section>
    </>
  );
}
