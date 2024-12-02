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
    title: "INNOVPOST HACKATHON",
    src: "/Actualite/Act1.png",
    content: (
      <div>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg">
        Discover the tracks !
        Join us for the Innovpost Hackathon, an exciting 2-day event that brings together innovators, creators, and tech enthusiasts to build the future of postal services,this is an event you don’t want to miss. Let’s innovate together!
        </p>
        <Image
          src="/Actualite/Act1.png"
          alt="ACT1"
          width={400}
          height={250}
          className="mt-4 rounded-lg w-full"
        />
      </div>
    ),
  },
  {
    title: "Campagne de sensibilisation",
    src: "/Actualite/Act2.png",
    content: (
      <div>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg">
          Nous avons ajouté de nouveaux partenaires pour vos paiements électroniques avec Edahabia. Sécurité et facilité, tout à portée de main.
        </p>
        <Image
          src="/services/payment-partners.png"
          alt="Partenaires de paiement"
          width={400}
          height={250}
          className="mt-4 rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "Sondage",
    src: "/Actualite/Act3.png",
    content: (
      <div>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg">
          Jusqu'à 20 % de réduction sur l'envoi de vos colis à l'international. Une offre limitée, alors dépêchez-vous !
        </p>
        <Image
          src="/services/discount-international.png"
          alt="Réduction internationale"
          width={400}
          height={250}
          className="mt-4 rounded-lg"
        />
      </div>
    ),
  },
  {
    category: "Nouveaux Produits",
    title: "Découvrez nos nouveaux timbres exclusifs",
    src: "/services/new-stamps.png",
    content: (
      <div>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg">
          Une collection spéciale pour célébrer les monuments historiques d'Algérie. Disponibles dans tous nos bureaux de poste.
        </p>
        <Image
          src="/services/collectible-stamps.png"
          alt="Timbres exclusifs"
          width={400}
          height={250}
          className="mt-4 rounded-lg"
        />
      </div>
    ),
  },
  {
    category: "Recrutement",
    title: "Rejoignez notre équipe",
    src: "/services/hiring.png",
    content: (
      <div>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg">
          Nous recrutons ! Découvrez nos postes ouverts dans plusieurs domaines et contribuez à façonner l'avenir de la poste en Algérie.
        </p>
        <Image
          src="/services/team-recruitment.png"
          alt="Recrutement"
          width={400}
          height={250}
          className="mt-4 rounded-lg"
        />
      </div>
    ),
  },

];
