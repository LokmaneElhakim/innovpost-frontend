import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Services Particuliers",
    image: "/services/ServiceM.png",
    description:
      "Découvrez des services conçus spécialement pour les particuliers, incluant des solutions pratiques pour vos besoins quotidiens, comme les virements, paiements et la gestion de votre courrier.",
  },
  {
    title: "Services Coopératifs",
    image: "/services/ServiceFM.jpg",
    description:
      "Des services dédiés aux entreprises et institutions, avec des solutions adaptées pour simplifier vos opérations, comme la gestion des envois de masse, les paiements sécurisés et bien plus.",
  },
  {
    title: "Services Postaux",
    image: "/services/BaridiP.jpg",
    description:
      "Des services postaux rapides, fiables et sécurisés. Envoyez et recevez votre courrier, colis et paquets en toute simplicité, avec la garantie d’un acheminement sûr.",
  },
];

export default function Services() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56"
                />
                <CardDescription className="ml-4 mt-3">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/services" passHref>
            <Button size="lg">
              See All <span className="ml-0.5">&rarr;</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
