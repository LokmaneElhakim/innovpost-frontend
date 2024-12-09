"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Service Monétique",
    image: "/services/ServiceM.png",
    description: "Innovative monetary solutions tailored to your needs.",
  },
  {
    title: "Service Financier",
    image: "/services/ServiceF.png",
    description: "Comprehensive financial services for personal growth.",
  },
  {
    title: "Service Postaux",
    image: "/services/ServiceP.png",
    description: "Reliable postal and shipping services.",
  },
];

// Detailed service cards for each main service
const monetiqueServices = [
  {
    title: "Paiement électroniques",
    image: "/services/PaimentE.png",
    description: "Achats en ligne et en magasin via Edahabia",
  },
  {
    title: "Retraits d'argent",
    image: "/services/RetC.webp",
    description: "Distributeurs automatiques et guichets postaux",
  },
  {
    title: "Paiement de factures",
    image: "/services/PF.jpg",
    description: "Électricité, eau, téléphone, etc",
  },
  {
    title: "E-paiement",
    image: "/services/EPaiment.jpg",
    description: "Plateforme BaridiPay pour des paiements sécurisés",
  },
];

const financierServices = [
  {
    title: "Consultation de solde",
    image: "/services/ConsultC.jpg",
    description: "Application mobile, web, ou SMS",
  },
  {
    title: "Relevé de compte",
    image: "/services/RelvC.jpg",
    description: "Détails des transactions",
  },
  {
    title: "Virements et transferts",
    image: "/services/Virement.jpg",
    description: " Entre CCP ou vers d'autres comptes",
  },
];

const postauxServices = [
  {
    title: "Envoi Colis EMS",
    image: "/services/COLIS.jpg",
    description: "Expédiez vite et livrez en toute sécurité",
  },
  {
    title: "Tracking",
    image: "/services/Tracking.png",
    description: " En temps réel via un numéro de suivi",
  },
  {
    title: "Vente des timbres",
    image: "/services/Timbre.jpg",
    description:
      "Des timbres pour chaque occasion, simplifiez vos envois avec nous",
  },
];

const ServicesParticulier = () => {
  const [activeServices, setActiveServices] = useState<string | null>(null);

  const handleServiceClick = (serviceType: string) => {
    setActiveServices(serviceType === activeServices ? null : serviceType);
  };

  const renderServiceCards = (
    serviceList: Array<{
      title: string;
      image: string;
      description: string;
    }>
  ) => {
    return serviceList.map((service, index) => (
      <Card
        key={index}
        className="flex flex-col h-96 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
      >
        <CardHeader className="pb-0">
          <CardTitle className="text-xl text-center">{service.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow p-4">
          <div className="relative w-full h-60 overflow-hidden rounded-lg group">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white font-bold text-center px-4">
                {service.description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    ));
  };

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Services Particuliers
        </h2>

        {/* Main Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 ">
          {services.map((service, index) => (
            <Card
              key={index}
              className="flex flex-col h-96 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <CardHeader className="pb-0">
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow p-4">
                <div className="relative w-full h-48 overflow-hidden rounded-lg group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white font-bold text-center px-4">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button
                  onClick={() => handleServiceClick(service.title)}
                  className="w-1/2 bg-blue-950 hover:bg-blue-900"
                >
                  {activeServices === service.title ? "Close" : "See all"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Dynamic Services Section */}
        {activeServices === "Service Monétique" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
            {renderServiceCards(monetiqueServices)}
          </div>
        )}

        {activeServices === "Service Financier" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
            {renderServiceCards(financierServices)}
          </div>
        )}

        {activeServices === "Service Postaux" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
            {renderServiceCards(postauxServices)}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesParticulier;
