"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/animations/apple-cards-carousel";

export function Actualites() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 bg-muted/90 ">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl text-center md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Actualités
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    title: "INNOVPOST HACKATHON",
    src: "/Actualite/Act1.png",
    content: (
      <div>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg">
          Discover the tracks ! Join us for the Innovpost Hackathon, an exciting
          2-day event that brings together innovators, creators, and tech
          enthusiasts to build the future of postal services,this is an event
          you don&apos;t want to miss. Let&apos;s innovate together!
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
          Nous avons ajouté de nouveaux partenaires pour vos paiements
          électroniques avec Edahabia. Sécurité et facilité, tout à portée de
          main.
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
          Jusqu&apos;à 20 % de réduction sur l&apos;envoi de vos colis à
          l&apos;international. Une offre limitée, alors dépêchez-vous !
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
          Une collection spéciale pour célébrer les monuments historiques
          d&apos;Algérie. Disponibles dans tous nos bureaux de poste.
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
          Nous recrutons ! Découvrez nos postes ouverts dans plusieurs domaines
          et contribuez à façonner l&apos;avenir de la poste en Algérie.
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
