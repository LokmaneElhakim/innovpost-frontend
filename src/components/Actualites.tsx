"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/animations/apple-cards-carousel";

export function Actualites() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Actualités
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="/alger-poste.svg"
              alt="Alger poste svg"
              fill
              className="md:w-2/3 md:h-2/3 h-full w-full object-contain mx-3"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/alger-poste.svg",
    content: <></>,
  },
  {
    category: "Artificial Intelligence2",
    title: "You can do more with AI.",
    src: "/alger-poste.svg",
    content: <></>,
  },
  {
    category: "Artificial Intelligence3",
    title: "You can do more with AI.",
    src: "/alger-poste.svg",
    content: <></>,
  },
  {
    category: "Artificial Intelligence4",
    title: "You can do more with AI.",
    src: "/alger-poste.svg",
    content: <></>,
  },
  {
    category: "Artificial Intelligence5",
    title: "You can do more with AI.",
    src: "/alger-poste.svg",
    content: <></>,
  },
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/alger-poste.svg",
    content: <></>,
  },
  {
    category: "Artificial Intelligence6",
    title: "You can do more with AI.",
    src: "/alger-poste.svg",
    content: <></>,
  },
  {
    category: "Artificial Intelligence7",
    title: "You can do more with AI.",
    src: "/alger-poste.svg",
    content: <></>,
  },
  {
    category: "Artificial Intelligence8",
    title: "You can do more with AI.",
    src: "/alger-poste.svg",
    content: <></>,
  },
  {
    category: "Artificial Intelligence9",
    title: "You can do more with AI.",
    src: "/alger-poste.svg",
    content: <></>,
  },
  {
    category: "Artificial Intelligence10",
    title: "You can do more with AI.",
    src: "/alger-poste.svg",
    content: <></>,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "/alger-poste.svg",
    content: <></>,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "/alger-poste.svg",
    content: <></>,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/alger-poste.svg",
    content: <></>,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "/alger-poste.svg",
    content: <></>,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "/alger-poste.svg",
    content: <></>,
  },
];
